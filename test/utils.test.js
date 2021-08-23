import {
  collect,
  mergeValue,
  transformOutputValue,
  transformInputValue,
} from '../src/util/utils'

describe('collect', () => {
  const mocking = [
    {
      id: 'shell',
      options: [
        {
          value: '❤ fish',
        },
      ],
    },
    {
      id: 'name',
      options: [
        {
          value: 'van darkholme',
        },
      ],
    },
  ]

  test('initial item options', () => {
    expect(collect(mocking, 'options')).toEqual({
      shell: [
        {
          value: '❤ fish',
        },
      ],
      name: [
        {
          value: 'van darkholme',
        },
      ],
    })
  })
})

describe('mergeValue', () => {
  test('合并带 group 的情况', () => {
    const oldV = {
      a: 1,
      b: {
        c: 2,
      },
    }
    const newV = {
      i: 1, // 冗余字段
      a: 2,
      b: {
        c: 3,
        d: 4,
      },
    }
    const content = [
      {
        id: 'a',
      },
      {
        id: 'b',
        type: 'group',
        items: [
          {
            id: 'c',
          },
          {
            id: 'd',
          },
        ],
      },
    ]
    mergeValue(oldV, newV, content)
    expect(oldV).toEqual(newV)
  })
})

describe('transformOutputValue', () => {
  test('合并带 group 的情况', () => {
    const oldV = {
      a: 1,
      b: {
        c: 2,
        d: 3,
      },
    }
    const newV = {
      a: 2,
      b: {
        c: 1,
        d: 3, // 冗余字段
        e: 4,
      },
    }
    const content = [
      {
        id: 'a',
        outputFormat: v => v + 1,
      },
      {
        id: 'b',
        type: 'group',
        items: [
          {
            id: 'c',
            outputFormat: v => v - 1,
          },
          {
            id: 'd',
            outputFormat: v => ({e: v + 1}),
          },
        ],
      },
    ]
    expect(transformOutputValue(oldV, content)).toEqual(newV)
  })
  test('没 outputFormat 时，对象值不会被覆盖到外层', () => {
    const v = {
      a: {
        b: 1,
      },
    }
    const content = [
      {
        id: 'a',
      },
    ]
    expect(transformOutputValue(v, content)).toEqual(v)
  })

  test('oldV 和 content 的 key 没有对应上的情况', () => {
    const content = [
      {
        id: 'b',
        type: 'group',
        items: [
          {
            id: 'c',
            outputFormat: c => c - 1,
          },
          {
            id: 'd',
            outputFormat: d => ({e: d + 1}),
          },
        ],
      },
    ]
    const input = {
      a: 1,
      b: {
        c: 2,
        d: 3,
      },
    }
    const outputStrict = {
      b: {
        c: 1,
        e: 4,
      },
    }
    const outputNonstrict = {
      b: {
        c: 1,
        e: 4,
        d: 3, // 冗余字段
      },
      a: 1, // 冗余字段
    }

    expect(transformOutputValue(input, content, {strict: true})).toEqual(
      outputStrict,
    )
    expect(transformOutputValue(input, content)).toEqual(outputNonstrict)
  })
})

describe('transformInputValue', () => {
  test('合并带 group 的情况', () => {
    const inputVal = {
      aa: 1,
      b: {
        cc: 2,
      },
    }
    const expectedVal = {
      a: 0,
      aa: 1, // 输入的冗余字段
      b: {
        c: 3,
        cc: 2, // 输入的冗余字段
      },
    }

    const content = [
      {
        id: 'a',
        inputFormat: v => v.aa - 1,
      },
      {
        id: 'b',
        type: 'group',
        items: [
          {
            id: 'c',
            inputFormat: v => v.cc + 1,
          },
        ],
      },
    ]
    expect(transformInputValue(inputVal, content)).toEqual(expectedVal)
  })
})
