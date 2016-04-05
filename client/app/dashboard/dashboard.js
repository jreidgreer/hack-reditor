angular.module('hack-reditor.dashboard', [])
.controller('DashboardController', function($scope, Documents, Auth, $window){
  $scope.documents = [];

  var initialize = function() {
    Documents.getDocumentsByUser($window.localStorage.getItem('com.hack-reditor-user-id'), function(retrievedDocs){
      $scope.documents = retrievedDocs;
    });
  }

  initialize();
 });