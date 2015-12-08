// ctrl
myApp
  .controller('firstCtrl', ['$scope','notificationsArchive', function($scope, notificationsArchive){
  $scope.name = 'theone';

  notificationsArchive.push('one');
  notificationsArchive.push('two');
  notificationsArchive.push('three');

  $scope.list = notificationsArchive.get();

}])
  .controller('itemCtrl', ['$scope','ItemService', function($scope,ItemService){

    $scope.list = ItemService.list();
  }]);
