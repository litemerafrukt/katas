module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module"
  },
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: "airbnb-base",
  rules: {
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "off"
  }
};
