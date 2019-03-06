import { isVueOpts } from './utils'

function isResolveComponentCtor (opts) {
  if (typeof opts === 'string') return false
  return 'component' in opts
}

function resolveComponent ({ component, $componentOptions = {}, $slots = {} } = {}) {
  return {
    render (h) {
      const slots = new Set()
      Object.keys($slots).forEach(slot => {
        slots.add(
          h(
            'div',
            Object.assign(
              {},
              slot === 'default'
                ? undefined
                : { slot }
            ),
            [
              isVueOpts($slots[slot])
                ? h($slots[slot])
                : isResolveComponentCtor($slots[slot])
                  ? h(resolveComponent($slots[slot]))
                  : $slots[slot]
            ]
          )
        )
      })

      return h(
        component,
        Object.assign({}, $componentOptions),
        [...slots]
      )
    }
  }
}

export default resolveComponent
