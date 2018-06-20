import RenderFormItem from './render-form-item'

export default {
  components: {
    RenderFormItem
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
          'render-form-item', {
            props: {
              key: index,
              prop: `${this.data.$id}.${item.$id}`, // deep
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
