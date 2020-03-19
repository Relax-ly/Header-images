module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'comma-dangle': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': 0,
    'no-undef': 0,
    'prefer-destructuring': 0,
    'no-path-concat': 0,
    'prefer-template': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0
  },
};
