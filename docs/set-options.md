Use setOptions to update select options

```vue
<template>
  <el-form-renderer ref="form" :content="content" inline>
    <el-button @click="setOptions">set</el-button>
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
          label: 'select',
          el: {
            placeholder: 'select'
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
    setOptions() {
      this.$refs.form.setOptions('area', [
        {
          label: 'guangzhou',
          value: 'guangzhou'
        },
        {
          label: 'hangzhou',
          value: 'hangzhou'
        }
      ])
    }
  }
}
</script>
```
