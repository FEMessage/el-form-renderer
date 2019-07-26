import {createLocalVue, mount} from '@vue/test-utils'
import Element from 'element-ui'
import ElFormRenderer from '../src/el-form-renderer'

const localVue = createLocalVue()

localVue.use(Element)

describe('测试 ElFormRenderer 的 resetFields 函数', () => {
  const wrapper = mount(ElFormRenderer, {
    localVue,
    propsData: {
      content: []
    }
  })

  wrapper.setData({
    value: {
      select_item: [undefined, '选项1', undefined, '选项2', '选项3']
    }
  })

  const vm = wrapper.vm

  beforeEach(() => {
    vm.resetFields()
  })

  test('传入有 undefined 值的数组应返回去除 undefined 的数组', () => {
    expect(vm.value['select_item']).toEqual(['选项1', '选项2', '选项3'])
  })
})
