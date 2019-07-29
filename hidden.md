Hide form-item dynamically

```vue
<template>
  <el-form-renderer ref="form" :content="content" />
</template>

<script>
export default {
  name: 'at-change',
  data() {
    return {
      content: [
        {
          type: 'select',
          id: 'hobby',
          label: 'hobby',
          options: [
            {
              label: 'football',
              value: 'football'
            },
            {
              label: 'basketball',
              value: 'basketball'
            }
          ]
        },
        {
          label: 'reason',
          type: 'input',
          id: 'reason',
          el: {
            placeholder: 'why'
          }
        },
        {
          label: 'idol',
          type: 'input',
          id: 'idol',
          el: {
            placeholder: 'your idol?'
          },
          hidden: form => form.hobby !== 'basketball'
        },
      ]
    }
  }
}
</script>
```
