import Vue from 'vue'
import renderFormItem from '../src/render-form-item'

const testOrigin = {
  type: 'input',
  id: 'name'
}

const testValue = {
  name: 'hello'
}

describe('mixin-hidden.js', () => {
  let Constructor
  beforeEach(() => {
    Constructor = Vue.extend(renderFormItem)
  })

  describe('enableWhen 与 hidden', () => {
    test('没有使用 enableWhen 与 hidden', () => {
      const vm = new Constructor({
        propsData: {data: testOrigin, value: testValue}
      })

      expect(vm._show).toBe(true)
    })

    test('使用 enableWhen，不被 hidden 干扰', () => {
      const data = {...testOrigin, enableWhen: {name: false}}
      const vm = new Constructor({propsData: {data, value: testValue}})

      expect(vm.getHiddenStatus()).toBe(undefined)
      expect(vm._show).toBe(false)
    })

    test('同时使用 hidden 与 enableWhen，仅响应 hidden', () => {
      const data = {
        ...testOrigin,
        hidden: () => false,
        enableWhen: {name: false}
      }
      const vm = new Constructor({propsData: {data, value: testValue}})

      expect(vm.getHiddenStatus()).toBe(false)
      expect(vm._show).toBe(true)
    })
  })

  describe('hidden 错误触发', () => {
    test('使用 hidden，不返回 bool，console.error', () => {
      const originError = console.error
      console.error = err => {
        throw Error(err)
      }

      const data = {...testOrigin, hidden: () => console.log('ok')}
      try {
        new Constructor({propsData: {data, value: testValue}})
      } catch (err) {
        expect(err).toThrow('hidden must return boolean.')
      }

      console.error = originError
    })

    test('使用 hidden，不返回 bool，废弃 hidden，不影响结果', () => {
      const data = {...testOrigin, hidden: () => 'ok'}
      const vm = new Constructor({propsData: {data, value: testValue}})

      expect(vm.getHiddenStatus()).toBe(undefined)
    })
  })

  describe('使用 hidden', () => {
    test('使用 hidden，返回 true，不显示', () => {
      const data = {...testOrigin, hidden: () => true}
      const vm = new Constructor({propsData: {data, value: testValue}})

      expect(vm._show).toBe(false)
    })

    test('使用 hidden，返回 false，显示', () => {
      const data = {...testOrigin, hidden: () => false}
      const vm = new Constructor({propsData: {data, value: testValue}})

      expect(vm._show).toBe(true)
    })
  })

  describe('hidden 可以使用 form 与当前 item 值', () => {
    test('hidden 可以获取 form 值', () => {
      const data = {...testOrigin, hidden: form => form.name === 'hello'}
      const vm = new Constructor({propsData: {data, value: testValue}})

      expect(vm.getHiddenStatus()).toBe(true)
      expect(vm._show).toBe(false)
    })

    test('hidden 可以获取 item 信息', () => {
      const data = {...testOrigin, hidden: (_, scope) => scope.id === 'name'}
      const vm = new Constructor({propsData: {data, value: testValue}})

      expect(vm.getHiddenStatus()).toBe(true)
      expect(vm._show).toBe(false)
    })
  })
})
