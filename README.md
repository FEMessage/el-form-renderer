# el-form-renderer

Form renderer is based on [element-ui](https://github.com/ElemeFE/element). It inherits all of the element's attribute definitions completely and extends them briefly. So users can render a complete element form by using a piece of preset data. 

- [Demo](https://leezng.github.io/el-form-renderer/)
- [中文文档](./README.zh-CN.md)

## Quick start

```html
// Step1: Make sure you have properly installed element-ui and used it correctly.

// Step2: Install
yarn add el-form-renderer

// Step3: In the .vue file that needs the renderer
<template>
  <el-form-renderer :content="content"></el-form-renderer>
</template>

<script>
import ElFormRenderer from 'el-form-renderer'

export default {
  components: {
    ElFormRenderer
  }
}
</script>
```

## Props

* Support all attributes on [el-form](http://element.eleme.io/#/en-US/component/form).

* `disabled` [Boolean] Set `true` to disable all atomic forms. If the `element-ui` version is still below `2.1.0`, it is still compatible.

* `content` [ObjectArray] Define the contents of the form, each `Object` represents an atomic form (such as `el-input, el-select, ...`), All attributes on the `el-form-item` are declared here, and attributes on the `el-input` etc. are declared on the `$el` attribute. There are other attributes on the Object such as: `$id, $type, $default，$enableWhen[optional], $options[optional], $attrs[optional]`.

```js
// content example
[
  {
    $id: "form1", // Each atomic form uses an id to store its value, be careful not to repeat
    $type: "input", // Type, all the form types provided by element, like el-xxx
    $enableWhen: { form2: 'beijing' }, // Optional attribute, which means that the this atomic form will display when form2's value is beijing
    $attrs: { 'data-name': 'form1' }, // Optional attribute, wording follows the Render function specification of Vue
    label: "Input", // A property on the el-form-item
    $default: "this is default value",
    rules: [{ required: true, message: 'Please enter the name of the activity name', trigger: 'blur' }] // A property on the el-form-item
  }, {
    $id: "form2",
    $type: "select",
    label: "Select",
    // $el: Used to define the properties of a specific atomic form (el-select in this case)
    $el: {
      placeholder: "Please select your zone"
    },
    // $options: Each atomic form with Selection Capabilities use this to define options. (such as: select, radio-group, radio-button, checkbox-group, checkbox-button, etc.)
    $options: [{
      label: 'Zone one',
      value: 'shanghai'
    }, {
      label: 'Zone two',
      value: 'beijing'
    }]
  }
]
```

## Methods

* Supports all methods on [el-form](http://element.eleme.io/#/en-US/component/form).

* Other Methods:

| Method Name | Description | Parameters |
| ---------- | -------- | ---------- |
| getFormValue | Get the value of the current form | - |
| updateValue  | Update form value manually | ({ id, value }) |

## Slot

* You can insert a custom `VNode` at the end of the form by using the default `slot`.
