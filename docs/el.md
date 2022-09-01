可以对表单组件传入 `props`，使用 `el` 传入
el可以传`props`对象也可以传入一个方法返回`props`对象，当传入方法时，当前表单的value值会作为该方法的参数
例如配合 `el-input`，设置文本框，配合`radio-group`的选种值设置`input-number`

Use `el` to set props of custom component

```vue

<template>
  <el-form-renderer :content="content" inline/>
</template>

<script>
export default {
  name: 'el',
  data() {
    return {
      content: [
        {
          label: '单位',
          id: 'unit',
          type: 'radio-group',
          options: [
            {label: '元', value: 'yuan'},
            {label: '分', value: 'fen'}
          ]
        },
        {
          id: 'price',
          type: 'input-number',
          el: (row) => {
            return {
              precision: row.unit === 'yuan' ? 2 : 0
            }
          }
        },
        {
          id: 'document',
          type: 'input',
          el: {
            type: 'textarea'
          }
        }
      ]
    }
  }
}
</script>
```
