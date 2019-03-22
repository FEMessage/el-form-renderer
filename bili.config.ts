import { Config } from 'bili'

const config: Config = {
  input: 'src/index.vue',
  output: {
    minify: true,
    fileName: 'el-form-renderer.js',
    dir: './'
  },
  babel: {
    babelrc: false
  },
  plugins: {
    vue: true
  }
}

export default config
