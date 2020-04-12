module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  parser: 'babel-eslint', // class properties
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb',
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
