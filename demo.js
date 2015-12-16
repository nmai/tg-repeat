
// Set up our demo app and generate some data
angular.module('demoApp', ['tgRepeat'])
  .controller('DemoController', function($scope) {
      var i
      $scope.data = []
      for (i = 0; i < 1000; i++) {
          $scope.data.push(i)
      }
  })
