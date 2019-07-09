export default {
  methods: {
    /**
     * 处理 hidden
     *
     */
    getHiddenStatus(hidden = this.data && this.data.hidden) {
      if (hidden) {
        const newData = {...this.data}
        delete newData.hidden

        // 给 hidden 方法传递 form 值与当前 item 信息
        const isHidden = hidden(this.value, newData)

        if (typeof isHidden !== 'boolean') {
          console.error('hidden must return boolean.')
        } else {
          return isHidden
        }
      }
    }
  }
}
