import RenderFormItem from './render-form-item'
import RenderFormGroup from './render-form-group'
import Form from 'element-ui/lib/form'
import _set from 'lodash.set'

// 拷贝简单数据
//    不考虑引用，函数等复杂数据
function clone(data) {
  if (Array.isArray(data)) {
    return data.map(clone)
  } else if (data && typeof data === 'object') {
    let obj = Object.assign({}, data)
    for (let key in obj) {
      if (!obj.hasOwnProperty(key)) continue
      if (typeof obj[key] === 'object') {
        obj[key] = clone(obj[key])
      }
    }
    return obj
  } else {
    return data
  }
}

const isObject = obj =>
  Object.prototype.toString.call(obj) === '[object Object]'

const GROUP = 'group'

export default {
  name: 'ElFormRenderer',
  render(h) {
    this.content.forEach(this.initItemValue) // handle default value
    return h(
      'el-form',
      {
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
              options: this.options[item.$id],
              // _parent 指向el-form, 在render-form-group里有用到
              _parent: this
            },
            on: {
              updateValue: this.updateValue
            }
          }
          return [
            this.$slots[`$id:${item.$id}`],
            item.$type === GROUP
              ? h('render-form-group', data)
              : h('render-form-item', data)
          ]
        })
        .concat(this.$slots.default)
    )
  },
  components: {
    RenderFormItem,
    RenderFormGroup
  },
  mounted() {
    this.$nextTick(() => {
      // proxy
      Object.keys(Form.methods).forEach(item => {
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
  data() {
    return {
      value: {}, // 表单数据对象
      options: this.content.reduce((con, item) => {
        con[item.$id] =
          item.$type === GROUP
            ? item.$items.reduce((acc, cur) => {
                acc[cur.$id] = cur.$options || []
                return acc
              }, {})
            : item.$options || []
        return con
      }, {})
    }
  },
  watch: {
    content: {
      handler(newVal) {
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
    initItemValue(item) {
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
      defaultVal !== undefined &&
        this.updateValue({id: item.$id, value: defaultVal})
    },
    /**
     * 更新表单数据
     * @param  {String} options.id 表单ID
     * @param  {All} options.value 表单数据
     */
    updateValue({id, value}) {
      this.value = Object.assign({}, this.value, {
        [id]: value
      })
    },
    /**
     * 对外提供获取表单数据的函数
     * @public
     */
    getFormValue() {
      const getValue = (values, content) => {
        return Object.keys(values).reduce((acc, key) => {
          const item = content.find(it => it.$id === key)
          if (!item) {
            return acc
          }

          // 如果类型是group，对值递归处理
          if (item.$type === GROUP) {
            acc[key] = getValue(values[key], item.$items)
          } else {
            if (item.outputFormat) {
              const formatVal = item.outputFormat(clone(values[key]))
              // 如果 outputFormat 返回的是一个对象，则合并该对象，否则在原有 acc 上新增该 属性：值
              isObject(formatVal)
                ? Object.assign(acc, formatVal)
                : (acc[key] = formatVal)
            } else {
              acc[key] = clone(values[key])
            }
          }

          return acc
        }, {})
      }
      return getValue(this.value, this.content)
    },
    /**
     * 批量更新表单数据
     * @param {Object} 要更新的表单数据
     * @public
     */
    updateForm(values) {
      const updateValue = content => {
        return content.reduce((acc, item) => {
          const value =
            item.$type === GROUP
              ? updateValue(item.$items)
              : (item.inputFormat && item.inputFormat(values)) ||
                values[item.$id]

          if (value !== undefined) {
            _set(acc, item.$id, value)
          }

          return acc
        }, {})
      }

      this.value = Object.assign({}, this.value, updateValue(this.content))
    },
    /**
     * 动态设置新的options
     * @param {String} 表单id
     * @param {Array} 新选项
     * @public
     */
    setOptions($id, options) {
      if (!$id || !Array.isArray(options)) {
        return
      }
      _set(this.options, $id, options)
    },
    updateOptions(content, options) {
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
