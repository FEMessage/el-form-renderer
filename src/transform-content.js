export default function transformContent(content) {
  return content.map(item => {
    if (item.type === 'group') {
      const {items} = item
      delete item.items

      item.items = transformContent(items)
      return item
    }

    return transformItem(item)
  })
}

function transformItem(item) {
  return Object.keys(item).reduce((val, key) => {
    const expectedKey = key.replace('$', '')
    if (!val[expectedKey]) {
      val[expectedKey] = item[key]
    }
    return val
  }, {})
}
