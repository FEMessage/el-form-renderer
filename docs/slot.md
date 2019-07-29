```vue
<template>
  <el-form-renderer :content="content">
    <button type="button" slot="id:age">a button insert before age</button>

    <div style="color: #2a7">
      default slot is at the bottom
    </div>
  </el-form-renderer>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          id: 'name',
          label: 'name',
          type: 'input'
        },
        {
          id: 'age',
          label: 'age',
          type: 'input'
        }
      ]
    }
  }
}
</script>
```
