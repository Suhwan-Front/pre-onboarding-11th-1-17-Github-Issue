module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'airbnb-base', 'prettier', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'no-return-assign': 'off',
    'no-restricted-globals': 'off',
    'no-unused-vars': 'off',
  },
};
