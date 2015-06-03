'use strict';

/**
 * @ngdoc function
 * @name basketTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the basketTestApp
 */
angular.module('basketTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
