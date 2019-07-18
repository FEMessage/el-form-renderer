import customComponentRules from './custom-component-rules'

export default function transformContent(content) {
  return content.map(item => {
    if (item.type === 'group') {
      const {items} = item
      delete item.items

      item.items = transformContent(items)
      return item
    }

    const transformedItem = transformItem(item)
    return customComponentRules(transformedItem)
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
