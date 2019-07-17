label可以接受VNode类型，用来设置el-form-item的label-slot

```vue
<template>
  <el-form-renderer label-width="100px" :content="content" ref="ruleForm">
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form-renderer>
</template>

<script>
export default {
  data () {
    const h = this.$createElement
    return {
      content: [
        {
          type: 'input', // 类型，element-ui 提供的所有表单类型，即 el-xxx
          id: 'name', // 每一个原子都存在id，用于存储该原子的值，注意不能重复
          label: h(
            'span',
            [
              '活动名称', 
              h(
                'el-icon',
                {
                  class: 'el-icon-edit'
                }
              )
            ]
          ),
          attrs: { 'data-name': 'form1' }, // 可选, 写法与 Vue 的 Render 函数规范保持一致
          el: {
            size: 'mini',
            placeholder: 'test placeholder'
          },
          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }, {
          type: 'select',
          id: 'region',
          label: <span>活动区域<el-icon class="el-icon-eleme" /></span>,
          // options 具有选择功能的原子表单可用此定义可选项，例如: select, radio-group, radio-button, checkbox-group, checkbox-button
          options: [{
            label: '区域一',
            value: 'shanghai'
          }, {
            label: '区域二',
            value: 'beijing'
          }],
          rules: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        }
      ]
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
```
