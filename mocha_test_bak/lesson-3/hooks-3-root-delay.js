'use strict';

var assert = require('assert');

/**
 * 根套件延迟执行
 * 通过 run 手动触发
 * mocha --delay hooks-3-root-delay.js
 */

var i = 1;
setTimeout(function () {
    i = 10;
}, 3000)

setTimeout(function () {
    describe('这里是根套件', function () {
        it('我需要延迟 5000s 执行', function () {
            assert.equal(i, 10);
        });
    });

    run();
    // run 移除之后, 抓取不到结果
}, 5000);
