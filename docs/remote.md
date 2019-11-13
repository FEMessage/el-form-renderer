远程获取el-select的options

```vue
<template>
  <el-form-renderer :content="content" />
</template>

<script>
export default {
  data () {
    return {
      content: [
        {
          type: 'select',
          id: 'region',
          label: 'area',
          options: {
            remoteUrl: 'https://mockapi.eolinker.com/IeZWjzy87c204a1f7030b2a17b00f3776ce0a07a5030a1b/el-form-renderer?q=remote',
          }
        },
        {
          type: 'radio-group',
          id: 'resource',
          label: 'resource',
          options: {
            request() {
              const resp = [
                {title: 'resourceA'},
                {title: 'resourceB'},
              ]
              return new Promise(r => setTimeout(() => r(resp), 2000))
            },
            onResponse: resp => resp.map(item => ({...item, label: item.title}))
          }
        },
        {
          type: 'checkbox-group',
          id: 'type',
          label: 'type',
          default: [],
          options: {
            request() {
              // throw new Error('test')
              return Promise.reject(new Error('test2'))
            },
            onError: error => {
              console.warn(error.message)
              return [
                {label: 'typeA'},
                {label: 'typeB'},
                {label: 'typeC'},
              ]
            }
          }
        },
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
