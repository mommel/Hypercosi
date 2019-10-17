const path = require('path');

module.exports = {
  root: true,
  extends: [
    'plugin:i18n-json/recommended'
  ],
  rules: {
    'i18n-json/valid-message-syntax': [2, {
      syntax: 'icu',
    }],
    "i18n-json/valid-json": 2,
    "i18n-json/sorted-keys": [2, {
      "order": "asc",
      "indentSpaces": 2,
    }],
    'i18n-json/identical-keys': [2, {
      filePath: path.resolve('./src/i18n/en-US.json')
    }]
  }
}