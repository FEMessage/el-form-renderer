为了满足局部注册组件和使用自定义组件的需求，我们在原有组件的基础上拓展了原子表单的`component`属性，用于使用局部注册和自定义的组件。

注意： `component`适用于渲染局部注册组件和自定义组件，而`$type`适用于带`el-`前缀的全局组件

```vue
<template>
  <el-form-renderer :content="content" inline />
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
