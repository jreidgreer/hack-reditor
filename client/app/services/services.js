angular.module('hack-reditor.services', [])
.factory('Documents', function($http){
  var getDocumentsByUser = function(user) {
    return $http({
        method: 'GET',
        url: '/api/users/documents',
        data: {user: user}
        })
        .then(function (resp) {
          return resp.data;
        });
  };

  var saveDocument = function(newDocument) {
    return $http({
        method: 'POST',
        url: '/api/documents',
        data: newDocument
        })
        .then(function (resp) {
          return resp.data;
        });
  }

  var getDocumentById = function(id) {
    return $http({
        method: 'GET',
        url: '/api/documents',
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

  var isAuth = function () {
      return !!$window.localStorage.getItem('com.shortly');
    };

  var logout = function (callback) {
    $window.localStorage.removeItem('com.shortly');
    callback();
  };

  return {
    signup: signup,
    login: login,
    logout: logout,
    isAuth: isAuth
  }
});