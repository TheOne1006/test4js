/**
 * 测试../../app/js/server.js 的内容
 */

describe( 'notifications myApp tests' , function () {

  var notificationsArchive;

  // 引入
  beforeEach(module('myApp'));

  beforeEach(inject( function (_notificationsArchive_) {
    notificationsArchive = _notificationsArchive_;
  }));

  it( 'should give access to the archived items' , function () {
    var notification = {msg: 'Old message.' };
    notificationsArchive.push(notification);
    expect(notificationsArchive.get()).toContain(notification);
  });

  it( 'test service' , function () {
    var notification = 'test';
    notificationsArchive.push(notification);
    expect('test').toEqual('test');
  });

});
