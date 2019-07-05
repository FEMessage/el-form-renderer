# el-form-renderer

[![](https://img.shields.io/npm/dm/@femessage/el-form-renderer.svg#align=left&display=inline&height=20&originHeight=20&originWidth=140&status=done&width=140)](https://www.npmjs.com/package/@femessage/el-form-renderer) ![](https://img.shields.io/npm/v/@femessage/el-form-renderer.svg#align=left&display=inline&height=20&originHeight=20&originWidth=80&status=done&width=80) [![](https://img.shields.io/npm/l/@femessage/el-form-renderer.svg#align=left&display=inline&height=20&originHeight=20&originWidth=78&status=done&width=78)](https://github.com/FEMessage/el-form-renderer/blob/master/LICENSE) ![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg#align=left&display=inline&height=20&originHeight=20&originWidth=90&status=done&width=90) [![](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg#align=left&display=inline&height=20&originHeight=20&originWidth=104&status=done&width=104)](https://github-tools.github.io/github-release-notes/)

![form.gif](https://cdn.nlark.com/yuque/0/2019/gif/224563/1561710423541-8a461306-63c8-4af4-a519-6e61e90fb8c8.gif#align=left&display=inline&height=693&name=form.gif&originHeight=693&originWidth=640&size=2958639&status=done&width=640)

## Table of Contents

* [Introduction](#introduction)
* [Feature](#feature)
* [Demo](#demo)
* [Quick start](#quick-start)
* [Inspiration](#inspiration)
* [License](#license)
* [Contributors](#contributors)

## Introduction

**WHAT**

`el-form-renderer` is based on [element-ui](https://github.com/ElemeFE/element), but not limited [element-ui](https://github.com/ElemeFE/element) components. On the basis of completely inheriting the form attribute of element-ui, extension is made. Some non-form components or custom components, such as picture uploading and rich text editor, can also be integrated, thus, users can render a complete form by using a piece of json.

**WHY**

In our daily development, there are lots page with form, and usually the form structure is similar, the logic is repeated. el-form-renderer does not have complicated logic. It only convert JSON to render form item, save time and energy to write business logic, and reduce duplicate code.

## Feature

* Render form with json
* Support integrate with custom components
* Support batch update form data with updateForm method
* Support setOptions method, dynamically change select options
* Content support `inputFormat` , `outputFormat` , `trim` to process component's input and output values

**[⬆Back to Top](#table-of-contents)**

## Demo

* [Doc and online demo](https://femessage.github.io/el-form-renderer/)

**[⬆Back to Top](#table-of-contents)**

## Quick start

```sh
yarn add @femessage/el-form-renderer
```

```html
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

## Inspiration

thanks to [element-patch](https://github.com/leezng/element-patch)

## License

[MIT](https://www.yuque.com/deepexi-serverless/onx52o/LICENSE)

**[⬆Back to Top](#table-of-contents)**

## Contributors

Thanks goes to these wonderful people ( [Emoji key](https://allcontributors.org/docs/en/emoji-key) ):

| [![](https://avatars0.githubusercontent.com/u/11909145?v=4#alt=Alvin&width=100)<br />**Alvin**](https://github.com/Alvin-Liu)<br />[💻](https://github.com/FEMessage/el-form-renderer/commits?author=Alvin-Liu) [👀](#review-Alvin-Liu) [🐛](https://github.com/FEMessage/el-form-renderer/issues?q=author%3AAlvin-Liu) [📝](#blog-Alvin-Liu) [🤔](#ideas-Alvin-Liu) | [![](https://avatars3.githubusercontent.com/u/9384365?v=4#alt=levy&width=100)<br />**levy**](http://levy.work)<br />[👀](#review-levy9527) [🚇](#infra-levy9527) [🤔](#ideas-levy9527) | [![](https://avatars3.githubusercontent.com/u/19513289?v=4#alt=EVILLT&width=100)<br />**EVILLT**](https://evila.me)<br />[💻](https://github.com/FEMessage/el-form-renderer/commits?author=evillt) [🐛](https://github.com/FEMessage/el-form-renderer/issues?q=author%3Aevillt) [📝](#blog-evillt) [🤔](#ideas-evillt) | [![](https://avatars3.githubusercontent.com/u/19591950?v=4#alt=Donald%20Shen&width=100)<br />**Donald Shen**](https://donaldshen.github.io/portfolio)<br />[📖](https://github.com/FEMessage/el-form-renderer/commits?author=donaldshen) [💡](#example-donaldshen) |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

