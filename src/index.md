## Props

```ts
export default {
  // ...
  props: {
    /**
     * 支持所有el-form的props
     * FYI: https://element.eleme.io/#/zh-CN/component/form#form-attributes
     */

    // 表单项的配置数组，配置的定义详见 interface Content
    content: {
      type: Array, // typescript类型：Content[]
      required: true
    },

    // 是否禁用所有表单项
    disabled: {
      type: Boolean,
      default: false
    }
  }
}

// 数组项的定义
interface Content {
  $id: string // 每一个原子都存在 id，用于存储该原子的值，不能重复
  $type: string // 可以是element提供的所有表单组件类型，如传入'input'，则渲染出'el-input'
  $default?: any // 默认值

  /**
   * 传入一个对象，key为属性路径，value为指定值，校验通过则显示该表单项
   * 比如当前表单项值为{a: {b: 1}}，enableWhen={'a.b': 1}， 则校验通过
   * 也可以只传入属性路径，此时该属性非空就通过校验
   */
  $enableWhen?: object | string

  /**
   * 具有选择功能的原子表单可用此定义可选项
   * 例如: select, radio-group, radio-button, checkbox-group, checkbox-button
   */
  $options?: {label: string; value?: any}[]
  $attrs?: object // 普通的HTML特性
  $el?: object // 用于定义具体原子表单的属性，比如常见的placeholder
  component?: Vue // 用于处理自定义组件，局部引用的组件
  label?: string // 对应 el-form-item上的label属性，表单域标签
  trim?: boolean // 如果为true，则对该字符串执行trim()方法。默认为true

  // 用于处理输入值，辅助updateForm进行对应值更新，参数为updateForm传入的对象
  inputFormat?: (obj: any) => any
  outputFormat?: (val: any) => any // 用于处理输出值，参数为对应组件返回值
  rules?: object // 对应 el-form-item上的rules属性， 用于验证
  atChange?: (id: string, value: any) => void // 当前表单值更新时触发, 入参分别为当前修改的id和值
}
```

## Methods

除了 el-form-renderer 自己定义的方法外，也支持所有
<a target="_blank" href="https://element.eleme.io/#/zh-CN/component/form#form-methods">
el-form.methods
</a>
