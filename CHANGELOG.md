# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.19.3](https://github.com/FEMessage/el-form-renderer/compare/v1.19.2...v1.19.3) (2020-12-18)


### Bug Fixes

* show -> if ([ecc08f3](https://github.com/FEMessage/el-form-renderer/commit/ecc08f3))



### [1.19.2](https://github.com/FEMessage/el-form-renderer/compare/v1.19.0...v1.19.2) (2020-12-10)


### Bug Fixes

* form和content的key没有对应上，导致find取不到item对象 ([#203](https://github.com/FEMessage/el-form-renderer/issues/203)) ([79dc7a8](https://github.com/FEMessage/el-form-renderer/commit/79dc7a8))
* select option 支持 object ([#206](https://github.com/FEMessage/el-form-renderer/issues/206)) ([1970da2](https://github.com/FEMessage/el-form-renderer/commit/1970da2))



### [1.19.1](https://github.com/FEMessage/el-form-renderer/compare/v1.19.0...v1.19.1) (2020-12-01)


### Bug Fixes

* form和content的key没有对应上，导致find取不到item对象 ([#203](https://github.com/FEMessage/el-form-renderer/issues/203)) ([79dc7a8](https://github.com/FEMessage/el-form-renderer/commit/79dc7a8))



## [1.19.0](https://github.com/FEMessage/el-form-renderer/compare/v1.18.0...v1.19.0) (2020-11-26)


### Features

* 增加API getComponentById ([#202](https://github.com/FEMessage/el-form-renderer/issues/202)) ([1b2b112](https://github.com/FEMessage/el-form-renderer/commit/1b2b112))



## [1.18.0](https://github.com/FEMessage/el-form-renderer/compare/v1.17.0...v1.18.0) (2020-11-11)


### Features

* add types ([#200](https://github.com/FEMessage/el-form-renderer/issues/200)) ([4c9b3de](https://github.com/FEMessage/el-form-renderer/commit/4c9b3de))



## [1.17.0](https://github.com/FEMessage/el-form-renderer/compare/v1.16.0...v1.17.0) (2020-09-24)


### Features

* type为el-checkbox-group的options提供value属性 ([#198](https://github.com/FEMessage/el-form-renderer/issues/198)) ([f980a19](https://github.com/FEMessage/el-form-renderer/commit/f980a19))



## [1.16.0](https://github.com/FEMessage/el-form-renderer/compare/v1.15.1...v1.16.0) (2020-07-14)


### Features

* 支持 label slot 功能 ([#193](https://github.com/FEMessage/el-form-renderer/issues/193)) ([f28725c](https://github.com/FEMessage/el-form-renderer/commit/f28725c))



### [1.15.1](https://github.com/FEMessage/el-form-renderer/compare/v1.15.0...v1.15.1) (2020-07-07)


### Bug Fixes

* fix the options lost ([#188](https://github.com/FEMessage/el-form-renderer/issues/188)) ([8a4a332](https://github.com/FEMessage/el-form-renderer/commit/8a4a332))
* 获取父实例对象由遍历改为注入的形式 ([#190](https://github.com/FEMessage/el-form-renderer/issues/190)) ([f6af33c](https://github.com/FEMessage/el-form-renderer/commit/f6af33c))



## [1.15.0](https://github.com/FEMessage/el-form-renderer/compare/v1.14.7...v1.15.0) (2020-05-27)


### Features

* 改进 input 的 readonly 样式 ([#185](https://github.com/FEMessage/el-form-renderer/issues/185)) ([635c0c6](https://github.com/FEMessage/el-form-renderer/commit/635c0c6))



### [1.14.7](https://github.com/FEMessage/el-form-renderer/compare/v1.14.6...v1.14.7) (2020-04-03)


### Bug Fixes

* v-model 不能赋值 ([#182](https://github.com/FEMessage/el-form-renderer/issues/182)) ([ff917d1](https://github.com/FEMessage/el-form-renderer/commit/ff917d1))



### [1.14.6](https://github.com/FEMessage/el-form-renderer/compare/v1.14.5...v1.14.6) (2020-03-13)


### Bug Fixes

* remote + readonly + el-select + multiple 场景 ([#177](https://github.com/FEMessage/el-form-renderer/issues/177)) ([c1f1cd0](https://github.com/FEMessage/el-form-renderer/commit/c1f1cd0))
* 兼容 type 的 camelCase 写法 ([#176](https://github.com/FEMessage/el-form-renderer/issues/176)) ([76f4c89](https://github.com/FEMessage/el-form-renderer/commit/76f4c89))
* 解决 select 为 multiple 时 readonly 无法显示的问题 ([#175](https://github.com/FEMessage/el-form-renderer/issues/175)) ([ad1ea44](https://github.com/FEMessage/el-form-renderer/commit/ad1ea44))



### [1.14.5](https://github.com/FEMessage/el-form-renderer/compare/v1.14.4...v1.14.5) (2020-03-12)


### Bug Fixes

* get form value ([#174](https://github.com/FEMessage/el-form-renderer/issues/174)) ([268a03b](https://github.com/FEMessage/el-form-renderer/commit/268a03b))
* remote 仅在有效变更时发送请求 ([#169](https://github.com/FEMessage/el-form-renderer/issues/169)) ([c19a166](https://github.com/FEMessage/el-form-renderer/commit/c19a166))
* 修复 v-model & content 示例中修改 date range 报错的问题 ([#173](https://github.com/FEMessage/el-form-renderer/issues/173)) ([448055c](https://github.com/FEMessage/el-form-renderer/commit/448055c))



### [1.14.4](https://github.com/FEMessage/el-form-renderer/compare/v1.14.3...v1.14.4) (2020-02-26)


### Bug Fixes

* 修复 resetFields 有时无法恢复初始值的问题 ([#172](https://github.com/FEMessage/el-form-renderer/issues/172)) ([27e5efa](https://github.com/FEMessage/el-form-renderer/commit/27e5efa))



### [1.14.3](https://github.com/FEMessage/el-form-renderer/compare/v1.14.2...v1.14.3) (2020-02-26)


### Bug Fixes

* 表单项的值为对象类型时错误覆盖回整个表单的值中 ([#171](https://github.com/FEMessage/el-form-renderer/issues/171)) ([8fa4dc0](https://github.com/FEMessage/el-form-renderer/commit/8fa4dc0))



### [1.14.2](https://github.com/FEMessage/el-form-renderer/compare/v1.14.1...v1.14.2) (2020-02-21)


### Bug Fixes

* 修复 disabled 写在 el 中的用法 ([#167](https://github.com/FEMessage/el-form-renderer/issues/167)) ([4abdaaf](https://github.com/FEMessage/el-form-renderer/commit/4abdaaf))



### [1.14.1](https://github.com/FEMessage/el-form-renderer/compare/v1.14.0...v1.14.1) (2020-02-20)


### Bug Fixes

* radio 传 value 时用作 label 属性 ([#165](https://github.com/FEMessage/el-form-renderer/issues/165)) ([2f808e7](https://github.com/FEMessage/el-form-renderer/commit/2f808e7))



## [1.14.0](https://github.com/FEMessage/el-form-renderer/compare/v1.13.1...v1.14.0) (2020-02-19)


### Features

* v-model ([#162](https://github.com/FEMessage/el-form-renderer/issues/162)) ([e0f9089](https://github.com/FEMessage/el-form-renderer/commit/e0f9089))


### Tests

* 新增 e2e 测试 ([#159](https://github.com/FEMessage/el-form-renderer/issues/159)) ([ab4c4e4](https://github.com/FEMessage/el-form-renderer/commit/ab4c4e4))



### [1.13.1](https://github.com/FEMessage/el-form-renderer/compare/v1.13.0...v1.13.1) (2020-01-14)



## [1.13.0](https://github.com/FEMessage/el-form-renderer/compare/v1.12.1...v1.13.0) (2020-01-10)


### Bug Fixes

* 修复 test & 增加 pre-push 钩子 ([#153](https://github.com/FEMessage/el-form-renderer/issues/153)) ([94cef0e](https://github.com/FEMessage/el-form-renderer/commit/94cef0e))
* 原 babel 有时会出问题 ([#154](https://github.com/FEMessage/el-form-renderer/issues/154)) ([f17dcab](https://github.com/FEMessage/el-form-renderer/commit/f17dcab))


### Build System

* git depth = 30 ([1f5a5af](https://github.com/FEMessage/el-form-renderer/commit/1f5a5af))


### Features

* 新增 readonly 功能 & 重构 render 函数为 template ([#152](https://github.com/FEMessage/el-form-renderer/issues/152)) ([3180bfd](https://github.com/FEMessage/el-form-renderer/commit/3180bfd))



### [1.12.1](https://github.com/FEMessage/el-form-renderer/compare/v1.12.0...v1.12.1) (2019-11-27)


### Bug Fixes

* disabled not working ([#130](https://github.com/FEMessage/el-form-renderer/issues/130)) ([dddabc8](https://github.com/FEMessage/el-form-renderer/commit/dddabc8))



## [1.12.0](https://github.com/FEMessage/el-form-renderer/compare/v1.11.6...v1.12.0) (2019-11-23)


### Features

* options支持通过remote的方式获取 ([#120](https://github.com/FEMessage/el-form-renderer/issues/120)) ([8ac4044](https://github.com/FEMessage/el-form-renderer/commit/8ac4044))



### [1.11.6](https://github.com/FEMessage/el-form-renderer/compare/v1.11.5...v1.11.6) (2019-11-14)



### [1.11.5](https://github.com/FEMessage/el-form-renderer/compare/v1.11.4...v1.11.5) (2019-10-11)


### Bug Fixes

* 解决`File` 对象丢失的问题 ([ba35594](https://github.com/FEMessage/el-form-renderer/commit/ba35594)), closes [#106](https://github.com/FEMessage/el-form-renderer/issues/106)



### [1.11.4](https://github.com/FEMessage/el-form-renderer/compare/v1.11.3...v1.11.4) (2019-09-29)


### Bug Fixes

* **hack:** 表单项值变更时清除校验信息 ([#107](https://github.com/FEMessage/el-form-renderer/issues/107)) ([6063505](https://github.com/FEMessage/el-form-renderer/commit/6063505))
* 解决`File` 对象丢失的问题 ([ba35594](https://github.com/FEMessage/el-form-renderer/commit/ba35594)), closes [#106](https://github.com/FEMessage/el-form-renderer/issues/106)



### [1.11.3](https://github.com/FEMessage/el-form-renderer/compare/v1.11.2...v1.11.3) (2019-09-26)


### Bug Fixes

* **hack:** 表单项值变更时清除校验信息 ([#107](https://github.com/FEMessage/el-form-renderer/issues/107)) ([6063505](https://github.com/FEMessage/el-form-renderer/commit/6063505))



### [1.11.2](https://github.com/FEMessage/el-form-renderer/compare/v1.11.1...v1.11.2) (2019-08-19)


### Bug Fixes

* 当 type=group 时，options 报 undefined ([1ba062d](https://github.com/FEMessage/el-form-renderer/commit/1ba062d)), closes [#95](https://github.com/FEMessage/el-form-renderer/issues/95)
* **updateForm:** id is not defined ([b442d92](https://github.com/FEMessage/el-form-renderer/commit/b442d92))



### [1.11.1](https://github.com/FEMessage/el-form-renderer/compare/v1.11.0...v1.11.1) (2019-08-15)


### Bug Fixes

* `inputFormat` 允许返回任何类型 ([#98](https://github.com/FEMessage/el-form-renderer/issues/98)) ([e89c2e0](https://github.com/FEMessage/el-form-renderer/commit/e89c2e0))
* 当 type=group 时，options 报 undefined ([1ba062d](https://github.com/FEMessage/el-form-renderer/commit/1ba062d)), closes [#95](https://github.com/FEMessage/el-form-renderer/issues/95)



## [1.11.0](https://github.com/FEMessage/el-form-renderer/compare/v1.10.2...v1.11.0) (2019-07-30)


### Features

* 可以覆盖自定义组件内部的校验规则 ([#83](https://github.com/FEMessage/el-form-renderer/issues/83)) ([8b8a3af](https://github.com/FEMessage/el-form-renderer/commit/8b8a3af))



### [1.10.2](https://github.com/FEMessage/el-form-renderer/compare/v1.10.1...v1.10.2) (2019-07-29)



### [1.10.1](https://github.com/FEMessage/el-form-renderer/compare/v1.10.0...v1.10.1) (2019-07-26)



## [1.10.0](https://github.com/FEMessage/el-form-renderer/compare/v1.9.0...v1.10.0) (2019-07-18)


### Features

* 支持自定义组件自定义 rules ([a38368a](https://github.com/FEMessage/el-form-renderer/commit/a38368a))



## [1.9.0](https://github.com/FEMessage/el-form-renderer/compare/v1.8.0...v1.9.0) (2019-07-12)


### Bug Fixes

* **setOptions:** 修复setOptions  ([4160084](https://github.com/FEMessage/el-form-renderer/commit/4160084))


### Features

* 新增属性 on，可以绑定组件的事件 ([ba5b160](https://github.com/FEMessage/el-form-renderer/commit/ba5b160))



## [1.8.0](https://github.com/FEMessage/el-form-renderer/compare/v1.7.0...v1.8.0) (2019-07-12)


### Features

* 新增属性 on，可以绑定组件的事件 ([ba5b160](https://github.com/FEMessage/el-form-renderer/commit/ba5b160))



## [1.7.0](https://github.com/FEMessage/el-form-renderer/compare/v1.6.1...v1.7.0) (2019-07-09)


### Features

* 添加 hidden 功能，不鼓励使用 enableWhen ([a3571fd](https://github.com/FEMessage/el-form-renderer/commit/a3571fd))



### [1.6.1](https://github.com/FEMessage/el-form-renderer/compare/v1.6.0...v1.6.1) (2019-07-05)



## [1.6.0](https://github.com/FEMessage/el-form-renderer/compare/v1.5.8...v1.6.0) (2019-07-01)


### Bug Fixes

* correctly import extension   ([252f9e9](https://github.com/FEMessage/el-form-renderer/commit/252f9e9))


### Features

* 兼容移除$前缀  ([5e8654e](https://github.com/FEMessage/el-form-renderer/commit/5e8654e))



### [1.5.8](https://github.com/FEMessage/el-form-renderer/compare/v1.5.7...v1.5.8) (2019-06-26)


### Bug Fixes

* correctly import extension   ([252f9e9](https://github.com/FEMessage/el-form-renderer/commit/252f9e9))



### [1.5.7](https://github.com/FEMessage/el-form-renderer/compare/v1.5.6...v1.5.7) (2019-06-24)



### 1.5.6 (2019-05-31)
