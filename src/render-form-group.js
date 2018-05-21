import ElFormItemRenderer from './render-form-item'

export default {
  components: {
    ElFormItemRenderer
  },
  props: {
    data: Object,
    itemValue: {},
    value: Object,
    disabled: Boolean
  },
  render (h) {
    return h(
      'div', {}, this.data.$items.map((item, index) => {
        const itemValue = this.itemValue || {}
        return h(
          'el-form-item-renderer', {
            props: {
              key: index,
              data: item,
              value: this.value,
              itemValue: itemValue[item.$id],
              disabled: this.disabled
            },
            on: {
              updateValue: ({id, value}) => {
                let val = Object.assign({}, itemValue, {
                  [id]: value
                })
                this.$emit('updateValue', {
                  id: this.data.$id,
                  value: val
                })
              }
            }
          }
        )
      })
    )
  }
}
