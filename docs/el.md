可以对自定义组件传入 `props`，使用 `el` 传入
Use `el` to set props of custom component

例如配合 `upload-to-ali`，控制上传文件类型

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
            accept: 'application/pdf'  // 限定 upload-to-ali 只允许 pdf 文件
          }
        }
      ]
    }
  }
}
</script>
```
