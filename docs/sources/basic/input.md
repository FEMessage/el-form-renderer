# Input

:::demo
```html
<template>
  <el-form-renderer :content="content" inline></el-form-renderer>
</template>

<script>
export default {
  name: 'input',
  data() {
    return {
      content: [
        {
          $id: 'name',
          $type: 'input',
          label: '姓名',
          $default: 'alvin',
          $el: {
            placeholder: '请输入'
          }
        }
      ]
    }
  }
}
</script>
```
:::