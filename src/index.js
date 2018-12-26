import RenderFormItem from './render-form-item'
import RenderFormGroup from './render-form-group'
import Form from 'element-ui/lib/form'
import _set from 'lodash.set'

// 拷贝简单数据
//    不考虑引用，函数等复杂数据
function clone (data) {
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
              options: this.store[item.$id]
            },
            on: {
              updateValue: this.updateValue
            }
          }
          if (item.$type === 'group') return h('render-form-group', data)
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
      store: this.content.reduce((con, item) => {
        con[item.$id] = item.$type === 'group'
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
        this.updateStoreOptions(newVal, this.store)
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
      if (item.$type === 'group') {
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
      return clone(this.value)
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
      _set(this.store, $id, options)
    },
    updateStoreOptions (content, store) {
      content.forEach(item => {
        if (item.$type !== 'group' && store[item.$id]) {
          return
        }
        if (item.$type === 'group') {
          this.updateStoreOptions(item.$items, store[item.$id])
          return
        }
        this.$set(store, item.$id, item.$options || [])
      })
    }
  }
}
