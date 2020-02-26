$nextTick

```vue
<template>
  <div class="nextTick">
    <el-button type="text" @click="openDialogWithData">点击打开 Dialog（带数据）</el-button>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog :visible.sync="dialogVisible" title="Next Tick" @open="handleOpen" ref="dialog" @close="onClose">
      <el-form-renderer :content="content" inline ref="formRender" />
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'nextTick',
    data() {
      return {
        dialogVisible: false,
        content: [
          {
            id: 'name',
            type: 'input',
            label: '姓名',
            el: {
              placeholder: '请输入'
            }
          }
        ]
      }
    },
    methods: {
      handleOpen () {
        // Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上，所以需要使用 nextTick 等待 DOM 更新之后才能通过 $refs 获取到该实例
        console.log(this.$refs.formRender)  // 第一次打开时为 undefined
        this.$nextTick(() => {
          console.log(this.$refs.formRender)  // 始终能获取到该实例
        })
      },
      openDialogWithData() {
        this.dialogVisible = true
        this.$refs.dialog.$once('opened', () => {
          this.$refs.formRender.updateForm({
            name: '小明'
          })
        })
      },
      onClose() {
        this.$refs.formRender.resetFields()
      }
    }
  }
</script>
```
