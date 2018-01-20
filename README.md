# el-form-renderer

基于 [element-ui](https://github.com/ElemeFE/element) 封装的表单渲染器，完整继承了 element 的属性定义，并进行了简单扩展，从而用户能够通过使用一段预设的数据渲染出一个完整的 element 表单。[查看demo](https://leezng.github.io/el-form-renderer/)

## Usage

```js
// Step1 下载代码
git clone https://github.com/leezng/el-form-renderer.git

// Step2 在需要使用本组件的 .vue 文件中
<template>
  <el-form-renderer :content="content"></el-form-renderer>
</template>

<script>
import ElFormRenderer from 'path/el-form-renderer'

export default {
  components: {
    ElFormRenderer
  }
}
</script>
```

## Props

* 支持 [el-form](http://element.eleme.io/#/zh-CN/component/form) 上的所有属性。

* `disabled` [Boolean] 设置为 `true` 可禁用所有原子表单。

* `content` [ObjectArray] 定义表单的内容，每一个 `Object` 代表一个原子表单(`el-input, el-select, ...`)，一切 `el-form-item` 上的属性都在此声明，而对于 `el-input` 等之上的属性在 `$el` 属性上进行声明，该 `Object` 上还存在其他属性，例如: `$id, $type, $options[可选]`。

```js
// content example
[
  {
    $id: "form1", // 每一个原子都存在id，用于存储该原子的值，注意不能重复
    $type: "input", // 类型，element 提供的所有表单类型，即 el-xxx
    label: "输入框", // el-form-item上的属性
    rules: [{ required: true, message: '请输入活动名称', trigger: 'blur' }] // el-form-item上的属性
  }, {
    $id: "form2",
    $type: "select",
    label: "选择框",
    // $el 上用于定义具体原子表单(此处为el-select)的属性
    $el: {
      placeholder: "请选择内容"
    },
    // $options 具有选择功能的原子表单可用此定义可选项，例如: select, radio-group, radio-button, checkbox-group, checkbox-button
    $options: [{
      label: '区域一',
      value: 'shanghai'
    }, {
      label: '区域二',
      value: 'beijing'
    }]
  }
]
```

## Methods

* 支持 [el-form](http://element.eleme.io/#/zh-CN/component/form) 上的所有方法。

* `getFormValue` 获取当前表单的值。
