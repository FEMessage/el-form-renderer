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
      this.content.map((item, index) => {
        return h(
          'el-form-item-renderer', {
            props: {
              key: index,
              data: item,
              value: this.value,
              itemValue: this.value[item.$id]
            },
            on: {
              updateValue: this.updateValue
            }
          }
        )
      })
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
    }
  }
}
