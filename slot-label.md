支持 el-form-item 的 label slot 功能，只需要返回 vnode 或使用 jsx 语法。

```vue
<template>
  <el-form-renderer label-width="100px" :content="content" />
</template>

<script>
export default {
  data () {
    /**
     * 如果 babel-plugins-transform-vue-jsx 版本低于 3.4.0，jsx 作用域中需要如下定义 h
     * 下面的代码可确保在 CI 环境不报错！
     * @see: https://cn.vuejs.org/v2/guide/render-function.html#JSX
    */
    if (typeof h === 'undefined') {
      h = this.$createElement
    }
    return {
      content: [
        {
          type: 'input',
          id: 'name',
          label: h(
            'span',
            [
              '名称', 
              h(
                'i',
                {
                  class: 'el-icon-edit'
                }
              )
            ]
          ),
        }, {
          type: 'select',
          id: 'region',
          label: <span>地点<i class="el-icon-eleme" /></span>,
          options: [{
            label: 'area1',
            value: 'shanghai'
          }, {
            label: 'area2',
            value: 'beijing'
          }],
        }
      ]
    }
  },
}
</script>
```
