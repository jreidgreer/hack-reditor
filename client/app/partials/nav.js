angular.module('hack-reditor.nav', [])
.controller('NavController', function($scope, Auth, $location){
  $scope.currentUser = Auth.currentUser;

  $scope.logout = function(){
    Auth.logout(function(){
      $location.path('/login');
    });
  };

  $scope.create = function() {
    $location.path('/create');
  };
})