选择框

```vue
<template>
  <el-form-renderer ref="form" :content="content" inline>
    <el-button @click="setOptions">变更区域</el-button>
  </el-form-renderer>
</template>

<script>
export default {
  name: 'select-demo',
  data() {
    return {
      content: [
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
    setOptions() {
      this.$refs.form.setOptions('area', [
        {
          label: '广州',
          value: 'guangzhou'
        },
        {
          label: '杭州',
          value: 'hangzhou'
        }
      ])
    }
  }
}
</script>
```
