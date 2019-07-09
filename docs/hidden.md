可以对表单项进行隐藏

```vue
<template>
  <el-form-renderer ref="form" :content="content" />
</template>

<script>
export default {
  name: 'at-change',
  data() {
    return {
      content: [
        {
          type: 'select',
          id: 'hobby',
          label: '爱好',
          options: [
            {
              label: '足球',
              value: 'football'
            },
            {
              label: '篮球',
              value: 'basketball'
            }
          ]
        },
        {
          label: '原因',
          type: 'input',
          id: 'reason',
          el: {
            placeholder: '为什么不喜欢篮球？'
          },
          hidden: form => form.hobby ? form.hobby === 'basketball' : true // 通过 hidden 控制显示状态
        },
        {
          label: '偶像',
          type: 'input',
          id: 'idol',
          el: {
            placeholder: '您最喜欢的篮球明星？'
          },
          hidden: form => form.hobby ? form.hobby === 'football' : true // 通过 hidden 控制显示状态
        },
      ]
    }
  }
}
</script>
```