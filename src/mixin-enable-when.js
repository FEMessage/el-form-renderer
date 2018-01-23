/**
 * 该 mixin 负责处理依赖属性 enableWhen 问题
 */

// 获取 value 对应 id 的配置值
function getCurrentValue (value, id) {
  return value && value[id]
}

export default {
  methods: {
    /**
     * 处理 $enableWhen
     *
     * 与条件: 简单依赖关系存在2种情况：简单对象 || 字符串
     * 或条件: 即使用 [] 包裹所有与条件 enableWhen: [{ a: 1 }, { a: 2 }]
     */
    getEnableWhenSatatus (enableWhen = this.data && this.data.$enableWhen) {
      // 处理一个与条件
      const handlePlain = (enableWhen) => {
        // 简单字符串(ID), 只要有值即为true
        if (typeof enableWhen === 'string') {
          return getCurrentValue(this.value, enableWhen) !== undefined
        }
        // 简单对象判断: 是否所有依赖条件都通过
        for (var id in enableWhen) {
          if (enableWhen.hasOwnProperty(id)) {
            let currentValue = getCurrentValue(this.value, id)
            if (currentValue === undefined || currentValue === '') return false
            if (!enableWhen[id] && currentValue === '') return false
            if (enableWhen[id] !== undefined && currentValue !== enableWhen[id]) return false
          }
        }
        return true
      }

      if (enableWhen) {
        return Array.isArray(enableWhen) ? enableWhen.some(item => handlePlain(item)) : handlePlain(enableWhen)
      } else {
        return true
      }
    }
  }
}
