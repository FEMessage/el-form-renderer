import ElFormItemRenderer from './render'
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
      this.description.map((item, index) =>
        <el-form-item-renderer
          key={ index }
          data={ item }
          value={ this.value }
          itemValue={ this.value[item.id] }
          onUpdateValue={ this.updateValue }>
        </el-form-item-renderer>
      )
    )
  },
  components: {
    ElFormItemRenderer
  },
  mounted () {
    window.cc = this
    this.$nextTick(() => {
      Object.keys(Form.methods).forEach((item) => {
        this[item] = this.$refs.elForm[item]
      })
    })
  },
  props: Object.assign({}, Form.props, {
    // 描述
    description: {
      type: Array,
      default () {
        return [{
          type: 'input',
          label: '输入框测试',
          id: 'input',
          rules: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
        }, {
          type: 'switch',
          label: 'switch测试',
          id: 'switch'
        }, {
          type: 'radio-group',
          label: 'radio-group测试',
          id: 'radio-group',
          options: [{
            label: 'A',
            value: 'a'
          }, {
            label: 'B',
            value: 'b'
          }]
        }, {
          type: 'select',
          label: 'select测试',
          id: 'select',
          options: [{
            label: 'A',
            value: 'a'
          }, {
            label: 'B',
            value: 'b'
          }]
        }]
      }
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