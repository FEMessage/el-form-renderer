```vue
<template>
  <el-form-renderer :content="content" inline />
</template>

<script>
export default {
  name: 'date-picker',
  data() {
    return {
      content: [
        {
          id: 'date',
          type: 'date-picker',
          label: 'date',
          el: {
            // type: 'daterange',   // 如果 type 为 daterange，则获取到的是一个数组
            valueFormat: 'timestamp'  // 不使用 value-format 属性，则获取到的是一个空对象，格式请参考 element-ui 组件 date-picker 的日期格式部分
          }
        }
      ]
    }
  }
}

</script>
```
