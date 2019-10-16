module.exports = {
  env: {
    'jest/globals': true,
    browser: true,
    'node': 1
  },
  extends: [
    'standard',
    'standard-jsx',
    'prettier',
    'prettier/standard',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
  ],
  globals: {
    fetch: false,
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        "quotes": [2, "single", { "avoidEscape": true }]
      }
    },
    {
      files: ['**/*.spec.js'],
      rules: {
        'import/first': 'off',
        'security/detect-non-literal-regexp': 'off',
      },
    },
  ],
  parser: 'babel-eslint',
  plugins: ['prettier', 'standard', 'jest', 'security'],
  root: true,
  rules: {
    'quotes': [2, "single", { "avoidEscape": true }],
    'jest/no-focused-tests': 'error',
    'import/default': 2,
    'import/no-named-default': 'off',
    camelcase: 'off',
    'max-len': [
      'off',
      {
        code: 100,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'prettier/prettier': 'error',
    'standard/no-callback-literal': 'off',
    'no-unexpected-multiline': 'off',
    'no-return-await': 'off',
    'node/no-deprecated-api': 'off',
    'new-cap': 'off',
    'lines-between-class-members': 'off',
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-object-injection': 'off',
    'security/detect-child-process': 'off',
  },
  settings: {
    react: { version: '16.6' },
  },
};
  