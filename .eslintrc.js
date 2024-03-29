module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/base",
    "plugin:vue/recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    "prefer-const": 2,
    "vue/html-indent": "off",
    "vue/html-self-closing": "off",
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-tabs": "off",
    "space-before-function-paren": "off",
    "no-unused-vars": [
      "off",
      { vars: "all", args: "none", ignoreRestSiblings: false },
    ],
    "vue/order-in-components": "off",
    "vue/no-v-html": "off",
    "vue/comment-directive": 0,
    "vue/component-definition-name-casing": "off",
    "vue/attribute-hyphenation": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-types": "off",
    "no-inferrable-types": 0,
    "vue/max-attributes-per-line": "off",
  },
};
