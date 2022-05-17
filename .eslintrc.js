module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:sonarjs/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'sonarjs',
  ],
  env: {
    browser: true,
    es2022: true,
  },
  rules: {
    complexity: ['error', { max: 10 }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'vite.config.ts',
          '**/*.test.js',
          '**/*.spec.js',
        ],
      },
    ],
    'import/prefer-default-export': ['off'],
  },
};
