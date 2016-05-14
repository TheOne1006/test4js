var assert = require('assert');

describe('Array', function () {

  describe('#indexOf()', function(){
      it('当indexOf 未匹配到值时是否返回 -1', function () {
        assert.equal(-1, [1,2,3].indexOf(5));
      });
  });

});
