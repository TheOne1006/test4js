'use strict';

var assert = require('assert');


describe('a suite of tests', function() {
  /**
   * 设置超时
   * 超时之后 500 毫秒
   */
  this.timeout(500);

  it('少于500毫秒的测试', function(done){
    setTimeout(done, 400);
  });

  it('should take less than 500ms as well', function(done){
    setTimeout(done, 250);
  });
});
