# Guide to custom component access

## Forewords

[el-form-renderer](https://github.com/femessage/el-form-renderer) has a limited of `type`, only normal form items can be rendered by default. What if wanna render an upload component? The `component` option comes in handy at this time.

This article will describes how to develop custom component that conform to the [el-form-renderer](https://github.com/femessage/el-form-renderer) access standard for rendering custom component.

## Access Standard

The key of custom component access is to implement v-model inside the component

[el-form-renderer](https://github.com/femessage/el-form-renderer) request to v-model is:

- Has a `value` prop
- Emit `input`

### Example

```html
<!-- custom component: my-input -->
<input :value="value" @input="onInput">

<script>
export default {
  props: {
    value: String
  },
  methods: {
    onInput(val) {
      this.$emit('input', 'my-input: ' + val)
    }
  }
}
</script>
```

Then render this component via [el-form-renderer](https://github.com/femessage/el-form-renderer)

```html
<template>
  <el-form-renderer :content="content"/>
</template>

<script>
import MyInput from '@/components/my-input.vue'
export default {
  data() {
    return {
      content: [
        {
          component: MyInput,
          id: 'myInput',
          label: 'label'
        }
      ]
    }
  },
}
</script>
```

## Actual cases

Currently, we implement v-model for common form extension components according to the [el-form-renderer](https://github.com/femessage/el-form-renderer) standard,
so you can implements data-driven rendering via [el-form-renderer](https://github.com/femessage/el-form-renderer) without writing template.

- Upload [https://github.com/FEMessage/upload-to-ali](https://github.com/FEMessage/upload-to-ali)
- Rich-text editor [https://github.com/FEMessage/v-editor](https://github.com/FEMessage/v-editor)
- Area selector(Chinese area only) [https://github.com/FEMessage/el-select-area](https://github.com/FEMessage/el-select-area)
- Number-range input [https://github.com/FEMessage/el-number-range](https://github.com/FEMessage/el-number-range)
- Semantic-version input [https://github.com/FEMessage/el-semver-input](https://github.com/FEMessage/el-semver-input)

## Read more

- [v-model basic](https://vuejs.org/v2/guide/forms.html#Basic-Usage)
- [v-model with Components](https://vuejs.org/v2/guide/forms.html#v-model-with-Components)
