```vue
<template>
  <el-form-renderer :content="content" inline />
</template>

<script>
export default {
  name: 'checkbox-group',
  data() {
    return {
      content: [
        {
          id: 'city',
          type: 'checkbox-group',
          label: 'city',
          el: {
            placeholder: '请输入'
          },
          default: ['new york'],
          options: [
            { label: 'new york' },
            { label: 'guangzhou' },
            { label: 'tokyo' },
          ]
        }
      ]
    }
  }
}
</script>
```
