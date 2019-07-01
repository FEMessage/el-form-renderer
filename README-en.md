# El-form-renderer

[![](https://img.shields.io/npm/dm/@femessage/el-form-renderer.svg#align=left&display=inline&height=20&originHeight=20&originWidth=140&status=done&width=140)](https://www.npmjs.com/package/@femessage/el-form-renderer) ![](https://img.shields.io/npm/v/@femessage/el-form-renderer.svg#align=left&display=inline&height=20&originHeight=20&originWidth=80&status=done&width=80) [![](https://img.shields.io/npm/l/@femessage/el-form-renderer.svg#align=left&display=inline&height=20&originHeight=20&originWidth=78&status=done&width=78)](https://github.com/FEMessage/el-form-renderer/blob/master/LICENSE) ![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg#align=left&display=inline&height=20&originHeight=20&originWidth=90&status=done&width=90) [![](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg#align=left&display=inline&height=20&originHeight=20&originWidth=104&status=done&width=104)](https://github-tools.github.io/github-release-notes/)

![form.gif](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561710423541-8a461306-63c8-4af4-a519-6e61e90fb8c8.gif#align=left&display=inline&height=693&name=form.gif&originHeight=693&originWidth=640&size=2958639&status=done&width=640)

<a name="KjIVm"></a>
## Table of Contents

- [Introduction](#introduction)
- [Feature](#feature)
- [Demo](#demo)
- [Quick start](#quick-start)
- [License](#license)
- [Contributors](#contributors)

<a name="mrThG"></a>
## Introduction

Based on [Element-ui](https://github.com/ElemeFE/element) Packaged **Form renderer** In the open source project [**El-form-renderer**](https://github.com/leezng/el-form-renderer) On the basis of secondary development

**WHAT**<br />**<br />`el-form-renderer` Is based on [Element-ui](https://github.com/ElemeFE/element) Packaged **Form renderer**, but not limited [Element-ui](https://github.com/ElemeFE/element) components. On the basis of completely inheriting the form attribute of element, a simple extension is made. some non-form components or packaged custom components, such as picture uploading and rich text, can also be integrated, thus, users can render a complete form by using a preset piece of data.

**WHY**<br />**<br />Daily needs to face a large number of form classes, usually the form structure is similar, the logic is repeated, and it is built by various simple atomic form components. el-form-renderer does not have complicated logic. it only needs to simply configure JSON to realize common form functions, save time and energy to write code, and reduce many redundant codes.

<a name="ocvFE"></a>
## Feature

- Simple configuration is required to implement common form functions
- Support for custom components
- Batch update data up11-form
- Support setOptions method, support dynamic change select options
- Content support `inputFormat` , `outputFormat` , `trim` Processing of component input and output values<br />**[⬆Back to Top](#table-of-contents)**

<a name="WwXCE"></a>
## Demo

- [Doc and online demo](https://femessage.github.io/el-form-renderer/)<br />**[⬆Back to Top](#table-of-contents)**

<a name="97knW"></a>
## Quick start

```html
<!-- Step1 确认你已经正确安装并使用了 element-ui -->
<!-- Step2 安装 -->
<!-- yarn add @femessage/el-form-renderer -->
<!-- Step3 在需要使用该渲染器的 .vue 文件中 -->
<template>
  <el-form-renderer :content="content"></el-form-renderer>
</template>
<script>
import ElFormRenderer from '@femessage/el-form-renderer'
export default {
  components: {
    ElFormRenderer
  },
  data () {
    return {
      content: []
    }
  }
}
</script>
```

**[⬆Back to Top](#table-of-contents)**

<a name="1voE9"></a>
## License

[MIT](https://www.yuque.com/deepexi-serverless/onx52o/LICENSE)<br />**[⬆Back to Top](#table-of-contents)**

<a name="GHmTm"></a>
## Contributors

Thanks goes to these wonderful people ( [Emoji key](https://allcontributors.org/docs/en/emoji-key) ):

| [![](https://avatars0.githubusercontent.com/u/11909145?v=4#alt=Alvin&width=100)<br />**Alvin**](https://github.com/Alvin-Liu)<br />[💻](https://github.com/FEMessage/el-form-renderer/commits?author=Alvin-Liu) [👀](#review-Alvin-Liu) [🐛](https://github.com/FEMessage/el-form-renderer/issues?q=author%3AAlvin-Liu) [📝](#blog-Alvin-Liu) [🤔](#ideas-Alvin-Liu) | [![](https://avatars3.githubusercontent.com/u/9384365?v=4#alt=levy&width=100)<br />**levy**](http://levy.work)<br />[👀](#review-levy9527) [🚇](#infra-levy9527) [🤔](#ideas-levy9527) | [![](https://avatars3.githubusercontent.com/u/19513289?v=4#alt=EVILLT&width=100)<br />**EVILLT**](https://evila.me)<br />[💻](https://github.com/FEMessage/el-form-renderer/commits?author=evillt) [🐛](https://github.com/FEMessage/el-form-renderer/issues?q=author%3Aevillt) [📝](#blog-evillt) [🤔](#ideas-evillt) | [![](https://avatars3.githubusercontent.com/u/19591950?v=4#alt=Donald%20Shen&width=100)<br />**Donald Shen**](https://donaldshen.github.io/portfolio)<br />[📖](https://github.com/FEMessage/el-form-renderer/commits?author=donaldshen) [💡](#example-donaldshen) |
| --- | --- | --- | --- |


