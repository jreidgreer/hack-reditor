angular.module('hack-reditor.services', [])
.factory('Documents', function($http){
  var getDocumentsByUser = function(user, callback) {
    return $http({
        method: 'POST',
        url: '/api/users/document',
        data: {user: user}
        })
        .then(function (resp) {
          callback(resp.data);
        });
  };

  var saveDocument = function(newDocument, callback) {
    return $http({
        method: 'POST',
        url: '/api/document/save',
        data: newDocument
        })
        .then(function (resp) {
          callback(resp.data);
        });
  }

  var updateDocument = function(existingDoc, callback) {
    return $http({
        method: 'POST',
        url: '/api/document/update',
        data: existingDoc
        })
        .then(function (resp) {
          callback(resp.data);
        });
  }

  var getDocumentById = function(id, callback) {
    return $http({
        method: 'POST',
        url: '/api/document',
        data: {id: id}
        })
        .then(function (resp) {
          callback(resp.data);
        });
  };

  return {
    getDocumentsByUser: getDocumentsByUser,
    saveDocument: saveDocument,
    updateDocument: updateDocument,
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
          currentUser.id = resp.data.id;
          currentUser.email = resp.data.email;
          currentUser.name = resp.data.name;
          currentUser.isUser = true;

          callback(currentUser);
        });
  };

  var isAuth = function () {
      return !!$window.localStorage.getItem('com.hack-reditor');
    };

  var logout = function (callback) {
    $window.localStorage.removeItem('com.hack-reditor');
    $window.localStorage.removeItem('com.hack-reditor-user-id');
    $window.localStorage.removeItem('com.hack-reditor-user-name');
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