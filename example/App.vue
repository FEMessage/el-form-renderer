<template>
  <div class="demo">
    <div class="demo-code">
      <h3>.vue文件</h3>
      <pre>
&lt;template&gt;
  &lt;el-form-renderer :content="content"&gt;&lt;/el-form-renderer&gt;
&lt;/template&gt;

&lt;script&gt;
import ElFormRenderer from 'path/el-form-renderer'

export default {
  components: {
    ElFormRenderer
  },
  data () {
    return {
      content: [ObjectArray] // 见下方JSON 
    }
  }
}
&lt;/script&gt;
      </pre>
      <h3>content属性的具体内容：</h3>
      <vue-json-pretty :data="content"></vue-json-pretty>
    </div>

    <div class="demo-form">
      <h3>高度还原<a href="http://element.eleme.io/#/zh-CN/component/form" target="_blank">element-ui</a>官方例子：</h3>
      <el-form-renderer label-width="100px" :content="content"></el-form-renderer>
    </div>
  </div>
</template>

<script>
import ElFormRenderer from '@'
import VueJsonPretty from 'vue-json-pretty'

export default {
  name: 'app',
  components: {
    ElFormRenderer,
    VueJsonPretty
  },
  data () {
    return {
      // 描述
      content: [
        {
          $type: 'input',
          $id: 'name',
          label: '活动名称',
          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }, {
          $type: 'select',
          $id: 'region',
          label: '活动区域',
          $options: [{
            label: '区域一',
            value: 'shanghai'
          }, {
            label: '区域二',
            value: 'beijing'
          }],
          rules: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        }, {
          $type: 'date-picker',
          $id: 'date',
          label: '活动时间',
          $el: {
            type: 'datetime',
            placeholder: '请选择'
          },
          rules: [
            { type: 'date', required: true, message: '请选择日期时间', trigger: 'change' }
          ]
        }, {
          $type: 'switch',
          $id: 'delivery',
          label: '即时配送'
        }, {
          $type: 'checkbox-group',
          $id: 'type',
          label: '活动性质',
          $default: [],
          $options: [{
            label: '美食/餐厅线上活动'
          }, {
            label: '地推活动'
          }, {
            label: '线下主题活动'
          }, {
            label: '单纯品牌曝光'
          }],
          rules: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ]
        }, {
          $type: 'radio-group',
          $id: 'resource',
          label: '特殊资源',
          $options: [{
            label: '线上品牌商赞助'
          }, {
            label: '线下场地免费'
          }],
          rules: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ]
        }, {
          $type: 'input',
          $id: 'desc',
          label: '活动形式',
          $el: {
            type: 'textarea'
          },
          rules: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      ]
    }
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  .demo {
    font-size: 14px;
  }
  .demo:after {
    display: table;
    content: "";
    clear: both;
  }
  .demo-code {
    float: left;
    padding: 15px;
    width: 50%;
    box-sizing: border-box;
  }
  .demo-code {
    font-family: Monaco, Menlo, Consolas, Bitstream Vera Sans Mono;
  }
  .demo-code pre {
    margin: 0;
    padding: 10px;
    font-family: inherit;
    background-color: #efefef;
  }
  .demo-form {
    position: fixed;
    padding: 15px;
    left: 50%;
    max-width: 460px;
    box-sizing: border-box;
  }
  .demo-form .el-select,
  .demo-form .el-date-editor {
    width: 100%;
  }
  .demo-form .el-checkbox-group .el-checkbox {
    float: left;
    width: 160px;
    padding-right: 20px;
    margin: 0;
    padding: 0;
  }
</style>
