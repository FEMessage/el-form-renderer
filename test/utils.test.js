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
      },
    }
    const newV = {
      a: 2,
      b: {
        c: 1,
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
        ],
      },
    ]
    transformOutputValue(oldV, content)
    expect(oldV).toEqual(newV)
  })
})

describe('transformInputValue', () => {
  test('合并带 group 的情况', () => {
    const oldV = {
      aa: 1,
      b: {
        cc: 2,
      },
    }
    const newV = {
      a: 1,
      b: {
        c: 2,
      },
    }
    const content = [
      {
        id: 'a',
        inputFormat: v => v.aa,
      },
      {
        id: 'b',
        type: 'group',
        items: [
          {
            id: 'c',
            inputFormat: v => v.cc,
          },
        ],
      },
    ]
    expect(transformInputValue(oldV, content)).toEqual(newV)
  })
})
