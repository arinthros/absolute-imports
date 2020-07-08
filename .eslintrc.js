module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    window: true,
    document: true,
    it: true,
    FileReader: true,
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/**'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'warn',
  },
}
