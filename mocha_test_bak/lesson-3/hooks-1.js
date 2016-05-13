'use strict';

var assert = require('assert');

describe('Hooks Test', function () {
    var foo = 1,
        bar = 1,
        baz = 1;

    /**
     * 钩子 用于构建基境
     */
    before('这里是before 钩子的描述', function () {
        console.log('before it函数执行,所有测试之前');
        foo = 0;
        bar = 0;
    });

    after(function () {
        foo = 1;
        bar = 1;
        console.log('after it所有测试之后执行');
    });

    beforeEach(function () {
        console.log('每次 `it` 测试前触发');
        baz++;
    });

    describe('before 所有测试执行之前', function () {
        it('所有测试前触发 before', function () {
            assert.equal(foo , 0);
            assert.equal(bar , 0);
        });

        it('测试beforeEach 是针对 it 方法启动的', function () {
            assert.equal(bar , 0);
        })
    });

    describe('beforeEach 每次测试之前', function () {
        it('每次 `it` 测试前触发 beforeEach', function () {
            assert.equal(baz , 4);
        });
    })
});
