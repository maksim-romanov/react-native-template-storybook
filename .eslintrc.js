module.exports = {
  root: true,
  extends: [
    '@jetrockets/base',
    '@jetrockets/react',
    '@jetrockets/typescript',
    'plugin:storybook/recommended',
  ],
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
};
