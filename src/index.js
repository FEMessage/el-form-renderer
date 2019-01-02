import RenderFormItem from './render-form-item'
import RenderFormGroup from './render-form-group'
import Form from 'element-ui/lib/form'
import _set from 'lodash.set'

const GROUP = 'group'

export default {
  render (h) {
    this.content.forEach(this.initItemValue) // handle default value
    return h(
      'el-form', {
        props: Object.assign({}, this._props, {
          model: this.value // 用于校验
        }),
        ref: 'elForm'
      },
      this.content
        .map((item, index) => {
          const data = {
            props: {
              key: index,
              data: item,
              value: this.value,
              itemValue: this.value[item.$id],
              disabled: this.disabled,
              options: this.options[item.$id]
            },
            on: {
              updateValue: this.updateValue
            }
          }
          if (item.$type === GROUP) return h('render-form-group', data)
          else return h('render-form-item', data)
        })
        .concat(this.$slots.default)
    )
  },
  components: {
    RenderFormItem,
    RenderFormGroup
  },
  mounted () {
    this.$nextTick(() => {
      // proxy
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
      value: {}, // 表单数据对象
      options: this.content.reduce((con, item) => {
        con[item.$id] = item.$type === GROUP
          ? item.$items.reduce((acc, cur) => {
            acc[cur.$id] = cur.$options || []
            return acc
          }, {})
          : (item.$options || [])
        return con
      }, {})
    }
  },
  watch: {
    content: {
      handler (newVal) {
        if (!newVal.length) {
          return
        }
        this.updateOptions(newVal, this.options)
      },
      deep: true
    }
  },
  methods: {
    /**
     * 初始化每个表单原子的默认值
     * @param  {Object} item 表单原子描述
     */
    initItemValue (item) {
      if (!item.$id || this.value[item.$id] !== undefined) return
      let defaultVal
      if (item.$type === GROUP) {
        // group
        defaultVal = item.$items.reduce((acc, cur) => {
          cur.$default && cur.$id && (acc[cur.$id] = cur.$default)
          return acc
        }, {})
      } else if (item.$default !== undefined) {
        // not group
        defaultVal = item.$default
      }
      defaultVal !== undefined && this.updateValue({ id: item.$id, value: defaultVal })
    },
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
      const getValue = (values, content) => {
        return Object.keys(values).reduce((acc, key) => {
          const item = content.find(it => it.$id === key)
          if (!item) {
            return acc
          }

          acc[key] = item.$type === GROUP
            ? getValue(values[key], item.$items)
            : item.outputFormat && item.outputFormat(values[key]) || values[key]
          return acc
        }, {})
      }
      return getValue(this.value, this.content)
    },
    /**
     * 批量更新表单数据, TODO， 假设values的数据结构为 {k: obj}, 会把整个 obj 更新至表单; 如果 obj 有多余的字段，getFormValue() 会拿到
     * @param  {Object} 要更新的表单数据
     */
    updateForm (values) {
      this.content.forEach(item => {
        if (values[item.$id] === undefined) {
          return
        }
        this.updateValue({
          id: item.$id,
          value: values[item.$id]
        })
      })
    },
    setOptions ($id, options) {
      if (!$id || !Array.isArray(options)) {
        return
      }
      _set(this.options, $id, options)
    },
    updateOptions (content, options) {
      content.forEach(item => {
        if (item.$type !== GROUP && options[item.$id]) {
          return
        }
        if (item.$type === GROUP) {
          // 如果该group是动态添加的，则为 options 重新初始化属性
          if (options[item.$id] === undefined) {
            this.$set(options, item.$id, {})
          }
          this.updateOptions(item.$items, options[item.$id])
          return
        }
        this.$set(options, item.$id, item.$options || [])
      })
    }
  }
}
