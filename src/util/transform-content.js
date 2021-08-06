import _kebabcase from 'lodash.kebabcase'
/**
 * content 的每一项会浅拷贝一层
 * 只可以在 item 层新增修改属性，如 item.a = b
 * 不可以直接修改值，避免影响原 content，如 item.a.b = c
 */
export default function transformContent(content) {
  return content.map(({...item}) => {
    if (item.type === 'group') {
      item.items = transformContent(item.items)
    } else {
      removeDollarInKey(item)
      setItemId(item)
      extractRulesFromComponent(item)
      // 有些旧写法是 checkboxGroup & radioGroup
      item.type = _kebabcase(item.type)
    }

    return item
  })
}

// 兼容旧写法：$id、$name
function removeDollarInKey(item) {
  Object.keys(item)
    .filter(k => k.startsWith('$') && !(k.slice(1) in item))
    .forEach(k => ((item[k.slice(1)] = item[k]), delete item[k]))
}

function setItemId(item) {
  if (item.id) return
  // name 是符合表单项直觉的命名； prop 是为了与 element 的 table 的 columns 匹配
  item.id = item.name || item.prop
}

export function extractRulesFromComponent(item) {
  if (item.overrideRules) return
  const {component} = item
  // 使用全局注册的组件暂时无法处理
  if (!component || typeof component === 'string') return

  const {rules = []} = component
  item.rules = [
    ...(item.rules || []),
    ...(typeof rules === 'function' ? rules(item) : rules),
  ]
}
