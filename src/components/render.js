import mixinEnableWhen from './mixin-enable-when'
import minxinRenderFormItem from './render-form-item'

export default {
  props: {
    data: Object,
    itemValue: {},
    value: Object
  },
  mixins: [
    mixinEnableWhen,
    minxinRenderFormItem
  ],
  computed: {
    // 是否显示
    _show () {
      return this.getEnableWhenSatatus()
    },
    // 是否所有表单都禁用
    configDisabled () {
      return false
    }
  },
  created () {
    // this.handleShow(!!this._show)
  },
  watch: {
    // 显示或隐藏时, 通过 watch 以减少 render 渲染次数
    _show (newVal) {
      // this.handleShow(newVal)
    }
  },
  methods: {
    // handleShow (isVisible, classify = this.classify, id = this.data.id) {
    //   // 数据配置 dataPath, dataMap, userDefined 的 id 写入 simple
    //   // 全局配置所有 id 值写入 simple
    //   if (id && (classify === 'global' || (classify === 'data' && (this.data.isUserDefined || this.data.isDataPath || this.data.isDataMap)))) {
    //     this.$store.commit('changeHiddenList', { classify: 'simple', id, isVisible })
    //   }
    // }
  },
  render (h) {
    // console.log('R')
    return this.renderFormItem(
      h,
      this._show,
      this.data,
      this.itemValue)
  }
}
