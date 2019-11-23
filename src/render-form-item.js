import mixinOptionExtensions from './mixins/package-option'
import mixinEnableWhen from './mixins/enable-when'
import mixinHidden from './mixins/hidden'
import {toCamelCase, isObject} from './utils'
import _get from 'lodash.get'

function validator(data) {
  if (!data) {
    throw new Error('data must be an Object.')
  } else if (!data.id) {
    throw new Error('`id` is unvalidated.')
  } else if (!data.type && !data.component) {
    throw new Error('`type` and `component` cannot both be null.')
  }
}

export default {
  mixins: [mixinOptionExtensions, mixinEnableWhen, mixinHidden],
  props: {
    data: Object,
    prop: {
      type: String,
      default() {
        return this.data.id
      }
    },
    itemValue: {},
    value: Object,
    disabled: Boolean,
    options: Array
  },
  data() {
    return {
      optionsInner: this.options,
      propsInner: {},
      isBlurTrigger:
        this.data.rules &&
        this.data.rules.some(rule => {
          return rule.required && rule.trigger === 'blur'
        })
    }
  },
  computed: {
    // 是否显示
    _show() {
      // 当存在 hidden 时优先响应
      const isHidden = this.getHiddenStatus()
      return isHidden !== undefined ? !isHidden : this.getEnableWhenSatatus()
    }
  },
  watch: {
    /**
     * 这里其实用 remote 处理了两件事。有机会是可以拆分的
     * 1. 基本用法，配置 url 后即可从远程获取某个 prop 注入到组件
     * 2. 针对 select、checkbox-group & radio-group 组件，会直接将 resp 作为 options 处理；label & value 也是直接为这个场景而生的
     */
    'data.remote': {
      handler(v) {
        if (!v) return
        const {
          url,
          request = () => this.$axios.get(url).then(resp => resp.data),
          prop = 'options', // 默认处理 el-cascader 的情况
          dataPath = '',
          onResponse = resp => {
            if (dataPath) resp = _get(resp, dataPath)
            switch (this.data.type) {
              case 'select':
              case 'checkbox-group':
              case 'radio-group':
                return resp.map(item => ({
                  label: item[label],
                  value: item[value]
                }))
              default:
                return resp
            }
          },
          onError = error => {
            console.error(error.message)
            return []
          },
          label = 'label',
          value = 'value'
        } = v
        Promise.resolve(request())
          .then(onResponse, onError)
          .then(resp => {
            switch (this.data.type) {
              case 'select':
              case 'checkbox-group':
              case 'radio-group':
                this.optionsInner = resp
                break
              default:
                this.propsInner = {[prop]: resp}
            }
          })
      },
      immediate: true
    }
  },
  render(h) {
    validator(this.data) // 对数据进行简单校验
    return h(
      'el-form-item',
      {
        props: {
          prop: this.prop,
          label: this.data.label,
          rules:
            this._show && Array.isArray(this.data.rules) ? this.data.rules : []
        },
        attrs: this.data.attrs,
        style: !this._show ? 'display: none;' : '' // 使用 v-show 减少 dom 操作
      },
      [this.renderFormItemContent(h, this.data, this.itemValue)]
    )
  },
  methods: {
    /**
     * 渲染表单项的内容
     * @param  {Object} data 表单属性定义
     * @param  {All} value 单项表单数据值
     */
    renderFormItemContent(h, data, value) {
      const obj = isObject(data.el) ? data.el : {}
      const elType = data.type
      if (elType === 'checkbox-button') data.type = 'checkbox-group'
      else if (elType === 'radio-button') data.type = 'radio-group'
      const props = {...obj, value, ...this.propsInner}
      this.disabled && (props.disabled = this.disabled) // 只能全局禁用, false时不处理
      const {updateForm} = this.$parent.$parent
      const {on = {}} = data
      return h(
        data.component || 'el-' + elType,
        {
          attrs: props, // 用于支持placeholder等原生属性(同时造成dom上挂载一些props)
          props,
          on: {
            ...Object.keys(on).reduce((obj, eName) => {
              obj[eName] = (...args) => on[eName](args, updateForm)
              return obj
            }, {}),
            // 手动更新表单数据
            input: (value, ...rest) => {
              this.$emit('updateValue', {id: data.id, value: value})
              // 更新表单时调用
              if (typeof data.atChange === 'function') {
                data.atChange(data.id, value)
              }
              if (on.input) on.input([value, ...rest], updateForm)

              this.triggerValidate(data.id)
            },
            change: (value, ...rest) => {
              const trimVal =
                typeof value === 'string' &&
                (data.trim === undefined || data.trim)
                  ? value.trim()
                  : value
              this.$emit('updateValue', {id: data.id, value: trimVal})
              if (on.change) on.change([trimVal, ...rest], updateForm)

              this.triggerValidate(data.id)
            }
          }
        },
        [
          (() => {
            let optRenderer = data.type && this[`${toCamelCase(data.type)}_opt`]
            if (
              typeof optRenderer === 'function' &&
              Array.isArray(this.optionsInner)
            ) {
              return this.optionsInner.map(optRenderer)
            }
          })()
        ]
      )
    },

    triggerValidate(id) {
      if (!this.data.rules || !this.data.rules.length) return

      /**
       * 下面代码可参考 `emitter`
       * 目的: 为了清除表单校验信息
       * 因为有部分表单项的值变更时没有清除校验信息, 因此需要触发一次校验用于清除
       * https://github.com/ElemeFE/element/blob/dev/src/mixins/emitter.js
       */
      let parent = this.$parent
      let name = parent.$options.componentName

      while (parent && name !== 'ElForm') {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.componentName
        }
      }

      if (!parent || this.isBlurTrigger) return

      this.$nextTick(() => {
        parent.validateField(id)
      })
    }
  }
}
