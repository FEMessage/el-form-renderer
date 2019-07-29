可以对自定义组件传入 `props`，使用 `el` 传入
例如配合 `upload-to-ali`，控制上传文件类型

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
          component: 'upload-to-ali',
          el: {
            accept: 'application/pdf'  // restrict upload-to-ali to only accept pdf
          }
        }
      ]
    }
  }
}
</script>
```
