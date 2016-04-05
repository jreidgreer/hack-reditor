angular.module('hack-reditor.services', [])
.factory('Documents', function($http){
  var getDocumentsByUser = function(user) {
    return $http({
        method: 'GET',
        url: '/api/users/document',
        data: {user: user}
        })
        .then(function (resp) {
          return resp.data;
        });
  };

  var saveDocument = function(newDocument, callback) {
    return $http({
        method: 'POST',
        url: '/api/document',
        data: newDocument
        })
        .then(function (resp) {
          callback(resp.data);
        });
  }

  var getDocumentById = function(id) {
    return $http({
        method: 'GET',
        url: '/api/document',
        data: {id: id}
        })
        .then(function (resp) {
          return resp.data;
        });
  };

  return {
    getDocumentsByUser: getDocumentsByUser,
    saveDocument: saveDocument,
    getDocumentById: getDocumentById
  }
})

.factory('Auth', function($http, $location, $window){
  var currentUser = {
    id: '',
    email: '',
    name: '',
    isUser: false
  };

  var signup = function(user, callback){
    return $http({
        method: 'POST',
        url: '/api/users/signup',
        data: user
        })
        .then(function (resp) {
          callback(resp.data.token);
        });
  };

  var login = function(user, callback){
    return $http({
        method: 'POST',
        url: '/api/users/login',
        data: user
        })
        .then(function (resp) {
          callback(resp.data.token);
        });
  };

  var getInfo = function(user, callback){
    return $http({
        method: 'POST',
        url: '/api/users/getInfo',
        data: user
        })
        .then(function (resp) {
          console.log('getInfo service is receiving the following response: ', resp.data);
          currentUser.id = resp.data.id;
          currentUser.email = resp.data.email;
          currentUser.name = resp.data.name;
          currentUser.isUser = true;

          callback(resp.user);
        });
  };

  var isAuth = function () {
      return !!$window.localStorage.getItem('com.hack-reditor');
    };

  var logout = function (callback) {
    $window.localStorage.removeItem('com.hack-reditor');
    currentUser = {
        id: '',
        email: '',
        name: '',
        isUser: false
      };
    callback();
  };

  return {
    signup: signup,
    login: login,
    logout: logout,
    getInfo: getInfo,
    isAuth: isAuth,
    currentUser: currentUser
  }
});