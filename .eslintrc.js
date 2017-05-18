// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "indent": [2, 2, { "SwitchCase": 1 }],
    "no-console": 0,
    "no-alert": 0,
    "id-length": 0,
    "no-trailing-spaces": 0,
    "no-nested-ternary": 0,
    "camelcase": [0],
    'semi': [2, 'always'],
    "no-new": 0,
    'space-before-function-paren': 0,
    'eol-last': 0
  }
}
