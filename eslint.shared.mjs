import stylistic from '@stylistic/eslint-plugin';

export const stylisticConfig = [
  {
    plugins: { '@stylistic/js': stylistic },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single', { avoidEscape: true }],
    },
  },
];

export const sharedConfig = [
  {
    rules: {
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 'off',
    },
  },
];

export const sharedLanguageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
};
