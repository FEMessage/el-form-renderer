import {collect} from '../src/util/utils'

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
