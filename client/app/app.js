angular.module('hack-reditor', ['ngRoute',
  'hack-reditor.services',
  'hack-reditor.dashboard',
  'hack-reditor.homepage',
  'hack-reditor.login',
  'hack-reditor.signup',
  'hack-reditor.create',
  'hack-reditor.view',
  'hack-reditor.edit',
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
      templateUrl: 'app/auth/login/login.html',
      controller: 'LoginController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup/signup.html',
      controller: 'SignupController'
    })
    .when('/create', {
      templateUrl: 'app/documents/create/create.html',
      controller: 'CreateController',
      authenticate: true
    })
    .when('/edit/:id', {
      templateUrl: 'app/documents/edit/edit.html',
      controller: 'EditController',
      authenticate: true
    })
    .when('/view/:id', {
      templateUrl: 'app/documents/view/view.html',
      controller: 'ViewController'
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
})