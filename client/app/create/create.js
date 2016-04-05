angular.module('hack-reditor.create', ['textAngular'])
.controller('CreateController', function($scope, Documents, $location, $window){
  $scope.document = {
    text: 'Click to write...',
    title: 'Enter Title Here',
    desc: 'Enter short description',
    author: $window.localStorage.getItem('com.hack-reditor-user-name')
  };

  $scope.toolbarSettings = [
  ['h1', 'h2', 'p', 'quote'],
  ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],
  ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent']
  ];

  $scope.save = function() {
    Documents.saveDocument({
      title: $scope.document.title,
      desc: $scope.document.title,
      text: $scope.document.title,
      author: $window.localStorage.getItem('com.hack-reditor-user-id')
    }, function() {
      $location.path('/dashboard');
    });
  }
});