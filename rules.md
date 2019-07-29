Set el-form-item's rules

```vue
<template>
  <el-form-renderer :content="content" inline />
</template>

<script>
export default {
  name: 'rule',
  data() {
    return {
      content: [
        {
          id: 'name',
          type: 'input',
          label: 'name',
          el: {
            placeholder: 'name'
          },
          rules: [
            {
              required: true,
              message: 'miss name',
              trigger: 'change'
            }
          ]
        }
      ]
    }
  }
}
</script>
```
