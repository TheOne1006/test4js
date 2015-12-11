// ctrl
myApp
  .controller('firstCtrl', ['$scope','notificationsArchive', function($scope, notificationsArchive){
  $scope.name = 'theone';

  notificationsArchive.push('one');
  notificationsArchive.push('two');
  notificationsArchive.push('three');

  $scope.list = notificationsArchive.get();

}])
  .controller('itemCtrl', ['$scope', '$http','ItemService', function($scope, $http,ItemService){

    $scope.list = ItemService.list();
    $scope.user = '';

    $http
      .get('./data/user.json')
      .then(function (data) {
        $scope.user = data.data;
      });
  }]);
