'use strict';
angular.module('main')
.controller('ListCtrl', function ($log, $stateParams, $scope, Product, lodash) {

  
  var _ = lodash;

  $scope.products = Product.products;
 

  $scope.myActiveSlide = $stateParams.id - 1;


  // $scope.product = $scope.products[$stateParams.id - 1];

  $log.log('Hello from your Controller: ListCtrl in module main:. This is your controller:', this);

  $scope.ratingsObject = {
    iconOn: 'ion-ios-star',
    iconOff: 'ion-ios-star-outline',
    iconOnColor: 'rgb(200, 100, 100)',
    iconOffColor: '#F5D402',
     rating: 0,
    minRating: 0,
    readOnly:false,
    callback: function (rating) {
      $scope.ratingsCallback(rating);
    }
  };

  $scope.ratingsCallback = function (rating) {
    console.log('Selected rating is : ', rating);
  };

});
