<template>
  <el-form ref="elForm" v-bind="$attrs" :model="value">
    <template v-for="(item, index) in innerContent">
      <slot :name="`id:${item.id}`" />
      <slot :name="`$id:${item.id}`" />
      <component
        :is="item.type === GROUP ? 'render-form-group' : 'render-form-item'"
        :key="index"
        :data="item"
        :value="value"
        :item-value="value[item.id]"
        :disabled="disabled || item.disabled"
        :readonly="readonly || item.readonly"
        :options="options[item.id]"
        :_parent="this"
        @updateValue="updateValue"
      />
    </template>
    <slot />
  </el-form>
</template>
<script>
import _set from 'lodash.set'
import RenderFormGroup from './render-form-group.vue'
import RenderFormItem from './render-form-item.vue'
import transformContent from './transform-content'
import {isObject} from './utils'

const GROUP = 'group'

export default {
  name: 'ElFormRenderer',
  components: {
    RenderFormItem,
    RenderFormGroup
  },
  props: {
    content: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      GROUP,
      value: {}, // 表单数据对象
      options: {},
      // 用于兼容数据操作
      innerContent: []
    }
  },
  watch: {
    innerContent: {
      handler(newVal) {
        if (!newVal.length) {
          return
        }
        this.updateOptions(newVal, this.options)
      },
      deep: true
    }
  },
  beforeMount() {
    this.innerContent = transformContent(this.content)
    this.initItemOption()
    this.innerContent.forEach(this.initItemValue)
  },
  mounted() {
    this.$nextTick(() => {
      // proxy
      Object.keys(this.$refs.elForm.$options.methods).forEach(item => {
        this[item] = this.$refs.elForm[item]
      })

      /**
       * 首先执行 ElForm 原本的 resetFields 方法
       * 遍历 formRenderer data 里面的 value 对象
       * 如果这是一个数组，那么就把这个数组里面的 undefined 值去掉
       */
      this.resetFields = () => {
        this.$refs.elForm.resetFields()
        Object.keys(this.value).forEach(key => {
          if (Array.isArray(this.value[key])) {
            this.value[key] = this.value[key].filter(val => val !== undefined)
          }
        })
      }
    })
  },
  methods: {
    /**
     * 初始化每个表单原子的默认值
     * @param  {Object} item 表单原子描述
     */
    initItemValue(item) {
      if (!item.id || this.value[item.id] !== undefined) return
      let defaultVal
      if (item.type === GROUP) {
        // group
        defaultVal = item.items.reduce((acc, cur) => {
          cur.default && cur.id && (acc[cur.id] = cur.default)
          return acc
        }, {})
      } else if (item.default !== undefined) {
        // not group
        defaultVal = item.default
      }
      defaultVal !== undefined &&
        this.updateValue({id: item.id, value: defaultVal})
    },
    /**
     * 初始化每个表单项的选项
     */
    initItemOption() {
      this.options = this.innerContent.reduce((con, item) => {
        con[item.id] =
          item.type === GROUP
            ? item.items.reduce((acc, cur) => {
                acc[cur.id] = cur.options || []
                return acc
              }, {})
            : item.options || []
        return con
      }, {})
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
     * @return {object} key is item's id, value is item's value
     * @public
     */
    getFormValue() {
      const getValue = (values, content) => {
        return Object.keys(values).reduce((acc, key) => {
          const item = content.find(it => it.id === key)
          if (!item) {
            return acc
          }

          // 如果类型是group，对值递归处理
          if (item.type === GROUP) {
            acc[key] = getValue(values[key], item.items)
          } else {
            if (item.outputFormat) {
              const formatVal = item.outputFormat(values[key])
              // 如果 outputFormat 返回的是一个对象，则合并该对象，否则在原有 acc 上新增该 属性：值
              isObject(formatVal)
                ? Object.assign(acc, formatVal)
                : (acc[key] = formatVal)
            } else {
              acc[key] = values[key]
            }
          }

          return acc
        }, {})
      }
      return {...getValue(this.value, this.innerContent)}
    },
    /**
     * update form values
     * @param {object} values - key is item's id, value is the new value
     * @public
     */
    updateForm(values) {
      const updateValue = content => {
        return content.reduce((acc, item) => {
          let value
          if (item.type === GROUP) {
            value = updateValue(item.items)
          } else {
            value =
              typeof item.inputFormat === 'function'
                ? item.inputFormat(values)
                : values[item.id]
          }

          if (value !== undefined) {
            _set(acc, item.id, value)
          }

          return acc
        }, {})
      }

      this.value = Object.assign({}, this.value, updateValue(this.innerContent))
    },
    /**
     * update select options
     * @param {string} id<br>
     * @param {array} options
     * @public
     */
    setOptions(id, options) {
      if (!id || !Array.isArray(options)) {
        return
      }
      _set(this.options, id, options)
    },
    updateOptions(content, options) {
      content.forEach(item => {
        if (item.type !== GROUP && options[item.id]) {
          return
        }
        if (item.type === GROUP) {
          // 如果该group是动态添加的，则为 options 重新初始化属性
          if (options[item.id] === undefined) {
            this.$set(options, item.id, {})
          }
          this.updateOptions(item.items, options[item.id])
          return
        }
        this.$set(options, item.id, item.options || [])
      })
    }
  }
}
</script>
