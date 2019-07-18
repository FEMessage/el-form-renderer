# 自定义组件设置自定义规则

el-form-renderer 页面

`your-page.vue`

```html
<template>
  <el-form-renderer ref="form" :content="content"></el-form-renderer>
</template>

<script>
import YourComponent from './your-component.vue'
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

`your-component.vue`

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

目前无法通过字符串 `component: 'your-component'` 的方式使用此特性
即使用 `Vue.component('your-component', YourComponent)` 注册的组件