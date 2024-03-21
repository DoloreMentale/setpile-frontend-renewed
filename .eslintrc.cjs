module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"
  ],
  settings: {
    "import/resolver": {
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  rules: {
    "vue/multi-word-component-names": 0,
    "vue/no-multiple-template-root": 0,
    "vue/block-order": ["error", {
      "order": ["template", "script", "style" ]
    }],
    "vue/attributes-order": ["warn", {
      order: [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        ["UNIQUE", "SLOT"],
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "EVENTS",
        "CONTENT"
      ],
      alphabetical: false
    }]
  },
};