// ctrl
myApp
  .controller('homeCtrl', ['$scope', function($scope){
    $scope.t1 = new Date ().getTime();
    $scope.t2 = $scope.t1 - 1000 * 60;
    $scope.t3 = $scope.t1 - 1000 * 60 * 60 ;
    $scope.t4 = $scope.t1 - 1000 * 60 * 60 * 24;


}]);
