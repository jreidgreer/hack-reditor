angular.module('hack-reditor', ['ngRoute',
  'hack-reditor.services',
  'hack-reditor.dashboard',
  'hack-reditor.homepage',
  'hack-reditor.login',
  'hack-reditor.signup',
  'hack-reditor.create',
  'hack-reditor.view',
  'hack-reditor.nav'
  ])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/homepage/homepage.html',
      controller: 'HomepageController'
    })
    .when('/dashboard', {
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
      authenticate: true
    })
    .when('/login', {
      templateUrl: 'app/login/login.html',
      controller: 'LoginController'
    })
    .when('/signup', {
      templateUrl: 'app/signup/signup.html',
      controller: 'SignupController'
    })
    .when('/create', {
      templateUrl: 'app/create/create.html',
      controller: 'CreateController'
    })
    .otherwise({
      redirectTo: '/dashboard'
    });

    $httpProvider.interceptors.push('AttachTokens');
  })
.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.hack-reditor');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/login');
    }
  });
});