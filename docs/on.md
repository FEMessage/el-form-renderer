Listen to any events the component emits

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
          label: 'fullName',
          type: 'input',
          id: 'fullName',
          on: {
            blur: ([event], updateForm) => {
              updateForm({display: 'blur: ' + event})
            },
            focus: ([event], updateForm) => {
              updateForm({display: 'focus: ' + event})
            },
            input: ([value], updateForm) => {
              updateForm({display: 'input: ' + value})
            },
          },
        },
        {
          label: 'display',
          type: 'input',
          id: 'display',
          el: {readonly: true},
        }
      ]
    }
  }
}
</script>
```
