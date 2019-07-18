import enhanceContent from '../src/enhance-content'

const mockingComponentOptions = {
  render() {},
  staticRenderFns() {},
  rules() {
    return [
      {
        trigger: 'blur',
        message: '自定义组件的错误信息'
      }
    ]
  }
}

const targetContent = {
  id: 'target',
  label: '目标组件',
  component: mockingComponentOptions,
  rules: [
    {
      required: true,
      message: 'el-form-renderer 的规则设置'
    }
  ]
}

const expectContent = {
  id: 'target',
  label: '目标组件',
  component: mockingComponentOptions,
  rules: [
    {
      required: true,
      message: 'el-form-renderer 的规则设置'
    },
    {
      trigger: 'blur',
      message: '自定义组件的错误信息'
    }
  ]
}

test('增强组件表单项', () => {
  expect(enhanceContent(targetContent)).toEqual(expectContent)
})
