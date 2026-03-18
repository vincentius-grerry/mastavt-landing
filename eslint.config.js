import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  {ignores: ['build', '.next', 'node_modules', '**/__test__']},
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      prettier,
    },

    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        alias: {
          map: [
            ['@', './app'],
            ['@components', './app/components'],
            ['@utils', './app/utils'],
          ],
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
    },

    rules: {
      /* general */
      semi: ['warn', 'always'],
      quotes: ['warn', 'single'],
      indent: ['warn', 2],
      'no-console': ['warn', {allow: ['warn', 'error']}],
      'prefer-const': 'warn',
      'comma-dangle': ['error', 'always-multiline'],

      /* import */
      'import/extensions': 'off',
      'import/no-unresolved': 'off',

      /* react */
      'react/react-in-jsx-scope': 'off',
      'react/jsx-boolean-value': 'warn',
      'react/self-closing-comp': 'warn',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-no-useless-fragment': 'warn',

      /* hooks */
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      /* accessibility */
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',

      /* typescript */
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-shadow': 'warn',

      /* prettier */
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: true,
          tabWidth: 2,
          printWidth: 120,
          bracketSpacing: false,
          endOfLine: 'auto',
        },
      ],
    },
  },
);
