/* eslint-disable no-new */
/* global Docute */

new Docute({
  target: '#docute',
  sourcePath: '/sources',
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
    }
  ]
})
