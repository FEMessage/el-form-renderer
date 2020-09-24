const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')
const glob = require('glob')

const sections = (() => {
  const docs = glob
    .sync('docs/*.md')
    .map(p => ({name: path.basename(p, '.md'), content: p}))
  const demos = []
  let faq = '' // 约定至多只有一个faq.md
  const guides = []
  docs.forEach(d => {
    if (/^faq$/i.test(d.name)) {
      d.name = d.name.toUpperCase()
      faq = d
    } else if (/^guide-/.test(d.name)) {
      guides.push(d)
    } else {
      demos.push(d)
    }
  })
  return [
    {
      name: 'Components',
      components: 'src/el-form-renderer.vue',
      usageMode: 'expand',
    },
    {
      name: 'Demo',
      sections: demos,
      sectionDepth: 2,
    },
    ...(faq ? [faq] : []),
    ...(guides.length ? [{name: 'Guide', sections: guides}] : []),
  ]
})()

module.exports = {
  jsxInExamples: true,
  styleguideDir: 'docs',
  pagePerSection: true,
  ribbon: {
    url: 'https://github.com/FEMessage/el-form-renderer',
  },
  sections,
  require: ['./styleguide'],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
        },
        {
          test: /\.less$/,
          loaders: ['vue-style-loader', 'css-loader', 'less-loader'],
        },
        {
          test: /\.(woff2?|eot|[ot]tf)(\?.*)?$/,
          loader: 'file-loader',
        },
      ],
    },
    plugins: [new VueLoaderPlugin()],
  },
}
