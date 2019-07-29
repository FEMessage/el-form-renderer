# Guide to developing custom component

## Preface

In some scenario, for personalized needs, such as rendering an upload component, common form items can not meet the demand. You may want to develop a custom form item. At this time, the component option can help.

This article will describes how to develop custom component that [el-form-renderer](https://github.com/femessage/el-form-renderer) can render.

## How To

The key point of writing custom component is to implement v-model inside the component in this manner:

- a props name value
- emit input event

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

Now `@femessage/el-form-renderer` can render this custom input component via component option

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

## More Cases

Here is a list of components that we can use `@femessage/el-form-renderer` to render without writing template.

- Upload [https://github.com/FEMessage/upload-to-ali](https://github.com/FEMessage/upload-to-ali)
- Rich text editor [https://github.com/FEMessage/v-editor](https://github.com/FEMessage/v-editor)
- Area selector(Chinese area only) [https://github.com/FEMessage/el-select-area](https://github.com/FEMessage/el-select-area)
- Number range input [https://github.com/FEMessage/el-number-range](https://github.com/FEMessage/el-number-range)
- Semantic version input [https://github.com/FEMessage/el-semver-input](https://github.com/FEMessage/el-semver-input)

## Read More

- [v-model basic](https://vuejs.org/v2/guide/forms.html#Basic-Usage)
- [v-model with Components](https://vuejs.org/v2/guide/forms.html#v-model-with-Components)
