// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'vue'],

  testMatch: ['**/test/?(*.)+(spec|test).[jt]s?(x)'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.js$': './node_modules/babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  }
}
