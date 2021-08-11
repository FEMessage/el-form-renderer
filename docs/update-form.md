```vue
<template>
  <div class="update-form">
    <el-form-renderer :content="content" inline ref="formRender">
      <el-button @click="setValue">updateForm()</el-button>
      <el-button type="primary" @click="getValue">log getFormValue()</el-button>
    </el-form-renderer>
  </div>
</template>

<script>
  export default {
    name: 'update-form',
    data() {
      return {
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
      getValue () {
        const value = this.$refs.formRender.getFormValue()
        console.log(value)
      },
      setValue () {
        this.$refs.formRender.updateForm({
          name: 'alvin',
          newKey: 'newValue',
        })
      }
    }
  }
</script>
```
