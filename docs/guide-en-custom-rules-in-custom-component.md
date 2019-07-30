# Setting validation rules in custom component

## Why sets validation rules in custom component?

A complex form item configuration often needs to define some rules to check user input. And there may also be some validation in the rules. Gernerally, this will cause configurations becomes very long.

The solution is set validation rules internally in custom components. Hiding configurations inside, so developers can no longer care about the validation rules, just import the component and use it.

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

Set `overrideRules: true` to override the validation rules written in custom component

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
          component: YourComponent,
          overrideRules: true,
          rules: [
            {
              required: true,
              trigger: 'blur',
              message: 'Can not empty!'
            }
          ]
        }
      ]
    }
  }
}
</script>
```

## Live Demo

[Checkout live demo](https://rules-component.fem-misc.now.sh/#/misc)

## Notice

Currently did NOT support globally registered component.

It means component registered via `Vue.component('your-component', YourComponent)` will not work.
