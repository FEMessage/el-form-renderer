import _frompairs from 'lodash.frompairs'
/**
 * 转换为大小驼峰命名
 * abc-efg => abcEfg
 */
export const toCamelCase = str => {
  return str.indexOf('-') !== -1
    ? str.replace(/-([a-zA-Z])/g, ($0, $1) => $1.toUpperCase())
    : str
}

/**
 * 首字母大写, 其他不变
 */
export const toUpperCaseFirst = str => {
  return str[0].toUpperCase() + str.substr(1)
}

/**
 * 是否对象
 */
export const isObject = obj => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

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
