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
            /**
             * el-radio 用 label 来做 v-model 的值
             * 这里会渲染成 <el-radio label="new york">new york</el-radio>
             */
            { label: 'new york' },
            // 这里会渲染成 <el-radio label="a">guangzhou</el-radio>
            { label: 'guangzhou', value: 'a' },
            { label: 'tokyo' },
          ]
        }
      ]
    }
  }
}
</script>
```
