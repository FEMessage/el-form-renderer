# 自定义组件设置自定义校验规则

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
  rules: [
    {
      required: true,
      message: '自定义组件的提醒消息'
    }
  ],
  props: ['value'],
  methods: {
    onInput(val) {
      this.$emit('input', val)
    }
  }
}
</script>
```

`rules` 也可以是个函数, 参数是当前表单项配置, 需要返回一个数组.

```js
rules(item) {
  return [
    {
      required: true,
      message: `${item.id} 不能为空`
    }
  ]
}
```

## 注意事项

暂不支持全局注册的组件

即使用 `Vue.component('your-component', YourComponent)` 注册的组件
