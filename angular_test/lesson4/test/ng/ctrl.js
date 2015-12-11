/**
 * 模拟 http返回值
 */

describe('test angular', function(){


  describe( 'item Test http' , function () {
    var scope, mockBackend,
      mockHttpObj = {id:2,label:'mock'};

    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope,$controller, $httpBackend) {

      mockBackend = $httpBackend;

      mockBackend
        .expectGET( './data/user.json' )
        .respond( mockHttpObj );

      scope = $rootScope.$new();
      ctrl = $controller('itemCtrl', {$scope: scope});
    }));

    it('测试 使用模拟的http返回', function () {

      // 在没有执行模拟相应之前,值为空
      expect(scope.user).toBe('');
      // 模拟相应
      mockBackend.flush();
      // 这下有值了
      expect(scope.user).toEqual(mockHttpObj);
    });




  });



});
