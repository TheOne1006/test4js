'use strict';

/**
 * 测试事件显示
 *
 */
var assert = require('assert');

describe('测试时间显示 - 正常测试', function () {
     it('这是一个非常慢的的test ', function (done) {
         setTimeout( ()=> [assert.equal(1, 1), done()] , 600);
     });

     it('这里是一个缓慢的 test', function (done) {
         setTimeout( ()=> [assert.equal(1, 1), done()] , 50);
     });

     it('这里是一个快速的 test', function () {
         assert.equal(1, 1);
     });
});

describe('测试时间显示 - 修改为慢速', function () {
    // 设置 slow ,  大于 10000 毫秒为 很慢
    this.slow(10000);
    it('1000 毫秒的速度不在算慢', function (done) {
        setTimeout( ()=> [assert.equal(1, 1), done()] , 1200);
    });
})
