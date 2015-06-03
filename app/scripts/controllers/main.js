'use strict';

/**
 * @ngdoc function
 * @name basketTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the basketTestApp
 */
angular.module('basketTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log('on the main page!');
  });
