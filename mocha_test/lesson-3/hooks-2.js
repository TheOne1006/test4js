'use strict';

var assert = require('assert');

describe('Hooks 异步调用的测试', function () {
    /**
     * 模拟数据库 对象
     */
    var db = [];

    before(function (done) {
        setTimeout( () => {
            db = db.concat([1,2,3]);
            done();
        }, 1000);
    });

    describe('这里是测试 db 是否完成添加', function () {
        it('db 添加 了3条数据',function () {
            assert.equal(db.length , 3);
        });
    });
});
