# Slot

- 支持通过默认 slot 往表单尾部插入自定义 VNode。
- 支持具名插槽 $id:form-item的id 于 $id 前插入任意内容。

:::demo
```html
<template>
  <el-form-renderer :content="content">
    <button type="button" slot="$id:age">a button insert before age</button>

    <div style="color: #2a7">
      我是默认 slot: 位于底部
    </div>
  </el-form-renderer>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          $id: 'name',
          label: '名称',
          $type: 'input'
        },
        {
          $id: 'age',
          label: '年龄',
          $type: 'input'
        }
      ]
    }
  }
}
</script>
```
:::