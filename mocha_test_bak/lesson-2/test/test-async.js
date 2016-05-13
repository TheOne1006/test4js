var should = require('should');
var fs = require('fs');

// 异步测试
describe('异步测试', function () {

  describe('fsreadFile 异步测试', function(){
      it('fs.read should be ok', function (done) {

        fs.readFile('/home/theone/theone/node_app/test4js/mocha_test/learn.md', 'utf-8', function (err, data) {
            should.not.exist(err);
            done();
        });
      });
  });

});
