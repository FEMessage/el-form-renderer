默认情况下，updateForm 来者不拒，不在表单设置内的值，也可以存储进去

```vue
<template>
  <div class="update-form">
    <el-form-renderer :content="content" inline ref="formRender">
      <el-button @click="setValue">updateForm()</el-button>
      <div>
	    <el-button type="primary" @click="getValue(false)">log getFormValue()</el-button>
	    <el-button type="primary" @click="getValue(true)">log getFormValue({strict: true})</el-button>
      </div>
    </el-form-renderer>
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
  export default {
    name: 'update-form',
    data() {
      return {
        value: {},
        content: [
          {
            id: 'name',
            type: 'input',
            label: 'name',
            el: {
              placeholder: 'name'
            }
          },
          {
            id: 'area',
            type: 'select',
            label: 'area',
            el: {
              placeholder: 'area'
            },
            options: [{
              label: 'shanghai',
              value: 'shanghai'
            }, {
              label: 'beijing',
              value: 'beijing'
            }]
          }
        ]
      }
    },
    methods: {
      getValue (strict) {
        const value = this.$refs.formRender.getFormValue({strict})
		this.value = value
      },
      setValue () {
        this.$refs.formRender.updateForm({
          name: 'alvin',
          area: 'shanghai',
		  // 设置冗余字段
          extraKey: 'extraValue',
        })
      }
    }
  }
</script>
```
