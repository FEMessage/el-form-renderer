获取表单数据

```vue
<template>
  <div>
    <el-form-renderer inline :content="content" ref="form">
      <el-form-item>
        <el-button type="primary" @click="printValue">打印表单数据</el-button>
        <el-button @click="data = {}">清除</el-button>
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
          label: '姓名',
          default: 'alvin',
          el: {
            placeholder: '请输入'
          }
        },
        {
          id: 'area',
          type: 'select',
          label: '选择框',
          el: {
            placeholder: '请选择内容'
          },
          options: [{
            label: '区域一',
            value: 'shanghai'
          }, {
            label: '区域二',
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
