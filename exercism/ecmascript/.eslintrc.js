module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    },
    env: {
        es6: true,
        node: true,
        jest: true
    },
    extends: "airbnb",
    rules: {
        "import/no-unresolved": "off",
        "import/extensions": "off"
    }
};
