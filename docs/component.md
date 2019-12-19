为了满足局部注册组件和使用自定义组件的需求，我们在原有组件的基础上拓展了原子表单的`component`属性，用于使用局部注册和自定义的组件。
注意： `component`适用于渲染局部注册组件和自定义组件，而`type`适用于带`el-`前缀的全局组件

Use custom component as form item, beside element-ui's component.
FYI: `type` is used with element-ui's component, and `component` is used with custom component.

```vue
<template>
  <el-form-renderer :content="content" inline />
</template>

<script>
// import ElSemverInput from '@femessage/el-semver-input' // 该组件已在全局注册过了，这里仅演示

export default {
  name: 'custom-component',
  data() {
    return {
      content: [
        {
          id: 'id',
          component: 'el-semver-input', // 如果已经使用 Vue.use(ElSemverInput) 或者在 Vue 实例选项的 components 里注册过了，可以这样使用
          // component: ElSemverInput, // 也可以局部 import 组件后，直接传入引用
        }
      ]
    }
  }
}
</script>
```
