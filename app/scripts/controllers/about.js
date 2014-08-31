'use strict';

/**
 * @ngdoc function
 * @name showrunnerClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showrunnerClientApp
 */
angular.module('showrunnerClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
