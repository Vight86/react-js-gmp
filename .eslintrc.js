module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'always' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/label-has-associated-control': [2, {
      required: {
        some: ['nesting', 'id'],
      },
    }],
  },
  globals: {
    React: 'readonly',
    PropTypes: 'readonly',
  },
  ignorePatterns: ['**/*.min.js', '**/dist/**/*.js'],
};
