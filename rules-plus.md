```vue
<template>
   <el-form-renderer
      label-width="100px"
      :content="content"
      ref="form"
      :rules="rules"
    >
    </el-form-renderer>
</template>

<script>
export default {
  
  data() {
    const rules = [
      { required: true, message: '请输入活动名称', trigger: 'change' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
    ];
    return {
      rules: {
        name: [...rules],
      },
      content: [
        {
          type: "input",
          id: "name",
          label: "name",
        },
        {
          type: "input",
          id: "desc",
          label: "desc",
          rules: [...rules],
        },
      ],
    };
  },
}
</script>
```
