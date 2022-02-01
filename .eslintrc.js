
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json",
    useJSXTextNode: true
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    semi: 0,
    'import/extensions':0,
    'no-extra-semi': 0,
    'no-console':0,
    'prefer-promise-reject-errors': 0,
    'react/jsx-filename-extension':0,
    'react/prop-types': 0,
    'no-return-assign': 0,
    '@typescript-eslint/semi': [2, "never"],
    '@typescript-eslint/no-extra-semi': 2,
    '@typescript-eslint/no-unused-vars': 0,
    'react/display-name': 0,
    'import/no-unresolved': 0,
    'comma-dangle': 0
  }
}