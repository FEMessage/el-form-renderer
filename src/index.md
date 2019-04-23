## Props

支持所有
<a target="_blank" href="https://element.eleme.io/#/zh-CN/component/form#form-attributes">
el-form.props
</a>

### content

* Type: `Array<Content>`
* Required: `true`

定义表单的内容

每一个原子表单`Content Object`可配置如下内容：

* `$id` 每一个原子都存在 id，用于存储该原子的值，不能重复
* `$type` 类型，element 提供的所有表单类型，即 el-xxx
* `component` 用于处理自定义组件，局部引用的组件
* `$default` 默认值
* `$enableWhen` [Object] 可选属性，用于表单对应的为指定值时显示
* `$options` 具有选择功能的原子表单可用此定义可选项，例如: `select`, `radio-group`, `radio-button`, `checkbox-group`, `checkbox-button`
* `$attrs` 可选, 写法与 Vue 的 Render 函数规范保持一致
* `$el` 用于定义具体原子表单的属性，比如常见的`placeholder`
* `label` 对应 `el-form-item`上的`label`属性，表单域标签
* `trim`布尔值，如果为`true`，则对该字符串执行`trim()`方法。默认为`true`
* `inputFormat`用于处理输入值，辅助`updateForm`进行对应值更新，参数为`updateForm`传入的对象
* `outputFormat`用于处理输出值，参数为对应组件返回值
* `rules` 对应 `el-form-item`上的`rules`属性， 用于验证
* `atChange`: `(id, value) => void` 当前表单值更新时触发, 入参分别为当前修改的`id:$id`和`值:value`

<details><summary>__以 TypeScript 接口方式查看 Content__</summary>

```ts
interface Content {
  $id: string
  $type: string
  $default?: any
  $enableWhen?: string | number | object | { [k: string]: any } | any
  $options?: Array<Options>
  $attrs?: Record<string, any>
  $el?: object | { [k: string]: any }
  component?: Vue
  label?: string
  trim?: boolean
  inputFormat?: row => any
  outputFormat?: val => any
  rules?: object
  atChange?: (id, value) => void
}

interface Options {
  label: string
  value?: any
}
```

</details>

### disabled

* Type: `boolean`

设置为 `true` 可禁用所有原子表单

## Methods

支持所有
<a target="_blank" href="https://element.eleme.io/#/zh-CN/component/form#form-methods">
el-form.methods
</a>
