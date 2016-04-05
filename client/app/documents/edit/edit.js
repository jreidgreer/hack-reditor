angular.module('hack-reditor.edit', ['textAngular'])
.controller('EditController', function($scope, Documents, $location, $sanitize, $routeParams, $window){
  $scope.document = {
    title: '',
    desc: '',
    author: '',
    text: ''
  };

  var initialize = function(){
    $scope.id = $routeParams.id;

    Documents.getDocumentById($scope.id, function(data) {
      $scope.document.title = data.title;
      $scope.document.desc = data.desc;
      $scope.document.author = data.author.name;
      $scope.document.text = $sanitize(data.text);

    });
  };

  initialize();

  $scope.toolbarSettings = [
  ['h1', 'h2', 'p', 'quote'],
  ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],
  ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent']
  ];

  $scope.update = function() {
    Documents.updateDocument({
      id: $scope.id,
      title: $scope.document.title,
      desc: $scope.document.desc,
      text: $scope.document.text,
      author: $window.localStorage.getItem('com.hack-reditor-user-id')
    }, function() {
      $location.path('/dashboard');
    });
  }
});