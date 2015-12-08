/**
 * 方法 angular.mock.*
 */

describe('test angular', function(){


  describe( 'firstCtrl tests' , function () {
    //我们会在测试中使用这个scope
    var scope;

    //模拟我们的Application模块并注入我们自己的依赖
    beforeEach(angular.mock.module('myApp'));

    //模拟Controller，并且包含 $rootScope 和 $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
      //创建一个空的 scope
      scope = $rootScope.$new();
      //声明 Controller并且注入已创建的空的 scope
      $controller('firstCtrl', {$scope: scope});
      })
    );

    // 测试开始
    it('should have variable name = "theone"', function(){
        expect(scope.name).toBe('theone');
    });

    it('测试ctrl 中的 list 方法', function(){
        expect(scope.list).toContain("one");
    });


  });



});
