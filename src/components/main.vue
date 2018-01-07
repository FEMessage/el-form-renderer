<template>
  <el-form
    label-position="top"
    :model="value"
    ref="elForm"
    @submit.native.prevent>
    <form-item
      v-for="(item, index) in description"
      :key="index"
      :data="item"
      :value="value"
      :item-value="value[item.id]"
      @updateValue="updateValue">
    </form-item>
  </el-form>
</template>

<script>
  import FormItem from './render'

  export default {
    components: {
      FormItem
    },
    created () {
      window.cc = this
    },
    props: {
      // 描述
      description: {
        type: Array,
        default () {
          return [{
            type: 'input',
            label: '输入框测试',
            id: 'input'
          }, {
            type: 'switch',
            label: 'switch测试',
            id: 'switch'
          }, {
            type: 'radio-group',
            label: 'radio-group测试',
            id: 'radio-group',
            options: [{
              label: 'A',
              value: 'a'
            }, {
              label: 'B',
              value: 'b'
            }]
          }, {
            type: 'select',
            label: 'select测试',
            id: 'select',
            options: [{
              label: 'A',
              value: 'a'
            }, {
              label: 'B',
              value: 'b'
            }]
          }]
        }
      }
    },
    data () {
      return {
        value: {} // 表单数据对象
      }
    },
    methods: {
      // 对当前整个表单进行校验 return Promise
      validator () {
        return new Promise((resolve, reject) => {
          this.$refs.elForm.validate(result => {
            console.log(result)
            resolve(result)
          })
        })
      },

      /**
       * 更新表单数据
       * @param  {String} options.id 表单ID
       * @param  {All} options.value 表单数据
       */
      updateValue ({ id, value }) {
        this.$set(this.value, id, value)
      }
    }
  }
</script>
