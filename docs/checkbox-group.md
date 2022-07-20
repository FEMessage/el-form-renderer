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
          /**
           * sytle 属性是为了满足 el-checkbox-button属性而设置,如果不需要使用el-radio-button这可不设置
           */
          style: 'button',
          label: 'city',
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
