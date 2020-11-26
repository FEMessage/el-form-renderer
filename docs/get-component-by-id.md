get the form value

```vue
<template>
  <div>
    <el-form-renderer inline :content="content" ref="form">
    </el-form-renderer>
    <el-button @click="getComponent('id')">获取id input</el-button>
    <el-button @click="getComponent('first')">获取first name input</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      content: [
        {
          id: 'id',
          type: 'input',
          label: 'id',
          el: {
            placeholder: 'id'
          }
        },
        {
          type: 'group',
          label: 'name',
          id: 'name',
          items: [
            {
              id: 'first',
              label: 'first name',
              type: 'input'
            },
            {
              id: 'last',
              label: 'last name',
              type: 'input'
            }
          ]
        }
      ]
    }
  },
  methods: {
    getComponent(id){
      console.log(this.$refs.form.getComponentById(id))
    }
  },
}
</script>
```
