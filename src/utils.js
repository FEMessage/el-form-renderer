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
