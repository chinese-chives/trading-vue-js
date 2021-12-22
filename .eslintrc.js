module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    "vue/html-indent": 1,
    "vue/html-closing-bracket-newline": 0,
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 10
        },
        multiline: {
          max: 1
        }
      }
    ],
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 0
      }
    ]
  }
};
