module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  ignorePatterns: [
    'node_modules/',
  ],
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'react',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    // As recommended here: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin#recommended-configs
    'plugin:@typescript-eslint/recommended',
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'plugin:prettier/recommended',
    // This one is to avoid conflict with Prettier
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  parser: '@typescript-eslint/parser',
  rules: {
    // React rules
    'react/no-children-prop': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/prop-types': 'off',
    // react-hooks helpful error checks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/semi': ['warn', 'always'],
    '@typescript-eslint/no-this-alias': 'off',

    '@typescript-eslint/unbound-method': 'warn',
    '@typescript-eslint/no-misused-promises': [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    'constructor-super': 'error',
    'eqeqeq': ['error', 'always'],
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': 'error',
    'no-cond-assign': 'error',
    'no-throw-literal': 'error',
    'use-isnan': 'error',
    'import/order': ['warn', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }],
    'import/no-cycle': ['error', { maxDepth: 30 }],
    'react/display-name': 'warn',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/return-await': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': ['node_modules'],
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  },
};
