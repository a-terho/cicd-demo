import globals from 'globals';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['client/*']), // client tiedostoilla on oma linter
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
      ecmaVersion: 'latest',
    },
    plugins: { '@stylistic/js': stylistic },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single', { avoidEscape: true }],
      eqeqeq: 'error',
      'no-unused-vars': [
        'error',
        { args: 'all', argsIgnorePattern: 'err|req|res|next|^_' },
      ],
      'no-restricted-globals': [
        'error',
        { name: 'require', message: 'Use ESM import instead.' },
        { name: 'module', message: 'Use ESM export instead.' },
        { name: 'exports', message: 'Use ESM export instead.' },
      ],
    },
  },
]);
