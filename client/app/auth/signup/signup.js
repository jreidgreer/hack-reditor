angular.module('hack-reditor.signup', [])
.controller('SignupController', function($scope, $window, $location, Auth){
  $scope.signup = function () {
      Auth.signup($scope.user, function (token) {
          $window.localStorage.setItem('com.hack-reditor', token);
          Auth.getInfo({email: $scope.user.email}, function(userInfo){
            $window.localStorage.setItem('com.hack-reditor-user-id', userInfo.id);
            $window.localStorage.setItem('com.hack-reditor-user-name', userInfo.name);
            $location.path('/dashboard');
          });
        })
    };
});