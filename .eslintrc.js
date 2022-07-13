module.exports = {
  root: true,
  extends: [
    '@jetrockets/base',
    '@jetrockets/react',
    '@jetrockets/typescript',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
};
