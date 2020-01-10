module.exports = {
  presets: [['@babel/env', {modules: false}]],
  env: {
    test: {
      presets: [['@babel/env', {modules: 'commonjs'}]]
    }
  },
  plugins: [
    [
      '@babel/transform-runtime',
      {
        regenerator: true
      }
    ]
  ]
}
