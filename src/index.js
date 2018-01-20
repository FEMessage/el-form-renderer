import ElFormItemRenderer from './render-form-item'
import { Form } from 'element-ui'

export default {
  render (h) {
    return h(
      'el-form', {
        props: Object.assign({}, this._props, {
          model: this.value // 用于校验
        }),
        ref: 'elForm'
      },
      this.content
        .map((item, index) => {
          // handle default value
          if (item.$id && this.value[item.$id] === undefined && item.$default !== undefined) {
            this.updateValue({ id: item.$id, value: item.$default })
          }
          return h(
            'el-form-item-renderer', {
              props: {
                key: index,
                data: item,
                value: this.value,
                itemValue: this.value[item.$id],
                disabled: this.disabled
              },
              on: {
                updateValue: this.updateValue
              }
            }
          )
        })
        .concat(this.$slots.default)
    )
  },
  components: {
    ElFormItemRenderer
  },
  mounted () {
    this.$nextTick(() => {
      Object.keys(Form.methods).forEach((item) => {
        this[item] = this.$refs.elForm[item]
      })
    })
  },
  props: Object.assign({}, Form.props, {
    content: {
      type: Array,
      required: true
    },
    // 禁用所有表单
    disabled: {
      type: Boolean,
      default: false
    }
  }),
  data () {
    return {
      value: {} // 表单数据对象
    }
  },
  methods: {
    /**
     * 更新表单数据
     * @param  {String} options.id 表单ID
     * @param  {All} options.value 表单数据
     */
    updateValue ({ id, value }) {
      this.value = Object.assign({}, this.value, {
        [id]: value
      })
    },
    // 对外提供获取表单数据的函数
    getFormValue () {
      return this.value
    }
  }
}
