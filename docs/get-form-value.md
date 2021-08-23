默认情况下，通过 updateForm 设置的所有值都会输出。
如果只想输出根据 content 设置的表单项的值，可传入 {strict: true}

```vue
<template>
  <div>
    <el-form-renderer inline :content="content" ref="form">
      <el-form-item>
        <el-button type="primary" @click="printValue">print</el-button>
        <el-button @click="data = {}">reset</el-button>
      </el-form-item>
    </el-form-renderer>
    <pre>{{ data }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      content: [
        {
          id: 'name',
          type: 'input',
          label: 'name',
          default: 'alvin',
          el: {
            placeholder: 'input sth'
          }
        },
        {
          id: 'area',
          type: 'select',
          label: 'select',
          el: {
            placeholder: 'select stn'
          },
          options: [{
            label: 'shanghai',
            value: 'shanghai'
          }, {
            label: 'beijing',
            value: 'beijing'
          }]
        }
      ]
    }
  },
  methods: {
    printValue() {
      this.data = this.$refs.form.getFormValue()
    }
  },
}
</script>
```
