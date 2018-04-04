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
      'el-form-group', {}, this.data.$items.map((item, index) => {
        return h(
          'el-form-item-renderer', {
            props: {
              key: index,
              data: item,
              value: this.value,
              itemValue: this.itemValue[item.$id],
              disabled: this.disabled
            },
            on: {
              updateValue: (val) => {
                let obj = Object.assign({}, this.itemValue, {
                  [item.$id]: val
                })
                this.$emit('updateValue', obj)
              }
            }
          }
        )
      })
    )
  }
}
