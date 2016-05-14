'use strict';

var assert = require('assert');


assert.doesNotThrow(
  () => {
    // throw new TypeError('Wrong value');
  },
  SyntaxError
);
