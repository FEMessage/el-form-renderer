监听表单项的各种事件

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
            blur: ([e], updateForm) => {
              updateForm({display: 'blur' + e})
            },
            focus: ([e], updateForm) => {
              updateForm({display: 'focus' + e})
            },
            input: ([value], updateForm) => {
              updateForm({display: 'input' + value})
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
