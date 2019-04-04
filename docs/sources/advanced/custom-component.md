# Custom Component

:::demo
```html
<template>
  <el-form-renderer :content="content" inline></el-form-renderer>
</template>

<script>
import CustomComponent from './custom-component.vue'

export default {
  name: 'custom-component',
  data() {
    return {
      content: [
        {
          $id: 'button',
          component: CustomComponent,
          $default: 233,
          label: '按钮'
        }
      ]
    }
  }
}
</script>
```
:::