# 自定义组件内部设置规则微指南

el-form-renderer 页面

`YourPage.vue`

```html
<template>
  <el-form-renderer ref="form" :content="content"></el-form-renderer>
</template>

<script>
import YourComponent from './YourComponent.vue'
export default {
  data() {
    return {
      content: [
        {
          id: 'phone',
          label: 'phone',
          component: YourComponent
        }
      ]
    }
  }
}
</script>
```

组件

`YourComponent.vue`

```html
<template>
  <input type="text" :value="value" @input="onInput">
</template>

<script>
export default {
  rules() {
    return [
      {
        required: true,
        message: '自定义组件的提醒消息'
      }
    ]
  },
  props: ['value'],
  methods: {
    onInput(val) {
      this.$emit('input', val)
    }
  }
}
</script>
```

## 注意事项

目前无法通过字符串`component: 'YourComponent'`的方式使用此特性
