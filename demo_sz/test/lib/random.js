'use strict';

var random = require('../../lib/random');
var assert = require('assert');

describe('lib.random', function() {
  describe('digits()', function() {
    it('测试期待随机数生成', function () {
      var expect = 10; // 期待
      var actual = random.digits(expect); //实际

      assert.equal(expect, actual.length );
    });

    it('抛出一个错误在未设置参数', function () {
      assert.throws(function () {
        random.digits()
      }, Error);
    });

    it('抛出一个错误在参数为 boolean 时', function () {
      assert.throws( function () {
        random.digits(false)
      }, Error);
    })
  });
});
