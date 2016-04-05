angular.module('hack-reditor.nav', [])
.controller('NavController', function($scope, Auth, $location){
  $scope.logout = function(){
    Auth.logout(function(){
      $location.path('/login');
    });
  }
})