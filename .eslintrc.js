module.exports = {
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    '@typescript-eslint/no-require-imports': 'error',
  },
  overrides: [
    {
      files: ['tailwind.config.js', 'next.config.js', '*.config.js'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
};
