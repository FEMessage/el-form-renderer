import transformContent from '../src/util/transform-content'

const oldContent = [
  {
    $type: 'input',
    $id: 'name',
    label: '活动名称',
    $attrs: {'data-name': 'form1'},
    $el: {
      size: 'mini',
      placeholder: 'test placeholder',
    },
    rules: [
      {required: true, message: '请输入活动名称', trigger: 'blur'},
      {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'},
    ],
  },
  {
    $type: 'select',
    $id: 'region',
    label: '活动区域',

    $options: [
      {
        label: '区域一',
        value: 'shanghai',
      },
      {
        label: '区域二',
        value: 'beijing',
      },
    ],
    rules: [{required: true, message: '请选择活动区域', trigger: 'change'}],
  },
  {
    $type: 'date-picker',
    $id: 'date',
    label: '活动时间',
    $el: {
      type: 'datetime',
      placeholder: '请选择',
    },
    rules: [
      {
        type: 'date',
        required: true,
        message: '请选择日期时间',
        trigger: 'change',
      },
    ],
  },
  {
    $type: 'switch',
    $id: 'delivery',
    label: '即时配送',
  },
  {
    $type: 'input',
    $id: 'enableWhenDelivery',
    $el: {
      placeholder: '如果你选择即时配送就看到我啦',
    },
    label: '隐藏项demo',
    $enableWhen: {delivery: true},
  },
  {
    $type: 'checkbox-group',
    $id: 'type',
    label: '活动性质',
    $default: [],
    $options: [
      {
        label: '美食/餐厅线上活动',
      },
      {
        label: '地推活动',
      },
      {
        label: '线下主题活动',
      },
      {
        label: '单纯品牌曝光',
      },
    ],
    rules: [
      {
        type: 'array',
        required: true,
        message: '请至少选择一个活动性质',
        trigger: 'change',
      },
    ],
  },
  {
    $type: 'radio-group',
    $id: 'resource',
    label: '特殊资源',
    $options: [
      {
        label: '线上品牌商赞助',
      },
      {
        label: '线下场地免费',
      },
    ],
    rules: [{required: true, message: '请选择活动资源', trigger: 'change'}],
  },
  {
    $type: 'input',
    $id: 'desc',
    label: '活动形式',
    $el: {
      type: 'textarea',
    },
    rules: [{required: true, message: '请填写活动形式', trigger: 'blur'}],
  },
]

const expectContent = [
  {
    type: 'input',
    id: 'name',
    label: '活动名称',
    attrs: {'data-name': 'form1'},
    el: {
      size: 'mini',
      placeholder: 'test placeholder',
    },
    rules: [
      {required: true, message: '请输入活动名称', trigger: 'blur'},
      {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'},
    ],
  },
  {
    type: 'select',
    id: 'region',
    label: '活动区域',

    options: [
      {
        label: '区域一',
        value: 'shanghai',
      },
      {
        label: '区域二',
        value: 'beijing',
      },
    ],
    rules: [{required: true, message: '请选择活动区域', trigger: 'change'}],
  },
  {
    type: 'date-picker',
    id: 'date',
    label: '活动时间',
    el: {
      type: 'datetime',
      placeholder: '请选择',
    },
    rules: [
      {
        type: 'date',
        required: true,
        message: '请选择日期时间',
        trigger: 'change',
      },
    ],
  },
  {
    type: 'switch',
    id: 'delivery',
    label: '即时配送',
  },
  {
    type: 'input',
    id: 'enableWhenDelivery',
    el: {
      placeholder: '如果你选择即时配送就看到我啦',
    },
    label: '隐藏项demo',
    enableWhen: {delivery: true},
  },
  {
    type: 'checkbox-group',
    id: 'type',
    label: '活动性质',
    default: [],
    options: [
      {
        label: '美食/餐厅线上活动',
      },
      {
        label: '地推活动',
      },
      {
        label: '线下主题活动',
      },
      {
        label: '单纯品牌曝光',
      },
    ],
    rules: [
      {
        type: 'array',
        required: true,
        message: '请至少选择一个活动性质',
        trigger: 'change',
      },
    ],
  },
  {
    type: 'radio-group',
    id: 'resource',
    label: '特殊资源',
    options: [
      {
        label: '线上品牌商赞助',
      },
      {
        label: '线下场地免费',
      },
    ],
    rules: [{required: true, message: '请选择活动资源', trigger: 'change'}],
  },
  {
    type: 'input',
    id: 'desc',
    label: '活动形式',
    el: {
      type: 'textarea',
    },
    rules: [{required: true, message: '请填写活动形式', trigger: 'blur'}],
  },
]

const hasId = [{id: 'id'}]
const hasName = [{name: 'id'}]
const hasProp = [{prop: 'id'}]

test('transform content', () => {
  expect(transformContent(oldContent)).toEqual(expectContent)

  expect(transformContent(hasName)[0].id).toBe(hasId[0].id)
  expect(transformContent(hasProp)[0].id).toBe(hasId[0].id)
})
