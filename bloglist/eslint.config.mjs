import js from '@eslint/js';
import globals from 'globals';

import { defineConfig, globalIgnores } from 'eslint/config';
import {
  sharedConfig,
  sharedLanguageOptions,
  stylisticConfig,
} from './eslint.shared.mjs';

export default defineConfig([
  globalIgnores(['client/**']),
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ...sharedLanguageOptions,
      globals: globals.node,
    },
    rules: {
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
  ...stylisticConfig,
  ...sharedConfig,
]);
