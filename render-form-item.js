import optionExtensions from './mixin-package-option'
import { toCamelCase } from './utils'

export default {
  mixins: [optionExtensions],
  methods: {
    /**
     * 渲染表单
     * @param  {Function} h
     * @param  {Boolean} show 是否显示
     * @param  {Object} data 表单属性定义
     * @param  {All} value 单项表单数据值
     */
    renderFormItem (h, show, data, value) {
      return h(
        'el-form-item', {
          props: {
            prop: data.id,
            rules: show && Array.isArray(data.rules) ? data.rules : []
          },
          class: {
            'hidden': !show // 使用 v-show 减少 dom 操作
          }
        },
        [
          this.renderFormItemLabel(data.label),
          this.renderFormItemContent(h, data, value)
        ]
      )
    },

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
    },

    /**
     * 渲染表单项的标题
     * @param  {String} label
     */
    renderFormItemLabel (label) {
      if (label) {
        return <template slot="label">{ label }</template>
      }
    }
  }
}
