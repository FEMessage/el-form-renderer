# el-form-renderer

[![Build Status](https://badgen.net/travis/FEMessage/el-form-renderer/master)](https://travis-ci.com/FEMessage/el-form-renderer)
[![NPM Download](https://badgen.net/npm/dm/@femessage/el-form-renderer)](https://www.npmjs.com/package/@femessage/el-form-renderer)
[![NPM Version](https://badgen.net/npm/v/@femessage/el-form-renderer)](https://www.npmjs.com/package/@femessage/el-form-renderer)
[![NPM License](https://badgen.net/npm/license/@femessage/el-form-renderer)](https://github.com/FEMessage/el-form-renderer/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/el-form-renderer/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

![](https://i.loli.net/2019/11/14/Nz6n9l7KixqIHsa.png)

[中文文档](./README-zh.md)

## Table of Contents

- [Introduction](#introduction)
  - [WHAT](#what)
  - [WHY](#why)
- [Features](#features)
- [Links](#links)
- [Quick Start](#quick-start)
- [Inspiration](#inspiration)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)

## Introduction

### WHAT

`el-form-renderer` is based on [element-ui](https://github.com/ElemeFE/element), but not limited [element-ui](https://github.com/ElemeFE/element) components. On the basis of completely inheriting the form attribute of element-ui, extension is made. Some non-form components or custom components, such as picture uploading and rich text editor, can also be integrated, thus, users can render a complete form by using a piece of json.

### WHY

In our daily development, there are lots page with form, and usually the form structure is similar, the logic is repeated. el-form-renderer does not have complicated logic. It only convert JSON to render form item, save time and energy to write business logic, and reduce duplicate code.

## Features

- Render form with json
- Support integrate with custom components
- Support batch update form data with updateForm method
- Support setOptions method, dynamically change select options
- Content support `inputFormat` , `outputFormat` , `trim` to process component's input and output values
- Support v-model

[⬆Back to Top](#table-of-contents)

## Links

- [Docs](https://femessage.github.io/el-form-renderer/)
- [Guide to developing custom component](https://github.com/femessage/el-form-renderer/blob/dev/docs/guide-en-custom-component.md)
- [Setting validation rules in custom component](https://github.com/FEMessage/el-form-renderer/blob/dev/docs/guide-en-custom-rules-in-custom-component.md)
- [fem-vscode-helper](https://marketplace.visualstudio.com/items?itemName=FEMessage.fem-vscode-helper)

[⬆Back to Top](#table-of-contents)

## Quick Start

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
      ElFormRenderer,
    },
    data() {
      return {
        content: [],
      }
    },
  }
</script>
```

[⬆Back to Top](#table-of-contents)

## Inspiration

thanks to [element-patch](https://github.com/leezng/element-patch)

## Contributing

For those who are interested in contributing to this project, such as:

- report a bug
- request new feature
- fix a bug
- implement a new feature

Please refer to our [contributing guide](https://github.com/FEMessage/.github/blob/master/CONTRIBUTING.md).

[⬆ Back to Top](#table-of-contents)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Alvin-Liu"><img src="https://avatars0.githubusercontent.com/u/11909145?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alvin</b></sub></a><br /><a href="https://github.com/FEMessage/el-form-renderer/commits?author=Alvin-Liu" title="Code">💻</a> <a href="https://github.com/FEMessage/el-form-renderer/pulls?q=is%3Apr+reviewed-by%3AAlvin-Liu" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/FEMessage/el-form-renderer/issues?q=author%3AAlvin-Liu" title="Bug reports">🐛</a> <a href="#blog-Alvin-Liu" title="Blogposts">📝</a> <a href="#ideas-Alvin-Liu" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://levy.work"><img src="https://avatars3.githubusercontent.com/u/9384365?v=4?s=100" width="100px;" alt=""/><br /><sub><b>levy</b></sub></a><br /><a href="https://github.com/FEMessage/el-form-renderer/pulls?q=is%3Apr+reviewed-by%3Alevy9527" title="Reviewed Pull Requests">👀</a> <a href="#infra-levy9527" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#ideas-levy9527" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-levy9527" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://evila.me"><img src="https://avatars3.githubusercontent.com/u/19513289?v=4?s=100" width="100px;" alt=""/><br /><sub><b>EVILLT</b></sub></a><br /><a href="https://github.com/FEMessage/el-form-renderer/commits?author=evillt" title="Code">💻</a> <a href="https://github.com/FEMessage/el-form-renderer/issues?q=author%3Aevillt" title="Bug reports">🐛</a> <a href="#blog-evillt" title="Blogposts">📝</a> <a href="#ideas-evillt" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://donaldshen.github.io/portfolio"><img src="https://avatars3.githubusercontent.com/u/19591950?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Donald Shen</b></sub></a><br /><a href="https://github.com/FEMessage/el-form-renderer/commits?author=donaldshen" title="Code">💻</a> <a href="https://github.com/FEMessage/el-form-renderer/commits?author=donaldshen" title="Documentation">📖</a> <a href="#example-donaldshen" title="Examples">💡</a> <a href="#blog-donaldshen" title="Blogposts">📝</a></td>
    <td align="center"><a href="https://colmugx.github.io"><img src="https://avatars1.githubusercontent.com/u/21327913?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ColMugX</b></sub></a><br /><a href="https://github.com/FEMessage/el-form-renderer/commits?author=colmugx" title="Code">💻</a> <a href="https://github.com/FEMessage/el-form-renderer/commits?author=colmugx" title="Tests">⚠️</a> <a href="https://github.com/FEMessage/el-form-renderer/commits?author=colmugx" title="Documentation">📖</a></td>
    <td align="center"><a href="http://67.216.223.155/resume/"><img src="https://avatars3.githubusercontent.com/u/26338853?v=4?s=100" width="100px;" alt=""/><br /><sub><b>OuZuYu</b></sub></a><br /><a href="https://github.com/FEMessage/el-form-renderer/issues?q=author%3AOuZuYu" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/lianghx-319"><img src="https://avatars2.githubusercontent.com/u/27187946?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Han</b></sub></a><br /><a href="https://github.com/FEMessage/el-form-renderer/commits?author=lianghx-319" title="Code">💻</a> <a href="https://github.com/FEMessage/el-form-renderer/commits?author=lianghx-319" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/yolofit"><img src="https://avatars1.githubusercontent.com/u/20294811?v=4?s=100" width="100px;" alt=""/><br /><sub><b>yolofit</b></sub></a><br /><a href="https://github.com/FEMessage/el-form-renderer/issues?q=author%3Ayolofit" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/chengaopan"><img src="https://avatars.githubusercontent.com/u/18641281?v=4?s=100" width="100px;" alt=""/><br /><sub><b>chengaopan</b></sub></a><br /><a href="https://github.com/FEMessage/el-form-renderer/commits?author=chengaopan" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
