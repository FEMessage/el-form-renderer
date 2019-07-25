import {removeArrayUndefined} from '../src/utils'

describe('测试 removeArrayUndefined 函数', () => {
  test('传入错误的参数应该返回', () => {
    expect(removeArrayUndefined(null)).toBeUndefined()
    expect(removeArrayUndefined(undefined)).toBeUndefined()
    expect(removeArrayUndefined(123)).toBeUndefined()
    expect(removeArrayUndefined('abc')).toBeUndefined()
    expect(removeArrayUndefined({})).toBeUndefined()
    expect(removeArrayUndefined(false)).toBeUndefined()
  })

  test('传入空数组应该返回', () => {
    expect(removeArrayUndefined([])).toBeUndefined()
  })

  test('传入有 undefined 值的数组应该将其去除 ', () => {
    expect(removeArrayUndefined([undefined, 1, 2, 3])).toEqual([1, 2, 3])
    expect(removeArrayUndefined([undefined, null, {}])).toEqual([null, {}])
    expect(removeArrayUndefined([undefined, 'a', 'b', 'c'])).toEqual([
      'a',
      'b',
      'c'
    ])
  })
})
