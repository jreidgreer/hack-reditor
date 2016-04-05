angular.module('hack-reditor.create', ['textAngular'])
.controller('CreateController', function($scope){
  $scope.document = {
    text: 'Click to write...'
  };

  $scope.toolbarSettings = [
  ['h1', 'h2', 'p', 'quote'],
  ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],
  ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent']
  ];
});