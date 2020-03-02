现在 content 是响应式的。这意味着: 
1. disabled、options 和其他任何属性都可以直接在 content 上修改
2. 可以直接修改 content 来新增删除表单项

```vue
<template>
  <el-form-renderer label-width="100px" :content="content" v-model="form" ref="form">
    <template #id:region>
      <div>requestRemoteCount: {{requestRemoteCount}}</div>
    </template>
    <el-form-item>
      <el-button @click="resetForm">resetForm</el-button>
      <el-button @click="disableName">{{content[0].disabled ? '启' : '禁'}}用第一项</el-button>
      <el-button @click="setOptions">更新 region 的 options</el-button>
      <el-button @click="addFormItem">随机插入表单项</el-button>
      <el-button @click="removeFormItem">随机移除表单项</el-button>
    </el-form-item>
    <pre>{{form}}</pre>
  </el-form-renderer>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        // region: [], // 应该能自动生成初始值 []
        type: [],
        startDate: '2019-01-01',
        endDate: '2019-01-02'
      },
      id: 0,
      requestRemoteCount: 0,
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
          label: 'region',
          remote: {
            // url: 'https://mockapi.eolinker.com/IeZWjzy87c204a1f7030b2a17b00f3776ce0a07a5030a1b/el-form-renderer?q=remote',
            request: () => {
              const data = [
                {
                  label: 'shanghai',
                  value: 'shanghai'
                }, 
                {
                  label: 'beijing',
                  value: 'beijing'
                },
                {
                  label: 'guangzhou',
                  value: 'guangzhou'
                },
              ]
              this.requestRemoteCount++
              return new Promise(r => setTimeout(() => r(data), 2000))
            }
          },
          el: {filterable: true, multiple: true, multipleLimit: 2},
          rules: [
            { required: true, message: 'miss area', trigger: 'change' }
          ]
        }, {
          type: 'date-picker',
          id: 'date',
          label: 'date',
          el: {
            type: 'daterange',
            valueFormat: 'yyyy-MM-dd'
          },
          rules: [
            { required: true, message: 'miss date', trigger: 'change' }
          ],
          inputFormat: (row) => {
            if (row.startDate && row.endDate) {
              return [row.startDate, row.endDate]
            }
          },
          outputFormat: (val) => {
            if (!val) {
              return {startDate: '', endDate: ''}
            }
            return {
              startDate: val[0],
              endDate: val[1]
            }
          }
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
    resetForm() {
      this.$refs.form.resetFields();
    },
    disableName() {
      this.content[0].disabled = !this.content[0].disabled
      this.content = [...this.content]
    },
    setOptions() {
      const region = this.content.find(item => item.id === 'region')
      if (!region) return
      region.options = [{label: '广州', value: '广州'}]
      this.content = [...this.content]
    },
    addFormItem() {
      const i = Math.floor(Math.random() * (this.content.length + 1))
      this.id++
      this.content.splice(i, 0, {
        id: `name${this.id}`,
        label: `表单项${this.id}`,
        type: 'input',
      })
    },
    removeFormItem() {
      if (this.content.length <= 1) return
      const i = Math.floor(Math.random() * this.content.length)
      this.content.splice(i, 1)
    },
  }
}
</script>
```
