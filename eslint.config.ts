import js from '@eslint/js';
import type { ESLint } from 'eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default defineConfig([
  globalIgnores(['dist', 'build']),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true
        }
      }
    },
    plugins: {
      react: react as unknown as ESLint.Plugin,
      'react-hooks': reactHooks as unknown as ESLint.Plugin,
      'jsx-a11y': jsxA11y as unknown as ESLint.Plugin,
      prettier: prettier as unknown as ESLint.Plugin,
      import: importPlugin as unknown as ESLint.Plugin,
      '@typescript-eslint': tsPlugin as unknown as ESLint.Plugin
    },
    rules: {
      // base recommended rules
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...prettierConfig.rules,

      // prettier formatting
      'prettier/prettier': 'error',

      // code style & logic rules
      eqeqeq: ['error', 'always'],
      'prefer-const': 'error',
      'no-param-reassign': 'error',
      'no-shadow': 'off', // disabled for typescript-eslint rule
      '@typescript-eslint/no-shadow': 'error',
      'no-unused-vars': 'off', // disabled for typescript-eslint rule
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
      ],
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
      'rest-spread-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
      'no-trailing-spaces': ['error', { skipBlankLines: true }],
      'no-whitespace-before-property': 'error',
      'no-undef': 'error',
      'no-nested-ternary': 'error',
      'arrow-spacing': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'no-void': 'error',
      'no-empty': 'error',
      'no-console': 'warn',
      'max-params': ['error', 4],
      'linebreak-style': 'off',
      camelcase: ['off', { properties: 'never' }],

      // react-specific
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function', 'function-declaration', 'function-expression']
        }
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unknown-property': 'off',
      'react/jsx-key': 'error',
      'react/self-closing-comp': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/state-in-constructor': 'off',
      'react/destructuring-assignment': 'off',

      // import plugin
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
          'newlines-between': 'ignore'
        }
      ],
      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/named': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-cycle': 'error',
      'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
      'import/no-duplicates': 'error',

      // accessibility
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/label-has-for': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',

      // other
      'no-var': 'error',
      'no-underscore-dangle': ['off', { allowAfterThis: true }]
    }
  }
]);
