var assert = require('assert');

/**
 * BDD 风格
 */
describe('BDD风格-Array', function () {

  before(function () {
    // ...
  });

  describe('#indexOf()', function(){
      it('当indexOf 未匹配到值时是否返回 -1', function () {
        assert.equal(-1, [1,3,4].indexOf(5));
      });
  });

});


/**
 * TDD 风格
 */
// suite('TDD风格-Array', function () {
//   setup(function () {
//     // ...
//   });
//
//   suite('#indexOf', function () {
//     test('当indexOf 未匹配到值时是否返回 -1', function () {
//       assert.equal(-1, [1,3,4].indexOf(5));
//     });
//   });
// });
