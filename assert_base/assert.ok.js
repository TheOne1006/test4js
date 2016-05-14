'use strict';

var assert = require('assert');

assert(true, 'ture 通过');
assert('a', '字符 通过');
assert({}, '空对象 通过');
assert([], '空数组 通过');
assert(1, '非0数字 通过');
assert.ok(!0, '非0数字 通过');
