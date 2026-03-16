module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    indent: ['warn', 2],
    semi: ['warn', 'always'],
    quotes: ['warn', 'single'],

    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'warn',
    'no-unused-vars': 'off',

    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^(resolve|inject|injectable)$',
        ignoreRestSiblings: true
      }
    ],

    'react-hooks/exhaustive-deps': 'off'
  }
};