## Props

```ts
export default {
  // ...
  props: {
    /**
     * support all el-form's props
     * @see: https://element.eleme.io/#/zh-CN/component/form#form-attributes
     */

    /**
     * 表单项的配置数组，每个表单项代表一个原子表单项
     * the form config's array, each item represents a form-item
     */
    content: {
      type: Array, // type：Content[], check Content's definition below
      required: true
    },

    /**
     * disable all form-items
     */
    disabled: {
      type: Boolean,
      default: false
    }
  }
}

/**
 * 表单项的typescript定义
 * definition of form-item written in typescript.
 * 支持所有el-form-item's props。表单项组件本身的props定义在el上
 * support all el-form-item's props. The component's props need to be set at prop el
 */
interface Content {
  // 每一个原子都存在 id，用于存储该原子的值，不能重复
  // key of form-item value in form value. Must be unique
  id: string

  /**
   * 可以是element提供的所有表单组件类型，如传入'input'，则渲染出'el-input'
   * support all element's form component, e.g., type 'input' will render as 'el-input'.
   * 当type="group"时，可以创造复杂对象类型的表单数据，配合items使用。此时getFormValue()返回的是对象类型的数据，对象的每个属性对应items里的每一项
   * you can create nested form value with type 'group' and use items to define that form value's shape. The type of this form value will be 'object'
   */
  type: string

  /**
   * 当type="group"时使用
   * using with type 'group'
   * items内依然遵循同一层级的id不重复的原则
   * the `id` in each item of items must be unique
   */
  items: Content[]

  default?: any

  /**
   * @deprecated
   */
  enableWhen?: object | string

  /**
   * 传入一个方法，并返回 boolean，返回 true 时则隐藏该表单项
   * hide the form-item when return true
   * formValue 为当前 form 的值，item 为当前表单项的定义
   * formValue is same as what getFormValue returns, and item is the config of this form-item
   */
  hidden?: (formValue: Object, item: Content) => boolean

  /**
   * 具有选择功能的原子表单可用此定义可选项
   * use with type: select, radio-group, radio-button, checkbox-group, checkbox-button
   */
  options?: {label: string; value?: any}[]

  attrs?: object // html attributes
  /**
   * 用于定义具体原子表单（如el-input）的属性，比如定义el-input的placeholder
   * use to define props of the actual component of this form-item, such as placeholder of el-input
   */
  el?: object

  /**
   * 使用自定义组件
   * custom component
   * component适用于渲染局部注册组件和自定义组件，而type适用于带el-前缀的全局组件
   * use it when element's form components are not enough
   */
  component?: Vue

  label?: string //set el-form-item's label
  trim = true // trim value at change event

  // 用于处理输入值，辅助updateForm进行对应值更新，参数为updateForm传入的对象
  // obj is param you passed to updateForm. You can use this function to hijack this process and customize the form value
  inputFormat?: (obj: any) => any

  // 用于处理输出值，参数为对应组件返回值
  // used to hijack the getFormValue's process and customize the return value
  outputFormat?: (val: any) => any

  // set el-form-item's rules
  rules?: object

  // @deprecated
  atChange?: (id: string, value: any) => void

  /**
   * 监听表单项发出的事件
   * listen to any events emitted by component of form item
   * @param {any[]} args - what that event emits
   * @param {function} updateForm - same as methods.updateForm
   */
  on?: {
    [eventName: string]: (args: any[], updateForm: function) => void
  }
}

/**
 * a tour of typescript
 */
interface obj {
  a: string // type string
  b?: string // type string, optional
  c = true // type boolean, optional, default true
  d: string[] // type array, each item must be string
  e: any // could be any valid js type
  f: (a: number) => void // type function, which receives a param 'a' as number and return nothing
  h: Vue // instance of Vue
  i: {[a: string]: number} // type object, whose key is type string, and value is type number
}
```

## Methods

support all [el-form's methods](https://element.eleme.io/#/zh-CN/component/form#form-methods)

## Slots

| Slot     | Description                                 |
| -------- | ------------------------------------------- |
| default  | insert at bottom                            |
| id:hello | insert before form-item whose id is 'hello' |
