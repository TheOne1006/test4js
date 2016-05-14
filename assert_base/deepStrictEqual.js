'use strict';

var assert = require('assert');

var obj1 = {
  a: '1'
};

var obj2 = {
  a: 1
};

assert.deepStrictEqual(obj1, obj2, '使用严格相等===模式');
// AssertionError: 使用严格相等===模式
