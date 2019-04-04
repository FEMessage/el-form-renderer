# Rules

:::demo
```html
<template>
  <el-form-renderer :content="content" inline></el-form-renderer>
</template>

<script>
export default {
  name: 'rule',
  data() {
    return {
      content: [
        {
          $id: 'name',
          $type: 'input',
          label: '姓名',
          $el: {
            placeholder: '请输入'
          },
          rules: [
            {
              required: true,
              message: '请输入姓名',
              trigger: 'change',
              whitespace: true  // 不能仅包含空格
            }
          ]
        }
      ]
    }
  }
}
</script>
```
:::