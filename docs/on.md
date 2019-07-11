通过listeners监听表单项的各种事件

```vue
<template>
  <el-form-renderer ref="form" :content="content" />
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          label: '输入',
          type: 'input',
          id: 'fullName',
          on: {
            blur: (e) => {
              this.$refs.form.updateForm({display: 'blur'})
            },
            focus: (e) => {
              this.$refs.form.updateForm({display: 'focus'})
            },
            input: (e) => {
              this.$refs.form.updateForm({display: 'input'})
            },
          },
        },
        {
          label: '事件',
          type: 'input',
          id: 'display',
          el: {disabled: true},
        }
      ]
    }
  }
}
</script>
```
