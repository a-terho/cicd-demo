import js from '@eslint/js';
import globals from 'globals';

import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

import { defineConfig } from 'eslint/config';
import {
  sharedConfig,
  sharedLanguageOptions,
  stylisticConfig,
} from '../eslint.shared.mjs';

export default defineConfig([
  { ignores: ['dist', 'node_modules/**'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ...sharedLanguageOptions,
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': [
        'error',
        { vars: 'all', varsIgnorePattern: '^[A-Z_]', args: 'all' },
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  ...stylisticConfig,
  ...sharedConfig,
]);
