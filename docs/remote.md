远程获取el-select、checkbox-group & radio-group 的options。

你甚至可以远程获取任意一个组件prop！

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
          id: 'select',
          label: 'select',
          remote: {
            url: 'https://mockapi.eolinker.com/IeZWjzy87c204a1f7030b2a17b00f3776ce0a07a5030a1b/el-form-renderer?q=remote',
          }
        },
        {
          type: 'radio-group',
          id: 'radio',
          label: 'radio',
          remote: {
            request() {
              const resp = [
                {title: 'resourceA'},
                {title: 'resourceB'},
              ]
              return new Promise(r => setTimeout(() => r(resp), 2000))
            },
            label: 'title'
          }
        },
        {
          type: 'checkbox-group',
          id: 'checkbox',
          label: 'checkbox',
          default: [],
          remote: {
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
        {
          type: 'cascader',
          id: 'cascader',
          label: 'cascader',
          default: [],
          remote: {
            prop: 'options',
            request() {
              return [
                {
                  label: 'hello', 
                  value: 'hello', 
                  children: [
                    {
                      label: 'world',
                      value: 'world',
                    }
                  ]
                },
              ]
            },
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
