'use strict';
/**
 * 独家测试的代码会执行
 * 相同层级的测试将会被忽略
 */

var assert = require('assert');

describe('独家测试', function () {
    it('这里是一个普通的测试', function () {
        assert.equal(2, 2);
    });

    it.only('这里是一个独家测试', function () {
        assert.equal(1, 1);
    });

});
