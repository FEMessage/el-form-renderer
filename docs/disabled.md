el-form-renderer 的 disabled 属性会禁用所有表单项

而 content 中每个表单元素的 el 对象内的 disabled 可以禁用对应的表单项

```vue
<template>
  <div>
    <el-form-renderer label-width="100px" :content="content" ref="ruleForm" :disabled="disabledAll"></el-form-renderer>
    <el-checkbox v-model="disabledAll">禁用全部</el-checkbox>
    <!-- <el-checkbox v-model="disabledArea">禁用 area</el-checkbox> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      disabledAll: false,
      disabledArea: false,
      content: [
        {
          type: 'input',
          id: 'name',
          label: 'name',
          attrs: { 'data-name': 'form1' },
          el: {
            size: 'mini',
            placeholder: 'test placeholder'
          },
          rules: [
            { required: true, message: 'miss name', trigger: 'blur' },
            { min: 3, max: 5, message: 'length between 3 to 5', trigger: 'blur' }
          ]
        }, {
          type: 'select',
          id: 'region',
          label: 'area',
          el: {
            disabled: false
          },
          options: [{
            label: 'area1',
            value: 'shanghai'
          }, {
            label: 'area2',
            value: 'beijing'
          }],
          rules: [
            { required: true, message: 'miss area', trigger: 'change' }
          ]
        }, {
          type: 'date-picker',
          id: 'date',
          label: 'date',
          el: {
            type: 'datetime',
            placeholder: 'select date'
          },
          rules: [
            { type: 'date', required: true, message: 'miss date', trigger: 'change' }
          ]
        }, {
          type: 'switch',
          id: 'delivery',
          label: 'delivery'
        }, {
          type: 'checkbox-group',
          id: 'type',
          label: 'type',
          default: [],
          options: [{
            label: 'typeA'
          }, {
            label: 'typeB'
          }, {
            label: 'typeC'
          }],
          rules: [
            { type: 'array', required: true, message: 'miss type', trigger: 'change' }
          ]
        }, {
          type: 'radio-group',
          id: 'resource',
          label: 'resource',
          options: [{
            label: 'resourceA'
          }, {
            label: 'resourceB'
          }],
          rules: [
            { required: true, message: 'miss resource', trigger: 'change' }
          ]
        }, {
          type: 'input',
          id: 'desc',
          label: 'desc',
          el: {
            type: 'textarea'
          },
          rules: [
            { required: true, message: 'miss desc', trigger: 'blur' }
          ]
        }
      ]
    }
  },

  watch: {
    disabledArea(val) {
      // FIXME: 不起作用
      this.$set(this.content[1].el, 'disabled', val)
    }
  }
}
</script>
```
