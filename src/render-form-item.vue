<template>
  <el-form-item
    v-show="_show"
    :prop="prop"
    :label="data.label"
    :rules="_show && Array.isArray(data.rules) ? data.rules : []"
    v-bind="data.attrs"
  >
    <!-- TODO: 可用。后续将 renderFormItemContent 也要改造成 template 写法 -->
    <!-- <custom-component
      v-if="data.component"
      :component="data.component"
      :prefix="true"
      :value="itemValue"
      @input="$emit('updateValue', {id: data.id, value: $event})"
    /> -->
    <vnode :content="renderFormItemContent()" :fuck="true" />
  </el-form-item>
</template>
<script>
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
  components: {
    /**
     * 在 template 的 {{}} 中是无法渲染 vnode 的；
     * 这是在 template 里面写 vnode 的解决方案
     * FYI: https://stackoverflow.com/questions/49352525/can-you-render-vnodes-in-a-vue-template
     */
    Vnode: {
      functional: true,
      render: (h, ctx) => ctx.props.content
    },
    /**
     * 牛逼的很。只需要有组件选项对象，就可以用函数式组件无痕地在 template 中使用
     * FYI: https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6
     */
    /* eslint-disable vue/no-unused-components */
    CustomComponent: {
      functional: true,
      render: (h, ctx) => h(ctx.props.component, ctx.data)
    }
    /* eslint-enable vue/no-unused-components */
  },
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
    data(v) {
      validator(v)
    },
    /**
     * 这里其实用 remote 处理了两件事。有机会是可以拆分的
     * 1. 基本用法，配置 url 后即可从远程获取某个 prop 注入到组件
     * 2. 针对 select、checkbox-group & radio-group 组件，会直接将 resp 作为 options 处理；label & value 也是直接为这个场景而生的
     */
    'data.remote': {
      handler(v) {
        if (!v) return
        const isOptionsCase =
          ['select', 'checkbox-group', 'radio-group'].indexOf(this.data.type) >
          -1
        const {
          url,
          request = () => this.$axios.get(url).then(resp => resp.data),
          prop = 'options', // 默认处理 el-cascader 的情况
          dataPath = '',
          onResponse = resp => {
            if (dataPath) resp = _get(resp, dataPath)
            if (isOptionsCase) {
              return resp.map(item => ({
                label: item[label],
                value: item[value]
              }))
            } else {
              return resp
            }
          },
          onError = error => console.error(error.message),
          label = 'label',
          value = 'value'
        } = v
        Promise.resolve(request())
          .then(onResponse, onError)
          .then(resp => {
            if (isOptionsCase) {
              let formRenderer = this.$parent
              while (formRenderer.$options._componentTag !== 'el-form-renderer')
                formRenderer = formRenderer.$parent
              formRenderer.setOptions(this.prop, resp)
            } else {
              this.propsInner = {[prop]: resp}
            }
          })
      },
      immediate: true
    }
  },
  methods: {
    // TODO: 等待重构的怪物👹
    renderFormItemContent() {
      const h = this.$createElement
      const data = this.data
      const value = this.itemValue
      const obj = isObject(data.el) ? data.el : {}
      const elType = data.type
      if (data.readonly) {
        if (elType === 'input')
          return h(
            'div',
            obj.type === 'textarea'
              ? {
                  style: {
                    padding: '10px 0',
                    lineHeight: 1.5
                  }
                }
              : {},
            value
          )
      }
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

              // FIXME: 怪不得 rules 的 trigger 只写了 blur，却还会在 input 的时候触发校验！
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

              // FIXME:
              this.triggerValidate(data.id)
            }
          }
        },
        [
          (() => {
            let optRenderer = data.type && this[`${toCamelCase(data.type)}_opt`]
            if (
              typeof optRenderer === 'function' &&
              Array.isArray(this.options)
            ) {
              return this.options.map(optRenderer)
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
</script>
