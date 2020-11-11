## 即时校验

> 改变值后立马触发校验规则的 trigger 是 `change`, 并不是 `blur`.

类输入框表单组件(例如: select, **cascader**)不会触发 trigger 为 'blur' 的那条校验规则.

例如以下这条规则:

```bash
rules: [
  {
    message: '校验提示信息',
    trigger: 'blur'
  }
]
```

如果想即时校验，则应该这样设置(trigger 变更为 change 或者不设置 trigger):

```diff
 rules: [
   {
     message: '校验提示信息',
-    trigger: 'blur'
+    trigger: 'change'
   }
 ]
```

## 在 TypeScript 中指定组件的类型

```html
<script lang="ts">
// 需要引入这个
// import { ElFormRendererType } from '@femessage/el-form-renderer'
export default {
  mounted() {
    (this.$refs.form as ElFormRendererType).readonly = true
  },
}
</script>
```
> 关于更多可用类型请参考：[el-form-renderer.d.ts](https://github.com/FEMessage/el-form-renderer/blob/dev/src/el-form-renderer.d.ts)
