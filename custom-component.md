自定义组件

```vue
<template>
  <el-form-renderer :content="content" inline></el-form-renderer>
</template>

<script>
export default {
  name: 'custom-component',
  data() {
    return {
      content: [
        {
          $id: 'avatar',
          // 全局注册的第三方组件
          component: 'upload-to-ali'
        }
      ]
    }
  }
}
</script>
```