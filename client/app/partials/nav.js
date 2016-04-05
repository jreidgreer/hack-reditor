angular.module('hack-reditor.nav', [])
.controller('NavController', function($scope, Auth, $location, $window){
  $scope.currentUser = $window.localStorage.getItem('com.hack-reditor-user-name');;

  $scope.logout = function(){
    Auth.logout(function(){
      $location.path('/login');
    });
  };

  $scope.create = function() {
    $location.path('/create');
  };
})