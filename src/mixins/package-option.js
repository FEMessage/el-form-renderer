function resolveValue({value, label}) {
  return value !== undefined && value !== null ? value : label
}

/**
 * @see https://github.com/FEMessage/el-form-renderer/commit/9944d1a9101bc629183fb0d0fe8963362884e4ac
 */
function setDefaultKeyAndLabel(props) {
  return {
    ...props,
    key: resolveValue(props),
    label: resolveValue(props)
  }
}

export default {
  methods: {
    select_opt(props) {
      return <ElOption {...{props}} />
    },

    radioGroup_opt(props) {
      props = setDefaultKeyAndLabel(props)
      return <ElRadio {...{props}} />
    },

    radioButton_opt(props) {
      props = setDefaultKeyAndLabel(props)
      return <ElRadioButton {...{props}} />
    },

    checkboxGroup_opt(props) {
      props = setDefaultKeyAndLabel(props)
      return <ElCheckbox {...{props}} />
    },

    checkboxButton_opt(props) {
      props = setDefaultKeyAndLabel(props)
      return <ElCheckboxButton {...{props}} />
    }
  }
}
