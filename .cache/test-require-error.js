"use strict";

// This module is also copied into the .cache directory some modules copied there
// from cache-dir can also use this module.
module.exports = function (moduleName, err) {
  var regex = new RegExp(`Error: Cannot find module\\s.${moduleName}`);
  var firstLine = err.toString().split(`\n`)[0];
  return regex.test(firstLine);
};
//# sourceMappingURL=test-require-error.js.map