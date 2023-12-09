module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  plugins: ['react-refresh', 'prettier'],
  "rules": {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "no-restricted-exports": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "import/no-absolute-path": "off",
    "import/no-extraneous-dependencies": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-named-as-default": "off",
    "react/require-default-props": "off",
    "no-underscore-dangle": "off",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "eslintIntegration": true,
        "printWidth": 120
      }
    ]
  }
}
