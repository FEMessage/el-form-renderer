import Vue, {VueConstructor, VNode} from 'vue'

import {Form} from '@femessage/element-ui/types/element-ui'

class FemessageComponent extends Vue {
  static install(vue: typeof Vue): void
}

type Combined<Data, Methods, Computed, Props> = Data &
  Methods &
  Computed &
  Props

type ElFormRendererData = {
  value: {[key: string]: any}
  options: {[key: string]: any}
  initValue: null | {[key: string]: any}
}

type ElFormRendererMethods = {
  resetFields: () => void

  getFormValue: () => {[key: string]: any}

  updateForm: (newValue: any) => void

  setOptions: (id: string, options: any[]) => void
}

type ElFormRendererComputed = {}

export interface FormContentItem {
  id: string
  label?: string | VNode
  [key: string]: any
}

export type FormContent = Array<FormContentItem>

type ElFormRendererProps = {
  content: FormContent
  disabled: boolean
  readonly: boolean
  form: {[key: string]: any}
}

type ElFormRenderer = Combined<
  ElFormRendererData,
  ElFormRendererMethods,
  ElFormRendererComputed,
  ElFormRendererProps
>

export interface ElFormRendererType
  extends FemessageComponent,
    ElFormRenderer,
    Form {}
