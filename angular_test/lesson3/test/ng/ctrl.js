/**
 * 如果只是想知道ItemService中的list方法是否被调用,不想知道list返回值,可以使用Spies
 */

describe('test angular', function(){


  describe( 'item Test spy' , function () {
    var scope, ctrl,itemService;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $controller, ItemService) {
      // 添加 sype,正常执行
      spyOn(ItemService, 'list' ).and.callThrough();

      itemService = ItemService;
      scope = $rootScope.$new();
      ctrl = $controller('itemCtrl', {$scope: scope});
    }));

    it('spy方法', function () {
      expect(itemService.list).toHaveBeenCalled();

      expect(itemService.list.calls.count()).toEqual(1);

    });

    it('test1', function () {
        expect(true).toBe(true);
    });



  });

  describe('item Test spy 使用指定返回',function () {

    var scope, ctrl,itemService,
      returnObj = {id:112,label:"text"};

    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $controller, ItemService) {
      // 添加 sype
      spyOn(ItemService, 'list' ).and.returnValue(returnObj);

      itemService = ItemService;
      scope = $rootScope.$new();
      ctrl = $controller('itemCtrl', {$scope: scope});
    }));

    it('spy方法', function () {
      expect(itemService.list).toHaveBeenCalled();
      expect(itemService.list.calls.count()).toEqual(1);
      expect(scope.list).toBe(returnObj);
    });

  });



});
