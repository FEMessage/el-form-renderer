# At Change

:::demo
```html
<template>
  <el-form-renderer ref="form" :content="content"></el-form-renderer>
</template>

<script>
export default {
  name: 'at-change',
  data() {
    const fullNameOpts = {
      xiaoming: '小明',
      xiaohong: '小红'
    }

    return {
      content: [
        {
          $type: 'select',
          $id: 'name',
          label: '名字',
          $options: [
            {
              label: '小明',
              value: 'xiaoming'
            },
            {
              label: '小红',
              value: 'xiaohong'
            }
          ],
          atChange: (id, val) => {
            this.$refs.form.updateForm({
              fullName: `当前选择是:${fullNameOpts[val]}`
            })
          }
        },
        {
          label: '全称',
          $type: 'input',
          $id: 'fullName',
          $el: {
            disabled: true
          }
        }
      ]
    }
  }
}
</script>
```
:::