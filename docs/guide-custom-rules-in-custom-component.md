# 自定义组件设置自定义校验规则

## 为何要在自定义组件设置校验规则?

一个复杂的表单项配置,
往往需要定义一些规则(rules)来限制用户输入,
规则里面可能还会有自定义的验证器(validator),
这样的表单项多了之后, 就会导致**页面文件的配置项变得很长很长**.

现在 el-form-renderer 为自定义组件提供了一个接口,
自定义组件可以内部设置一些规则, 从而达到封装隐藏目的, 使用者可以不用再关心表单的验证规则。

**只需引入一个组件, 它全帮你做好了!**

## 教程

使用了 el-form-renderer 的页面

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

```bash
rules(item) {
  return [
    {
      required: true,
      message: `${item.id} 不能为空`
    }
  ]
}
```

可以通过 `overrideRules: true` 来覆盖自定义组件内置的校验规则

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
          component: YourComponent,
          overrideRules: true,
          rules: [
            {
              required: true,
              trigger: 'blur',
              message: '不能为空！'
            }
          ]
        }
      ]
    }
  }
}
</script>
```

## 在线Demo

[点击查看](https://rules-component.fem-misc.now.sh/#/misc)

## 注意事项

暂不支持全局注册的组件

即使用 `Vue.component('your-component', YourComponent)` 注册的组件
