'use strict';
angular.module('main')
.controller('InspirationCtrl', function ($log, Product, $stateParams, $scope) {

  $scope.inspirations = Product.inspirations;
  $scope.inspiration = $scope.inspirations[$stateParams.id - 1]
});
