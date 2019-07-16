import mixinOptionExtensions from './mixins/package-option'
import mixinEnableWhen from './mixins/enable-when'
import mixinHidden from './mixins/hidden'
import {toCamelCase, isObject} from './utils'

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
    /**
     * {Object} 表单属性定义
     */
    data: Object,
    prop: {
      type: String,
      default() {
        return this.data.id
      }
    },
    // 单项表单数据值
    itemValue: {},
    value: Object,
    disabled: Boolean,
    options: Array
  },
  computed: {
    // 是否显示
    _show() {
      // 当存在 hidden 时优先响应
      const isHidden = this.getHiddenStatus()
      return isHidden !== undefined ? !isHidden : this.getEnableWhenSatatus()
    }
  },
  render() {
    validator(this.data) // 对数据进行简单校验
    const {label} = this.data
    const isLabelString = typeof label === 'string'
    return (
      <ElFormItem
        prop={this.prop}
        label={isLabelString ? label : ''}
        rules={
          this._show && Array.isArray(this.data.rules) ? this.data.rules : []
        }
        {...{attrs: this.data.attrs}}
        style={!this._show ? 'display:none' : ''}
      >
        {[
          this.renderFormItemContent(),
          !isLabelString && <span slot="label">{label}</span>
        ]}
      </ElFormItem>
    )
  },
  methods: {
    /**
     * 渲染表单项的内容
     */
    renderFormItemContent() {
      const {data, itemValue: value} = this
      let obj = isObject(data.el) ? data.el : {}
      let elType =
        data.type === 'checkbox-button'
          ? 'checkbox-group'
          : data.type === 'radio-button'
            ? 'radio-group'
            : data.type
      let props = Object.assign({}, obj, {value})
      this.disabled && (props.disabled = this.disabled) // 只能全局禁用, false时不处理
      const {updateForm} = this.$parent.$parent
      const {on = {}} = data
      return this.$createElement(
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
              // 默认字符串类型处理去空格
              const trimVal =
                typeof value === 'string' &&
                (data.trim === undefined || data.trim)
                  ? value.trim()
                  : value
              this.$emit('updateValue', {id: data.id, value: trimVal})
              // 更新表单时调用
              if (typeof data.atChange === 'function') {
                data.atChange(data.id, trimVal)
              }
              if (on.input) on.input([trimVal, ...rest], updateForm)
            }
          }
        },
        (() => {
          let optRenderer = data.type && this[`${toCamelCase(data.type)}_opt`]
          if (
            typeof optRenderer === 'function' &&
            Array.isArray(this.options)
          ) {
            return this.options.map(optRenderer)
          }
        })()
      )
    }
  }
}
