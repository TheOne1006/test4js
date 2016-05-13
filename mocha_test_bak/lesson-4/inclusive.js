'use strict';

var assert = require('assert');


describe('Inclusive Test', function () {

    it.skip('跳过这个测试', function () {
        assert.equal(1, 2);
    });

    it('执行这个测试', function () {
        assert.equal(2, 2);
    })
});
