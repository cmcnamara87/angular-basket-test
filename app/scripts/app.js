'use strict';

/**
 * @ngdoc overview
 * @name basketTestApp
 * @description
 * # basketTestApp
 *
 * Main module of the application.
 */
angular
  .module('basketTestApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
