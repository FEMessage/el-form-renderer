# Update Form

:::demo
```html
<template>
  <div class="update-form">
    <el-form-renderer :content="content" inline ref="formRender">
      <el-button @click="setValue">设置名字</el-button>
      <el-button type="primary" @click="getValue">获取数据</el-button>
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
            $id: 'name',
            $type: 'input',
            label: '姓名',
            $el: {
              placeholder: '请输入'
            }
          },
          {
            $id: 'area',
            $type: 'select',
            label: '选择框',
            $el: {
              placeholder: '请选择内容'
            },
            $options: [{
              label: '区域一',
              value: 'shanghai'
            }, {
              label: '区域二',
              value: 'beijing'
            }]
          }
        ]
      }
    },
    methods: {
      getValue () {
        const value = this.$refs.formRender.getFormValue()
        console.log(value)  // 输出为对应$id 和值组成的对象
      },
      setValue () {
        this.$refs.formRender.updateForm({
          name: 'alvin'
        })
      }
    }
  }
</script>
```
:::