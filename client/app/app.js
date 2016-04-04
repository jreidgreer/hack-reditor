angular.module('hack-reditor', ['ngRoute'])
// .config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/dashboard', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'DashboardController',
    })
    .when('/', {
      templateUrl: 'app/shorten/shorten.html',
      controller: 'ShortenController',
    })
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
    .otherwise({
      redirectTo: '/links'
    });