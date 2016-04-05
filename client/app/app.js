angular.module('hack-reditor', ['ngRoute',
  'hack-reditor.services',
  'hack-reditor.dashboard',
  'hack-reditor.homepage',
  'hack-reditor.login',
  'hack-reditor.signup',
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
      controller: 'DashboardController'
    })
    .when('/login', {
      templateUrl: 'app/login/login.html',
      controller: 'LoginController'
    })
    .when('/signup', {
      templateUrl: 'app/signup/signup.html',
      controller: 'SignupController'
    })
    .otherwise({
      redirectTo: '/dashboard'
    });
  });