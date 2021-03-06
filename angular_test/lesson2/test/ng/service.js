/**
 * service
 */

describe('test angular service', function(){

  /**
   * 测试service 的方法
   * 使用内联方法
   */
  describe( '使用内联的模拟服务' , function () {

    var ctrl, mockService, scope, itemFoo;

    itemFoo = {id: 1 ,label: 'Mock'};

    beforeEach(module('myApp'));

    // 使用模拟创建一个 provide service, 不是
    beforeEach(module(function($provide) {
      mockService = {
        list: function () {
          return [itemFoo];
        }
      };
      $provide.value( 'ItemService' , mockService);
    }));

    //模拟Controller，并且包含 $rootScope 和 $controller
    beforeEach(inject(function($rootScope, $controller){
      //创建一个空的 scope
      scope = $rootScope.$new();
      //声明 Controller并且注入已创建的空的 scope
      $controller('itemCtrl', {$scope: scope});
      })
    );

    /**
     * 准备完毕开始测试
     */
     it('模拟测试service 使用内联模拟服务', function () {
       expect(scope.list).toContain(itemFoo);
     });

  });

  describe('使用全局测试', function () {

    beforeEach(module('myApp'));

    //模拟Controller，并且包含 $rootScope 和 $controller
    beforeEach(inject(function($rootScope, $controller){
      //创建一个空的 scope
      scope = $rootScope.$new();
      //声明 Controller并且注入已创建的空的 scope
      $controller('itemCtrl', {$scope: scope});
      })
    );


    /**
     * 准备完毕开始测试
     */
     it('模拟测试service 使用全局服务', function () {
       expect(scope.list).toContain({id:1,label:'Item 0'});
     });


  });



});
