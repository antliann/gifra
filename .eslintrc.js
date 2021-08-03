module.exports = {
  root: true,
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
  },
  rules: {
    // to avoid problems with Babel module resolver
    'import/no-unresolved': 'off',
    'eol-last': 'off',
    'import/no-named-as-default-member': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-use-before-define': 'off',
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    'no-console': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};
