angular.module('hack-reditor.view', [])
.controller('ViewController', function($scope, $routeParams, Documents, $sanitize){
  $scope.document = {
    title: '',
    desc: '',
    author: '',
    text: ''
  };

  var initialize = function(){
    var id = $routeParams.id;

    Documents.getDocumentById(id, function(data) {
      $scope.document.title = data.title;
      $scope.document.desc = data.desc;
      $scope.document.author = data.author.name;
      $scope.document.text = $sanitize(data.text);

    });
  };

  initialize();
});