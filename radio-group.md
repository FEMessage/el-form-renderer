```vue
<template>
  <el-form-renderer :content="content" inline />
</template>

<script>
export default {
  name: 'radio-group',
  data() {
    return {
      content: [
        {
          id: 'city',
          type: 'radio-group',
          label: 'city',
          default: 'new york',
          options: [
            // warnning：element radio-group use label only
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
