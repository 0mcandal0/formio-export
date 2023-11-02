module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    requireConfigFile: false,
  },
  extends: 'eslint:recommended',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "no-prototype-builtins": "off",
    "no-case-declarations": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "no-extra-semi": "off"
  },
};

