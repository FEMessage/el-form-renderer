# Checkbox Group

:::demo
```html
<el-form-renderer :content="content" inline></el-form-renderer>

<script>
export default {
  name: 'checkbox-group',
  data() {
    return {
      content: [
        {
          $id: 'city',
          $type: 'checkbox-group',
          label: '城市',
          $el: {
            placeholder: '请输入'
          },
          $default: ['广州'],
          $options: [
            { label: '上海' },
            { label: '北京' },
            { label: '广州' },
            { label: '深圳' }
          ]
        }
      ]
    }
  }
}
</script>
```
:::