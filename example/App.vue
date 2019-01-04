<template>
  <div class="demo">
    <div class="demo-code">
      <h1>el-form-renderer example</h1>
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
      <h3>content属性的具体内容：<span class="tips">(power by <a href="https://github.com/leezng/vue-json-pretty" target="_blank">vue-json-pretty</a>)</span></h3>
      <div class="demo-config">
        <el-button size="mini" @click="addFormGroup">添加自定义group类型项</el-button>
        <el-button size="mini" @click="removeFormGroup">移除自定义group类型项</el-button>
      </div>
      <vue-json-pretty :data="content"></vue-json-pretty>
    </div>

    <div class="demo-form">
      <h3>高度还原<a href="http://element.eleme.io/#/zh-CN/component/form" target="_blank">element-ui</a>官方例子：</h3>
      <p>在本例子中，额外增加了一个表单原子项，作为 <code>$enableWhen</code> 属性的展示效果，可尝试点击 “即时配送” 进行查看。</p>
      <el-form-renderer label-width="100px" :content="content" ref="ruleForm">
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form-renderer>
    </div>
    <a class="gitHub-ribbons" href="https://github.com/leezng/el-form-renderer" target="_blank"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"></a>
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
  methods: {
    addFormGroup () {
      const index = this.content.findIndex(item => item.isGroup)
      if (index !== -1) {
        this.$message.warning('自定义group表单项已存在！')
        return
      }
      this.content.unshift({
        isGroup: true, // 只是用于demo移除查找, 无实际作用
        $type: 'group',
        $id: 'aaaaa',
        $items: [{
          $type: 'input',
          $id: 'group1',
          $default: 'aaaa',
          label: 'group1',
          rules: [
            { required: true, message: 'sss', trigger: 'change' }
          ]
        }, {
          $type: 'select',
          $id: 'group2',
          label: 'group2',
          $options: [{
            label: '区域一',
            value: 'shanghai'
          }, {
            label: '区域二',
            value: 'beijing'
          }]
        }]
      })
      this.$message.success('操作成功！')
    },
    removeFormGroup () {
      const index = this.content.findIndex(item => item.isGroup)
      if (index !== -1) {
        this.content.splice(index, 1)
        this.$message.success('操作成功！')
      }
      else this.$message.error('请先添加自定义group表单项！')
    },
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
  },
  created () {
    window.q = this
  },
  data () {
    return {
      // 描述
      content: [
        {
          $type: 'input',
          $id: 'name',
          label: '活动名称',
          $default: 'aaaa2',
          $el: {
            size: 'mini',
            placeholder: 'test placeholder'
          },
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
            type: 'daterange',
            clearable: false,
            placeholder: '请选择',
            valueFormat: 'yyyy-MM-dd'
          },
          outputFormat: (val) => ({
            startDate: val[0],
            endDate: val[1]
          }),
          rules: [
            { type: 'array', required: true, message: '请选择日期时间', trigger: 'change' }
          ]
        }, {
          $type: 'switch',
          $id: 'delivery',
          label: '即时配送'
        }, {
          // 增加的 enableWhen 示例, 与 element 无关
          $type: 'input',
          $id: 'enableWhenDelivery',
          $el: {
            placeholder: '如果你选择即时配送就看到我啦'
          },
          label: '隐藏项demo',
          $enableWhen: { delivery: true }
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
  h1 {
    position: sticky;
  }
  .demo {
    margin: 0 auto;
    width: 1200px;
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
  .demo-code .tips {
    font-size: 12px;
  }
  .demo-config {
    margin-bottom: 15px;
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
  .demo .gitHub-ribbons {
    position: fixed;
    right: 0;
  }
</style>
