module.exports = {
  'root': true,
  'env': {
    'browser': true
  },
  'extends': [
    'plugin:vue/essential'
  ],
  'plugins': [
    'vue'
  ],
  'parserOptions': {
    'ecmaVersion': 2017
  },
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-indent': ['error', 2]
  }
}
