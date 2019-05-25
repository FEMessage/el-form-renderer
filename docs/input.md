输入框

```vue
<template>
  <el-form-renderer :content="content" inline />
</template>

<script>
export default {
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
