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
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
      typescript: {},
    },
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
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'always',
      },
    ],
    semi: ['error', 'never'],
    'no-bitwise': ['off'],
    'no-mixed-operators': ['off'],
    'no-nested-ternary': ['off'],
  },
}
