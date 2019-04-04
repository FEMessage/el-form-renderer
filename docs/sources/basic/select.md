# Select

:::demo
```html
<template>
  <el-form-renderer :content="content" inline></el-form-renderer>
</template>

<script>
export default {
  name: 'select',
  data() {
    return {
      content: [
        {
          $id: 'area',
          $type: 'select',
          label: '选择框',
          $el: {
            placeholder: '请选择内容'
          },
          $options: [{
            label: '区域一',
            value: 'shanghai'
          }, {
            label: '区域二',
            value: 'beijing'
          }]
        }
      ]
    }
  }
}
</script>
```
:::