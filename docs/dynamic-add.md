```vue
<template>
  <div class="dynamic-page">
   <el-button @click="handleAdd" icon="el-icon-plus" type="text">动态添加一行</el-button>
   <el-form-renderer label-width="100px" :content="content" ref="ruleForm">
    <el-form-item>
    </el-form-item>
  </el-form-renderer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: [
        {
          type: 'input',
          id: 'name',
          label: 'name'
        }
      ]
    }
  },
  methods: {
    handleAdd() {
      const key = `name${this.content.length}`;
      this.content.push({
        type: 'input',
        id: key,
        label: key
      })
    }
  }
}
</script>
```
