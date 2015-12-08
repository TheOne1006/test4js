// 待测试 factory
myApp.factory( 'notificationsArchive' , function () {
    var archivedNotifications = [];
    return {
      push: function (notification) {
        archivedNotifications.push(notification);
      },
      get: function () {
        return archivedNotifications;
      }
    };
  });
