import mixinOptionExtensions from './mixin-package-option'
import mixinEnableWhen from './mixin-enable-when'
import { toCamelCase, isObject } from './utils'

function validator (data) {
  if (!data) {
    throw new Error('item data must be an Object.')
  } else if (!data.$id) {
    throw new Error('item $id is unvalidated.')
  } else if (!data.$type) {
    throw new Error('item $type is unvalidated.')
  }
}

export default {
  mixins: [mixinOptionExtensions, mixinEnableWhen],
  props: {
    data: Object,
    prop: {
      type: String,
      default () {
        return this.data.$id
      }
    },
    itemValue: {},
    value: Object,
    disabled: Boolean
  },
  computed: {
    // 是否显示
    _show () {
      return this.getEnableWhenSatatus()
    }
  },
  render (h) {
    validator(this.data) // 对数据进行简单校验
    return h(
      'el-form-item', {
        props: {
          prop: this.prop,
          label: this.data.label,
          rules: this._show && Array.isArray(this.data.rules) ? this.data.rules : []
        },
        attrs: this.data.$attrs,
        style: !this._show ? 'display: none;' : ''// 使用 v-show 减少 dom 操作
      },
      [
        this.renderFormItemContent(h, this.data, this.itemValue)
      ]
    )
  },
  methods: {
    /**
     * 渲染表单项的内容
     * @param  {Object} data 表单属性定义
     * @param  {All} value 单项表单数据值
     */
    renderFormItemContent (h, data, value) {
      let obj = isObject(data.$el) ? data.$el : {}
      let elType = data.$type === 'checkbox-button' ? 'checkbox-group' : data.$type === 'radio-button' ? 'radio-group' : data.$type
      let props = Object.assign({}, obj, { value })
      this.disabled && (props.disabled = this.disabled) // 只能全局禁用, false时不处理
      return h('el-' + elType, {
        attrs: props, // 用于支持placeholder等原生属性(同时造成dom上挂载一些props)
        props,
        on: {
          // 手动更新表单数据
          input: (value) => {
            this.$emit('updateValue', { id: data.$id, value })
          }
        }
      }, [
        (() => {
          let optRenderer = this[`${toCamelCase(data.$type)}_opt`]
          if (typeof optRenderer === 'function' && Array.isArray(data.$options)) {
            return data.$options.map(optRenderer)
          }
        })()
      ])
    }
  }
}
