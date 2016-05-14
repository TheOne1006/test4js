'us strict';

var assert = require('assert');

/**
 * 不适用与单元测试， 一般在远程请求测试，网络问题等原因造成测试数据不准确
 */

describe('重复测试', function () {
    this.retries(4);

    var count = 0;
    it('开始重复测试', function () {
        console.log(`当前测试次数 : %s`, ++count );
        assert.equal(2, 2);
    });


});
