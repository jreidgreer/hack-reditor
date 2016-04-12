angular.module('hack-reditor.login', [])
.controller('LoginController', function($scope, $window, $location, Auth){
  $scope.login = function () {
      Auth.login($scope.user, function (token) {
          $window.localStorage.setItem('com.hack-reditor', token);
          Auth.getInfo({email: $scope.user.email}, function(userInfo){
            $window.localStorage.setItem('com.hack-reditor-user-id', userInfo.id);
            $window.localStorage.setItem('com.hack-reditor-user-name', userInfo.name);
            $location.path('/dashboard');
          });
        });
    };
});