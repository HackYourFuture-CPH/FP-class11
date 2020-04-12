const { prettierConfig } = require('poetic');

module.exports = {
  ...prettierConfig,
  printWidth: 80,
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'all',
  endOfLine: 'lf',
};
