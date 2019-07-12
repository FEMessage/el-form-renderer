import component from '../src/el-form-renderer'
const {initItemOption} = component.methods

const mocking = {
  options: {},
  _content: [
    {
      id: 'shell',
      options: [
        {
          value: '❤ fish'
        }
      ]
    },
    {
      id: 'name',
      options: [
        {
          value: 'van darkholme'
        }
      ]
    }
  ],
  initItemOption
}

test('initial item options', () => {
  mocking.initItemOption()
  expect(mocking.options).toEqual({
    shell: [
      {
        value: '❤ fish'
      }
    ],
    name: [
      {
        value: 'van darkholme'
      }
    ]
  })
})
