## 验证规则问题

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

对于这类表单组件的规则应该这样设置(trigger 变更为 change 或者不设置 trigger):

```diff
 rules: [
   {
     message: '校验提示信息',
-    trigger: 'blur'
+    trigger: 'change'
   }
 ]
```