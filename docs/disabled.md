disabled 可以设置在三个地方. 可以是一个函数.

1. 作为 el-form-renderer 的 prop 传入，禁用整个表单项，优先级最高
2. 作为 el 的属性传入，作用于单个表单项组件
3. 与 el 平级传入，效果和 2 相同（因历史原因存在

```vue
<template>
  <div>
    <el-form-renderer label-width="140px" :content="content" ref="ruleForm" :disabled="disabledAll"></el-form-renderer>
    <el-checkbox v-model="disabledAll">禁用全部</el-checkbox>
    <el-checkbox v-model="disabledArea">禁用 area</el-checkbox>
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
          disabled: false,
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
        },
        {
          type: 'switch',
          id: 'delivery',
          label: '禁用开关',
          default: true,
        }, {
          type: 'checkbox-group',
          id: 'type',
          label: '根据开关值禁用',
          disabled: form => form.delivery,
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
        },
        {
          type: 'input',
          id: 'desc',
          label: '使用el禁用',
          el: {
            disabled: true,
            type: 'textarea',
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
      this.content[1].disabled = val
      this.content = [...this.content]
    }
  }
}
</script>
```
