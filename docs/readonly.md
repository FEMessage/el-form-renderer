在配置中使用 readonly 属性可将 input 组件的值用纯文本的方式展示

```vue
<template>
  <el-form-renderer label-width="100px" :content="content" ref="ruleForm">
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">submit</el-button>
      <el-button @click="resetForm('ruleForm')">reset</el-button>
    </el-form-item>
  </el-form-renderer>
</template>

<script>
export default {
  data () {
    return {
      content: [
        {
          readonly: true,
          default: '小明',
          type: 'input',
          id: 'name',
          label: 'name',
          attrs: { 'data-name': 'form1' },
          el: {
            size: 'mini',
            placeholder: 'test placeholder'
          },
          rules: [
            { required: true, message: 'miss name', trigger: 'blur' },
            { min: 3, max: 5, message: 'length between 3 to 5', trigger: 'blur' }
          ]
        }, {
          readonly: true,
          default: 'shanghai',
          type: 'select',
          id: 'region',
          label: 'area',
          options: [{
            label: 'area1',
            value: 'shanghai'
          }, {
            label: 'area2',
            value: 'beijing'
          }],
          rules: [
            { required: true, message: 'miss area', trigger: 'change' }
          ]
        }, {
          readonly: true,
          default: '[native Date Wed Jan 01 2020 00:00:00 GMT+0800 (中国标准时间)]',
          type: 'date-picker',
          id: 'date',
          label: 'date',
          el: {
            type: 'datetime',
            placeholder: 'select date'
          },
          rules: [
            { type: 'date', required: true, message: 'miss date', trigger: 'change' }
          ]
        }, {
          readonly: true,
          default: true,
          type: 'switch',
          id: 'delivery',
          label: 'delivery'
        }, {
          readonly: true,
          type: 'checkbox-group',
          id: 'type',
          label: 'type',
          default: ['typeA', 'typeB'],
          options: [{
            label: 'typeA'
          }, {
            label: 'typeB'
          }, {
            label: 'typeC'
          }],
          rules: [
            { type: 'array', required: true, message: 'miss type', trigger: 'change' }
          ]
        }, {
          readonly: true,
          default: 'resourceA',
          type: 'radio-group',
          id: 'resource',
          label: 'resource',
          options: [{
            label: 'resourceA'
          }, {
            label: 'resourceB'
          }],
          rules: [
            { required: true, message: 'miss resource', trigger: 'change' }
          ]
        }, {
          readonly: true,
          default: '小明的一些描述小明的一些描述小明的一些描述小明的一些描述小明的一些描述小明的一些描述小明的一些描述',
          type: 'input',
          id: 'desc',
          label: 'desc',
          el: {
            type: 'textarea'
          },
          rules: [
            { required: true, message: 'miss desc', trigger: 'blur' }
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
