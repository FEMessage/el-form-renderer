## Props

```ts
export default {
  // ...
  props: {
    /**
     * 支持所有el-form的props
     * el-form文档: https://element.eleme.io/#/zh-CN/component/form#form-attributes
     */

    /**
     * 表单项的配置数组，每个表单项代表一个原子表单
     * 表单项的定义详见 interface Content
     */
    content: {
      type: Array, // typescript类型：Content[]
      required: true
    },

    /**
     * 是否禁用所有表单项
     * 兼容element-ui@2.1.0以前的版本
     */
    disabled: {
      type: Boolean,
      default: false
    }
  }
}

/**
 * 表单项的定义
 * 一切 el-form-item上的属性都可在此声明，而对于表单组件本身的属性在el属性上声明
 */
interface Content {
  id: string // 每一个原子都存在 id，用于存储该原子的值，不能重复

  /**
   * 可以是element提供的所有表单组件类型，如传入'input'，则渲染出'el-input'
   * 当type="group"时，可以创造复杂对象类型的表单数据，配合items使用。此时getFormValue()返回的是对象类型的数据，对象的每个属性对应items里的每一项
   */
  type: string

  /**
   * 当type="group"时使用
   * items内依然遵循同一层级的id不重复的原则
   */
  items: Content[]

  default?: any // 默认值，可选

  /**
   * @deprecated
   *
   * 传入一个对象，key为属性路径，value为指定值，校验通过则显示该表单项
   * 比如当前表单项值为{a: {b: 1}}，enableWhen={'a.b': 1}， 则校验通过
   * 也可以只传入属性路径，此时该属性非空就通过校验
   */
  enableWhen?: object | string

  /**
   * 传入一个方法，并返回 boolean，返回 true 时则隐藏该表单项
   * form 为当前 form 的值，item 为当前表单项的定义
   */
  hidden?: (form: Object, item: Content) => boolean

  /**
   * 具有选择功能的原子表单可用此定义可选项
   * 例如: select, radio-group, radio-button, checkbox-group, checkbox-button
   */
  options?: {label: string; value?: any}[]

  attrs?: object // 写法与 Vue 的 Render 函数规范保持一致
  el?: object // 用于定义具体原子表单（如el-input）的属性，比如定义el-input的placeholder

  /**
   * 使用自定义组件
   * component适用于渲染局部注册组件和自定义组件，而type适用于带el-前缀的全局组件
   */
  component?: Vue

  label?: string // 对应el-form-item上的label属性，表单域标签
  trim = true // 可选boolean，为true则对该字符串执行trim()方法，默认值为true

  // 用于处理输入值，辅助updateForm进行对应值更新，参数为updateForm传入的对象
  inputFormat?: (obj: any) => any

  // 用于处理输出值，参数为对应组件返回值
  outputFormat?: (val: any) => any

  // 对应 el-form-item上的rules属性， 用于验证
  rules?: object

  // 当前表单值更新时触发, 入参分别为当前修改的id和值
  atChange?: (id: string, value: any) => void
}

/**
 * typescript小知识
 */
interface obj { // 定义了一个对象类型obj，拥有以下属性
  a: string // 属性a是string类型
  b?: string // 属性b是string类型，可选
  c = true //  属性c是boolean类型，可选，默认值为true
  d: string[] // 属性d是数组类型，每一项都是string类型
  e: any // 属性e可以是任何类型
  f: (a: number) => void // 属性f是函数类型，接受一个number类型参数a，不返回任何值
  g: object | string // 属性g可以是object类型或者是string类型
  h: Vue // 属性h是Vue的实例
  i: {a: number, b: any} // 属性i是对象类型，有a、b两个属性
}
```

## Methods

除了 el-form-renderer 自己定义的方法外，也支持所有
<a target="_blank" href="https://element.eleme.io/#/zh-CN/component/form#form-methods">
el-form.methods
</a>

## Slots

| Slot     | 描述                                                            |
| -------- | --------------------------------------------------------------- |
| default  | 插入位置在表单最末尾                                            |
| id:hello | 插入位置在表单项(id==='hello')之前，hello 可替换成任意表单项 id |
