<template>
  <el-form ref="elForm" v-bind="$attrs" :model="value" class="el-form-renderer">
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
import _clonedeep from 'lodash.clonedeep'
import RenderFormGroup from './components/render-form-group.vue'
import RenderFormItem from './components/render-form-item.vue'
import transformContent from './util/transform-content'
import {
  collect,
  mergeValue,
  transformOutputValue,
  transformInputValue,
} from './util/utils'

const GROUP = 'group'

export default {
  name: 'ElFormRenderer',
  components: {
    RenderFormItem,
    RenderFormGroup,
  },
  props: {
    content: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      GROUP,
      value: {}, // 表单数据对象
      options: {},
      // 用于兼容数据操作
      innerContent: [],
    }
  },
  beforeMount() {
    this.innerContent = transformContent(this.content)
    this.options = collect(this.innerContent, 'options')
    // TODO: 考虑过 inputFormat 吗
    this.value = collect(this.innerContent, 'default')
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
     * 更新表单数据
     * @param  {String} options.id 表单ID
     * @param  {All} options.value 表单数据
     */
    updateValue({id, value}) {
      // TODO: 考虑过 group 没有？
      this.value = {...this.value, [id]: value}
    },
    /**
     * @return {object} key is item's id, value is item's value
     * @public
     */
    getFormValue() {
      const value = _clonedeep(this.value)
      return transformOutputValue(value, this.content)
    },
    /**
     * update form values
     * @param {object} newValue - key is item's id, value is the new value
     * @public
     */
    updateForm(newValue) {
      newValue = transformInputValue(newValue, this.innerContent)
      mergeValue(this.value, newValue, this.innerContent)
      this.value = {...this.value}
    },
    /**
     * update select options
     * @param {string} id<br>
     * @param {array} options
     * @public
     */
    setOptions(id, options) {
      _set(this.options, id, options)
      this.options = {...this.options} // 设置之前不存在的 options 时需要重新设置响应式更新
    },
  },
}
</script>
