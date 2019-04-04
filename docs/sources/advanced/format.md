# Format

:::demo
```html
<template>
  <div class="format">
    <el-form-renderer :content="content" inline ref="formRender">
      <el-form-item>
        <el-button @click="setValue">设置</el-button>
        <el-button type="primary" @click="getValue">获取数据</el-button>
      </el-form-item>
    </el-form-renderer>
  </div>
</template>

<script>
  export default {
    name: 'format',
    data() {
      return {
        content: [
          {
            $el: {
              type: 'daterange',
              placeholder: '选择日期',
              valueFormat: 'yyyy-MM-dd'
            },
            $type: 'date-picker',
            $id: 'date',
            label: '日期',
            inputFormat: (row) => {
              return [row.startDate, row.endDate]
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
          startDate: '2019-01-01',
          endDate: '2019-01-02'
        })
      }
    }
  }
</script>
```
:::