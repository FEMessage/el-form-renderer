这里是些过时的写法，但仍要保留兼容性

```vue
<template>
  <el-form-renderer ref="form" label-width="100px" :content="content">
    <el-button @click="getFormValue">getFormValue</el-button>
  </el-form-renderer>
</template>

<script>
export default {
  data () {
    return {
      content: [
        {
          type: 'radioGroup', // 推荐写作 radio-group
          $id: 'resource', // 推荐不加 $
          label: 'resource',
          options: [{
            label: 'resourceA'
          }, {
            label: 'resourceB'
          }],
          rules: [
            { required: true, message: 'miss resource', trigger: 'change' }
          ]
        }
      ]
    }
  },
  methods: {
    getFormValue() {
      const v = this.$refs.form.getFormValue()
      // console.log(v)
      this.$message(JSON.stringify(v))
    }
  }
}
</script>
```
