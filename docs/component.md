为了满足局部注册组件和使用自定义组件的需求，我们在原有组件的基础上拓展了原子表单的`component`属性，用于使用局部注册和自定义的组件。

注意： `component`适用于渲染局部注册组件和自定义组件，而`type`适用于带`el-`前缀的全局组件

Use custom component as form item, beside element-ui's component.

FYI: `type` is used with element-ui's component, and `component` is used with custom component.

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
          id: 'avatar',
          component: 'upload-to-ali'
        }
      ]
    }
  }
}
</script>
```
