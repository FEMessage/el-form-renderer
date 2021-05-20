Set el-form-item's rules

```vue
<template>
  <el-form-renderer :content="content" :rules="rules"/>
</template>

<script>
export default {
  name: 'rule',
  data() {
    const rules = [
      { required: true, message: 'using form rules', trigger: 'change' },
      { min: 3, max: 5, message: '3 <= length <= 5', trigger: 'change' }
    ]
    return {
      rules: {
        desc: [...rules],
      },
      content: [
        {
          id: 'name',
          type: 'input',
          label: 'name',
          el: {
            placeholder: 'name'
          },
          rules: [
            {
              required: true,
              message: 'using form-item rules',
              trigger: 'change'
            }
          ]
        },
        {
          type: "input",
          id: "desc",
          label: "desc",
        },
        {
          type: "input",
          id: "money",
          label: "money",
					rules: [{required: true, validator: (rule, value, callback) => value >= 0.01 ? callback() : callback(new Error('最小充值金额为0.01元'))}],
        },
      ]
    }
  }
}
</script>
```
