import component from '../src/el-form-renderer.vue'
const {initItemOption} = component.methods

const mocking = {
  options: {},
  innerContent: [
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
