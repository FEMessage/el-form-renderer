# 自定义组件接入指南

## 前言

[el-form-renderer](https://github.com/femessage/el-form-renderer) 的 `type` 有限, 默认只能渲染普通的表单项, 假如现在要渲染一个上传组件, `type` 就不够用了, 那怎么办呢? 这时候 component 选项就派上用场了

本文将介绍如何开发符合 [el-form-renderer](https://github.com/femessage/el-form-renderer) 接入标准的自定义组件, 实现对自定义组件的渲染

## 接入标准

自定义组件接入的关键是在组件内部实现 v-model

**建议在自定义组件上绑定 [$attrs](https://cn.vuejs.org/v2/api/#vm-attrs) 和 [$listeners](https://cn.vuejs.org/v2/api/#vm-listeners)**

[el-form-renderer](https://github.com/femessage/el-form-renderer) 对 v-model 的要求是:

- 有一个 props 为 value
- 对外触发 input 事件

下面是一个简单的例子

```html
<!-- 自定义组件 my-input -->
<input :value="value" @input="onInput" v-bind="$attrs" v-on="$listeners">

<script>
export default {
  props: {
    value: String,
    title: String
  },
  watch: {
    value(value) {
      this.$emit('customEvent', value, 'message')
    }
  },
  methods: {
    onInput(val) {
      this.$emit('input', 'my-input: ' + val)
    }
  }
}
</script>
```

则可以用 component 属性让 [el-form-renderer](https://github.com/femessage/el-form-renderer) 渲染此自定义组件

```html
<template>
  <el-form-renderer :content="content"/>
</template>

<script>
import MyInput from '@/components/my-input.vue'
export default {
  data() {
    return {
      content: [
        {
          component: MyInput,
          id: 'myInput',
          label: 'label',
          // 传入组件属性
          el: {
            placeholder: '请输入一个 title',
            type: 'submit', // submit button
            title: '这是一个标题' // custom defined props
          },
          // 传入组件事件
          on: {
            focus: ([event], updateForm) => {
              console.log(event.target.value) // output: input value
            },
            customEvent: ([value, msg], updateForm) => {
              console.log(msg) // output: 'message'
            }
          }
        }
      ]
    }
  },
}
</script>
```

- 需要注意，on 中的 function 定义，组件 emit 事件的 payload 将以「数组」的方式，回调到第一个参数
- 第二个参数为 updateForm 方法

## 实际案例

目前团队对常见的表单扩展组件都按 [el-form-renderer](https://github.com/femessage/el-form-renderer) 的标准实现了 v-model, 因此都可以不写 template, 由 [el-form-renderer](https://github.com/femessage/el-form-renderer) 实现数据驱动渲染

- 上传组件 [https://github.com/FEMessage/upload-to-ali](https://github.com/FEMessage/upload-to-ali)
- 富文本编辑器 [https://github.com/FEMessage/v-editor](https://github.com/FEMessage/v-editor)
- 省市区选择器 [https://github.com/FEMessage/el-select-area](https://github.com/FEMessage/el-select-area)
- 范围输入框 [https://github.com/FEMessage/el-number-range](https://github.com/FEMessage/el-number-range)
- 版本号输入框 [https://github.com/FEMessage/el-semver-input](https://github.com/FEMessage/el-semver-input)

## 拓展阅读

- [v-model基础](https://cn.vuejs.org/v2/guide/forms.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95)
- [在组件上使用v-model](https://cn.vuejs.org/v2/guide/components.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model)
- [vue 组件继承属性 $attrs](https://cn.vuejs.org/v2/api/#vm-attrs)
- [vue 组件继承事件 $listeners](https://cn.vuejs.org/v2/api/#vm-listeners)
