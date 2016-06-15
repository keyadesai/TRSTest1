'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ionic-ratings',
  'ngLodash'
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/list');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
      .state('main.list', {
        url: '/list',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list.html',
            controller: 'ListsCtrl as ctrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail/:id',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list-detail.html',
            controller: 'ListCtrl as ctrl'
          }
        }
      })
      .state('main.inspirationList', {
        url: '/inspirationList',
        views: {
          'tab-inspirationList': {
            templateUrl: 'main/templates/inspiration-list.html',
            controller: 'InspirationListCtrl as ctrl'
          }
        }
      })
      .state('main.inspirationListDetail', {
        url: '/inspirationList/detail/:id',
        views: {
          'tab-inspirationList': {
            templateUrl: 'main/templates/inspiration.html',
            controller: 'InspirationCtrl as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'tab-debug': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });
});
