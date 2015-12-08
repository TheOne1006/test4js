/**
 * 方法 angular.mock.*
 * service
 */

describe('test angular service', function(){


  describe( 'service notificationsArchive tests' , function () {
    //
    var mockServer;

    //模拟我们的Application模块并注入我们自己的依赖
    beforeEach(angular.mock.module('myApp'));

    beforeEach(angular.mock.inject(function(notificationsArchive){
      mockServer = notificationsArchive;
      })
    );

    it( 'test info' , function () {
      var notification = {msg: 'Old message1.' };
      mockServer.push(notification);
      expect(mockServer.get()).toContain(notification);
    });

  });



});
