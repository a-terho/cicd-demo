import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

import { sharedConfig, sharedLanguageOptions } from '../eslint.shared.mjs';

export default [
  { ignores: ['dist'] },
  ...sharedConfig,
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
];
