/* eslint-disable no-new */
/* global Docute, Vue, docuteDemoCode */

import ElFormRenderer from '../src/index.js'

Vue.component('ElFormRenderer', ElFormRenderer)

window.CustomComponent = Vue.component('CustomComponent', {
  template: '<button type="button" @click="count++">count: {{ count }}</button>',
  props: ['value'],
  data () {
    return {
      count: this.value
    }
  }
})

new Docute({
  target: '#docute',
  sourcePath: '/sources',
  plugins: [
    docuteDemoCode()
  ],
  nav: [
    {
      title: 'GitHub',
      link: 'https://github.com/femessage/el-form-renderer'
    }
  ],
  sidebar: [
    {
      title: 'Guide',
      links: [
        {
          title: 'Introduction',
          link: '/',
          toc: false
        }
      ]
    },
    {
      title: 'basic',
      links: [
        {
          title: 'Classic',
          link: '/basic/classic'
        },
        {
          title: 'Input',
          link: '/basic/input'
        },
        {
          title: 'Select',
          link: '/basic/select'
        },
        {
          title: 'Radio Group',
          link: '/basic/radio-group'
        },
        {
          title: 'Checkbox Group',
          link: '/basic/checkbox-group'
        },
        {
          title: 'Date Picker',
          link: '/basic/date-picker'
        }
      ]
    },
    {
      title: 'Advanced',
      links: [
        {
          title: 'Custom Component',
          link: '/advanced/custom-component'
        },
        {
          title: 'Rules',
          link: '/advanced/rules'
        },
        {
          title: 'Update Form',
          link: '/advanced/update-form'
        },
        {
          title: 'Format',
          link: '/advanced/format'
        },
        {
          title: 'Next Tick',
          link: '/advanced/nexttick'
        },
        {
          title: 'At Change',
          link: '/advanced/at-change'
        },
        {
          title: 'Slot',
          link: '/advanced/slot'
        }
      ]
    }
  ]
})
