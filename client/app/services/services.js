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
  var signup = function(user){
    return $http({
        method: 'POST',
        url: '/api/users/signup',
        data: user
        })
        .then(function (resp) {
          return resp.data.token;
        });
  };

  return {
    signup: signup
  }
});