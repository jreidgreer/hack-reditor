angular.module('hack-reditor.dashboard', [])
.controller('DashboardController', function($scope, Documents, $window, $location){
  $scope.documents = [];

  var initialize = function() {
    Documents.getDocumentsByUser($window.localStorage.getItem('com.hack-reditor-user-id'), function(retrievedDocs){
      $scope.documents = retrievedDocs;
      $scope.hasDocuments = !($scope.documents.length === 0);
    });
  }

  $scope.view = function(id) {
    $location.path('/view/' + id);
  };

  $scope.edit = function(id) {
    $location.path('/edit/' + id);
  };

  initialize();
 });