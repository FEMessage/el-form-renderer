import FormItemRenderer from './render-form-item'

export default {
  components: {
    FormItemRenderer
  },
  props: {
    data: Object,
    itemValue: {
      type: Object,
      default: () => {}
    },
    value: Object,
    disabled: Boolean
  },
  render (h) {
    return h(
      'div', {}, this.data.$items.map((item, index) => {
        return h(
          'form-item-renderer', {
            props: {
              key: index,
              data: item,
              value: this.value,
              itemValue: this.itemValue && this.itemValue[item.$id],
              disabled: this.disabled
            },
            on: {
              updateValue: (obj) => {
                let val = Object.assign({}, this.itemValue, obj)
                this.$emit('updateValue', val)
              }
            }
          }
        )
      })
    )
  }
}
