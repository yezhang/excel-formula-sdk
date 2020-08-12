const _debounce = require('lodash.debounce');

/**
 * debounce 工具
 */

function debounce(func, wait, options) {
  return _debounce(func, wait, options);
}

module.exports = debounce;