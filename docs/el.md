可以对表单组件传入 `props`，使用 `el` 传入
例如配合 `el-input`，设置文本框

Use `el` to set props of custom component

```vue
<template>
  <el-form-renderer :content="content" inline />
</template>

<script>
export default {
  name: 'el',
  data() {
    return {
      content: [
        {
          id: 'document',
          type: 'input',
          el: {
            type: 'textarea'
          }
        }
      ]
    }
  }
}
</script>
```
