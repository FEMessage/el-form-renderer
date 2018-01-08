import mixinOptionExtensions from './mixin-package-option'
import mixinEnableWhen from './mixin-enable-when'
import { toCamelCase } from './utils'

export default {
  mixins: [mixinOptionExtensions, mixinEnableWhen],
  props: {
    data: Object,
    itemValue: {},
    value: Object
  },
  computed: {
    // 是否显示
    _show () {
      return this.getEnableWhenSatatus()
    },
    // 是否所有表单都禁用
    configDisabled () {
      return false
    }
  },
  render (h) {
    if (!this.data) return
    return h(
      'el-form-item', {
        props: {
          prop: this.data.id,
          label: this.data.label,
          rules: this._show && Array.isArray(this.data.rules) ? this.data.rules : []
        },
        class: {
          'hidden': !this._show // 使用 v-show 减少 dom 操作
        }
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
      return h('el-' + data.type, {
        props: Object.assign({}, data, {
          value
          // disabled: this.configDisabled
        }),
        on: {
          // 手动更新表单数据
          input: (value) => {
            this.$emit('updateValue', { id: data.id, value })
          }
        }
      }, [
        (() => {
          let optRenderer = this[`${toCamelCase(data.type)}_opt`]
          if (typeof optRenderer === 'function' && Array.isArray(data.options)) {
            return data.options.map(optRenderer)
          }
        })()
      ])
    }
  }
}
