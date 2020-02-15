import {extractRulesFromComponent} from '../src/util/transform-content'

const mockingComponentOptions = {
  render() {},
  staticRenderFns() {},
}

describe('自定义组件规则', () => {
  test('调用函数返回规则', () => {
    const {rulesContent, expectContent} = getFunctionRulesContent()
    extractRulesFromComponent(rulesContent)
    expect(rulesContent).toEqual(expectContent)
  })

  test('获取静态规则', () => {
    const {rulesContent, expectContent} = getStaticRulesContent()
    extractRulesFromComponent(rulesContent)
    expect(rulesContent).toEqual(expectContent)
  })
})

function getFunctionRulesContent() {
  const rulesComponentOptions = Object.assign(mockingComponentOptions, {
    rules() {
      return [
        {
          trigger: 'blur',
          message: '自定义组件的错误信息',
        },
      ]
    },
  })

  const rulesContent = {
    id: 'target',
    label: '目标组件',
    component: rulesComponentOptions,
    rules: [
      {
        required: true,
        message: 'el-form-renderer 的规则设置',
      },
    ],
  }

  const expectContent = {
    id: 'target',
    label: '目标组件',
    component: rulesComponentOptions,
    rules: [
      {
        required: true,
        message: 'el-form-renderer 的规则设置',
      },
      {
        trigger: 'blur',
        message: '自定义组件的错误信息',
      },
    ],
  }

  return {
    rulesContent,
    expectContent,
  }
}

function getStaticRulesContent() {
  const rulesComponentOptions = Object.assign(mockingComponentOptions, {
    rules: [
      {
        trigger: 'blur',
        message: '自定义组件的错误信息',
      },
    ],
  })

  const rulesContent = {
    id: 'target',
    label: '目标组件',
    component: rulesComponentOptions,
    rules: [
      {
        required: true,
        message: 'el-form-renderer 的规则设置',
      },
    ],
  }

  const expectContent = {
    id: 'target',
    label: '目标组件',
    component: rulesComponentOptions,
    rules: [
      {
        required: true,
        message: 'el-form-renderer 的规则设置',
      },
      {
        trigger: 'blur',
        message: '自定义组件的错误信息',
      },
    ],
  }

  return {
    rulesContent,
    expectContent,
  }
}
