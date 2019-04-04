# Radio Group

:::demo
```html
<template>
  <el-form-renderer :content="content" inline></el-form-renderer>
</template>

<script>
export default {
  name: 'radio-group',
  data() {
    return {
      content: [
        {
          $id: 'city',
          $type: 'radio-group',
          label: '城市',
          $el: {
            placeholder: '请输入'
          },
          $default: '广州',
          $options: [
            // 注意：element radio-group 通过 label 而不是 value 来匹配值
            { label: '上海' },
            { label: '北京' },
            { label: '广州' },
            { label: '深圳' }
          ]
        }
      ]
    }
  }
}
</script>
```
:::