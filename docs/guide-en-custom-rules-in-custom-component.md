# Custom rules in custom component

## What benefit to set validation rules in custom component?

A complex form item configuration often requires the definitions of validation rules to restrict users input, there may custom validators in the rules.
Adding a bunch of such form items, it will cause the configuration item of the page file to become very long and long.

Now el-form-renderer provides an interface for custom component.
Custom component can set some rules internally to achieve encapsulation and hiding.
Users can no longer care about the validation rules of the form.

**Just one component, it's all done for you!**

## Tutorial

`your-page.vue`

```html
<template>
  <el-form-renderer ref="form" :content="content"></el-form-renderer>
</template>

<script>
import YourComponent from './your-component.vue'
export default {
  data() {
    return {
      content: [
        {
          id: 'phone',
          label: 'phone',
          component: YourComponent
        }
      ]
    }
  }
}
</script>
```

`your-component.vue`

```html
<template>
  <input type="text" :value="value" @input="onInput">
</template>

<script>
export default {
  rules: [
    {
      required: true,
      message: 'Tips from custom component'
    }
  ],
  props: ['value'],
  methods: {
    onInput(val) {
      this.$emit('input', val)
    }
  }
}
</script>
```

`rules` can also be a function, receive current form item configuration, return an array.

```bash
rules(item) {
  return [
    {
      required: true,
      message: `${item.id} can not empty!`
    }
  ]
}
```

## Live Demo

[Checkout live demo](https://rules-component.fem-misc.now.sh/#/misc)

## Attention

Currently did NOT support globally registered component

which means register via `Vue.component('your-component', YourComponent)`
