angular.module('hack-reditor.signup', [])
.controller('SignupController', function($scope, $window, $location, Auth){
  $scope.signup = function () {
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.hack-reditor', token);
          $location.path('/dashboard');
        })
        .catch(function (error) {
          console.error(error);
        });
    };
});