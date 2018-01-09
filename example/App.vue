<template>
  <div id="app">
    <el-form-renderer :content="content" label-width="100px"></el-form-renderer>
  </div>
</template>

<script>
import ElFormRenderer from '@'

export default {
  name: 'app',
  components: {
    ElFormRenderer
  },
  data () {
    return {
      // 描述
      content: [
        {
          r_type: 'input',
          r_id: 'name',
          label: '活动名称',
          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }, {
          r_type: 'select',
          r_id: 'region',
          label: '活动区域',
          r_options: [{
            label: '区域一',
            value: 'shanghai'
          }, {
            label: '区域二',
            value: 'beijing'
          }]
        }, {
          r_type: 'radio-group',
          r_id: 'radio-group',
          label: 'radio-group测试',
          r_options: [{
            label: 'A',
            value: 'a'
          }, {
            label: 'B',
            value: 'b'
          }]
        }, {
          r_type: 'select',
          r_id: 'select',
          label: 'select测试',
          r_options: [{
            label: 'A',
            value: 'a'
          }, {
            label: 'B',
            value: 'b'
          }]
        }
      ]
    }
  }
}
</script>
