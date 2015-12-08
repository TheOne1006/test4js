/**
 * 模拟 service
 */

describe('test angular service', function(){


  describe( 'service notificationsArchive tests' , function () {
    //
    var mockServer;

    //模拟我们的Application模块并注入我们自己的依赖
    beforeEach(module('myApp'));

    beforeEach(inject(function(notificationsArchive){
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
