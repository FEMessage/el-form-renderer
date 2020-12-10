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
          type: 'select',
          id: 'region',
          label: 'area',
          el: {
            valueKey: 'id',
          },
          options: [{
            label: 'area1',
            value: {
              id: 'shanghai',
              name: 'shanghai'
            }
          }, {
            label: 'area2',
            value: {
              id: 'beijing',
              name: 'beijing'
            }
          }],
          rules: [
            { required: true, message: 'miss area', trigger: 'change' }
          ]
        }, {
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
          type: 'switch',
          id: 'delivery',
          label: 'delivery'
        }, {
          type: 'checkbox-group',
          id: 'type',
          label: 'type',
          default: [],
          options: [{
            label: 'typeA',
            value: 'A'
          }, {
            label: 'typeB',
            value:'B'
          }, {
            label: 'typeC',
            value: 'C'
          }],
          rules: [
            { type: 'array', required: true, message: 'miss type', trigger: 'change' }
          ]
        }, {
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
          this.$message('submit!');
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
