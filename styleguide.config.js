const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')
const glob = require('glob')

const demos = glob.sync('docs/!(basic).md')
const demoSections = demos.map(filePath => ({
  name: path.basename(filePath, '.md'),
  content: filePath
}))

module.exports = {
  styleguideDir: 'docs',
  pagePerSection: true,
  ribbon: {
    url: 'https://github.com/FEMessage/el-form-renderer'
  },
  sections: [
    {
      name: 'Components',
      components: 'src/index.js',
      usageMode: 'expand'
    },
    {
      name: 'Demo',
      content: 'docs/basic.md',
      sections: demoSections
    }
  ],
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
    plugins: [new VueLoaderPlugin()]
  }
}
