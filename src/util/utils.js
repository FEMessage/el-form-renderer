import _frompairs from 'lodash.frompairs'

export function noop() {}

export function collect(content, key) {
  return _frompairs(
    content
      .map(item => ({
        id: item.id,
        type: item.type,
        value: item.type === 'group' ? collect(item.items, key) : item[key],
      }))
      .filter(
        ({type, value}) =>
          value !== undefined ||
          (type === 'group' && Object.keys(value).length),
      )
      .map(({id, value}) => [id, value]),
  )
}

/**
 * 递归合并 oldV & newV，策略如下：
 * 1. 过滤掉 newV 中不存在于 content 中的项
 * 2. 如果该项的 type 不是 GROUP，直接覆盖合并到 oldV
 * 3. 如果是，则递归执行步骤 1 到 3
 */
export function mergeValue(oldV, newV, content) {
  Object.keys(newV).forEach(k => {
    const item = content.find(item => item.id === k)
    if (!item) return
    if (item.type !== 'group') oldV[k] = newV[k]
    else mergeValue(oldV[k], newV[k], item.items)
  })
}

/**
 * 根据 content 中的 outputFormat 来处理 value
 */
export function transformOutputValue(value, content) {
  Object.keys(value).forEach(k => {
    const item = content.find(item => item.id === k)
    if (!item) return
    if (item.type !== 'group') {
      const format = item.outputFormat || (v => v)
      value[k] = format(value[k])
    } else {
      transformOutputValue(value[k], item.items)
    }
  })
  return value
}

/**
 * 根据 content 中的 inputFormat 来处理 value
 * inputFormat 接受的是当前层级的 value
 * 复杂点在于，不管传入的 value 是否包含某表单项的 key，所有使用了 inputFormat 的项都有可能在这次 update 中被更新
 */
export function transformInputValue(value, content) {
  const newVal = {}
  content.forEach(item => {
    if (item.inputFormat) {
      const v = item.inputFormat(value)
      if (v) newVal[item.id] = v
    } else if (item.id in value) {
      if (item.type !== 'group') {
        newVal[item.id] = value[item.id]
      } else {
        newVal[item.id] = transformInputValue(value[item.id], item.items)
      }
    }
  })
  return newVal
}
