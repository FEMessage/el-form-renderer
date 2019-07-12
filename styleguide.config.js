const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')
const glob = require('glob')
const env = Object.assign({}, require('dotenv').config().parsed, {
  OSS_KEY: process.env.OSS_KEY,
  OSS_SECRET: process.env.OSS_SECRET,
  OSS_BUCKET: process.env.OSS_BUCKET,
  OSS_REGION: process.env.OSS_REGION
})

const sections = (() => {
  const docs = glob
    .sync('docs/*.md')
    .map(p => ({name: path.basename(p, '.md'), content: p}))
  const demos = []
  let faq = '' // 约定至多只有一个faq.md
  const guides = []
  docs.forEach(d => {
    if (/^faq$/.test(d.name)) {
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
      components: 'src/el-form-renderer.js',
      usageMode: 'expand'
    },
    {
      name: 'Demo',
      sections: demos
    },
    ...(faq ? [faq] : []),
    {
      name: 'Guide',
      sections: guides
    }
  ]
})()

module.exports = {
  styleguideDir: 'docs',
  pagePerSection: true,
  ribbon: {
    url: 'https://github.com/FEMessage/el-form-renderer'
  },
  sections,
  require: ['./styleguide/element.js', './styleguide/upload-to-ali.js'],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.styl(us)?$/,
          loaders: ['vue-style-loader', 'css-loader', 'stylus-loader']
        },
        {
          test: /\.(woff2?|eot|[to]tf)(\?.*)?$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new (require('webpack')).DefinePlugin({
        'process.env': JSON.stringify(env)
      })
    ]
  }
}
