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
          default: 'gz',
          options: [
            // warnning：element radio-group use label only
            { label: 'sh' },
            { label: 'bj' },
            { label: 'gz' },
          ]
        }
      ]
    }
  }
}
</script>
```
