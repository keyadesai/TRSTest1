'use strict';
angular.module('main')
.controller('InspirationCtrl', function ($log, Product, $stateParams, $scope) {

  $scope.inspirations = Product.inspirations;
  $scope.inspiration = $scope.inspirations[$stateParams.id - 1]


  $log.log('Hello from your Controller: InspirationCtrl in module main:. This is your controller:', this);

});
