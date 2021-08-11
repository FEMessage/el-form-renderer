```vue
<template>
  <el-form-renderer label-width="100px" :content="content" v-model="form" ref="form">
    <el-form-item>
      <el-button @click="resetForm">reset</el-button>
      <el-button @click="setValue">设置名字为小明</el-button>
    </el-form-item>
    <pre>{{form}}</pre>
  </el-form-renderer>
</template>

<script>
export default {
  data () {
    return {
      form: {
        "name": "",
        "type": [],
        "startDate": "2019-01-01",
        "endDate": "2019-01-02",
        "region": [],
	    "date": [
	  	  "2019-01-01",
	  	  "2019-01-02"
	    ]
      },
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
          options: [
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
          ],
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
            label: 'resourceA',
            value: 'A',
          }, {
            label: 'resourceB',
            value: 'B'
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
    setValue() {
      this.form.name = '小明'
    },
  }
}
</script>
```
