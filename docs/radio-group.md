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
          /**
           * sytle 属性是为了满足 el-radio-button属性而设置,如果不需要使用el-radio-button这可不设置
           */
          style: 'button',
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
        },
        {
          id: 'city',
          type: 'radio-group',
          label: 'city',
          default: 'new york',
          options: [
            { label: 'new york' },
            { label: 'guangzhou', value: 'a' },
            { label: 'tokyo',  disabled: true},
          ]
        }
      ]
    }
  }
}
</script>
```
