'use strict';

var assert = require('assert');

assert.throws(
  function() {
    throw new Error('Wrong value');
  },
  Error,
  '匹配 Error 的报错'
);

assert.throws(
  function () {
    throw new TypeError('wrong value');
  },
  TypeError,
  '匹配 TypeError 报错'
);

assert.throws(
  function () {
    throw new Error('wrong value');
  },
  /value/,
  '使用正则匹配'
);
