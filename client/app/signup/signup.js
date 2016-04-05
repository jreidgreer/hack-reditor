angular.module('hack-reditor.signup', [])
.controller('SignupController', function($scope, $window, $location, Auth){
  $scope.signup = function () {
      Auth.signup($scope.user, function (token) {
          console.log('Current URL', $location.url());
          $window.localStorage.setItem('com.hack-reditor', token);
          $location.path('/dashboard');
        })
    };
});