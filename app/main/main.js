'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ionic-ratings',
  'ngLodash'
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/product-list');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
      .state('main.list', {
        url: '/product-list',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/product-list.html',
            controller: 'ListsCtrl as ctrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/product-detail/:id',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/product-detail.html',
            controller: 'ListCtrl as ctrl'
          }
        }
      })
      .state('main.inspirationList', {
        url: '/inspiration-list',
        views: {
          'tab-inspirationList': {
            templateUrl: 'main/templates/inspiration-list.html',
            controller: 'InspirationListCtrl as ctrl'
          }
        }
      })
      .state('main.inspirationListDetail', {
        url: '/inspiration-detail/:id',
        views: {
          'tab-inspirationList': {
            templateUrl: 'main/templates/inspiration-detail.html',
            controller: 'InspirationCtrl as ctrl'
          }
        }
      });
});
