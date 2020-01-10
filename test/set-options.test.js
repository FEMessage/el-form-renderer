import component from '../src/el-form-renderer.vue'
const {setOptions} = component.methods

const options = {
  shell: [
    {
      value: 'zsh'
    }
  ],
  name: [
    {
      value: 'finn hudson'
    }
  ]
}

const mocking = {
  options,
  setOptions
}

test('set options', () => {
  mocking.setOptions('shell', [
    {
      name: 'using fish shell',
      value: 'fish shell'
    }
  ])
  mocking.setOptions('name', [
    {
      value: 'reachel berry'
    }
  ])

  expect(mocking.options).toEqual({
    shell: [
      {
        name: 'using fish shell',
        value: 'fish shell'
      }
    ],
    name: [
      {
        value: 'reachel berry'
      }
    ]
  })
})
