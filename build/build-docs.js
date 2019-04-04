const ora = require('ora')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  entry: {
    index: './docs/index.js'
  },
  output: {
    path: resolve('docs/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('docs'), resolve('src')]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new (require('html-webpack-plugin'))({
      filename: 'index.html',
      template: 'docs/index.html',
      inject: false
    }),
    new (require('copy-webpack-plugin'))(
      [
        {
          from: resolve('docs'),
          to: resolve('docs/dist'),
          ignore: ['index.*', 'dist/**']
        }
      ]
    )
  ]
}

const spinner = ora('building for documentation...')
spinner.start()

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
    console.log(chalk.red('  Build failed with errors.\n'))
    process.exit(1)
  }

  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})
