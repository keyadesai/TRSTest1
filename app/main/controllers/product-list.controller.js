'use strict';
angular.module('main')
.controller('ListsCtrl', function ($log, $scope, Product, lodash) {
 
 $scope.products1 = _.slice(Product.products, 0, 2);

 $scope.products2 = _.slice(Product.products, 2, 4);

 $scope.products3 = _.slice(Product.products, 4, Product.products.length);
  
  $scope.ratingsObject = {
    iconOn: 'ion-ios-heart',
    iconOff: 'ion-ios-heart-outline',
    iconOnColor: 'rgb(200, 100, 100)',
    iconOffColor: '#F5D402',
    rating: 1,
    callback: function (rating) {
      $scope.ratingsCallback(rating);
    }
  };

  $scope.ratingsCallback = function (rating) {
    console.log('Selected rating is : ', rating);
  };
});
