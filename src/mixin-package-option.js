/**
 * 扩展表单组件的 option 属性
 */
function controller(h, tag, props) {
  return h(tag, {
    props
  })
}

function resolveValue({value, label}) {
  return value !== undefined && value !== null ? value : label
}

function controllerVariation(h, tag, props) {
  return h(
    tag,
    {
      props: Object.assign({}, props, {
        key: resolveValue(props),
        label: resolveValue(props)
      })
    },
    props.label
  )
}

export default {
  methods: {
    select_opt(item) {
      return controller(this.$createElement, 'el-option', item)
    },

    radioGroup_opt(item) {
      return controllerVariation(this.$createElement, 'el-radio', item)
    },

    radioButton_opt(item) {
      return controllerVariation(this.$createElement, 'el-radio-button', item)
    },

    checkboxGroup_opt(item) {
      return controllerVariation(this.$createElement, 'el-checkbox', item)
    },

    checkboxButton_opt(item) {
      return controllerVariation(
        this.$createElement,
        'el-checkbox-button',
        item
      )
    }
  }
}
