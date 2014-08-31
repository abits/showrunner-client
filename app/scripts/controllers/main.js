'use strict';

/**
 * @ngdoc function
 * @name showrunnerClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showrunnerClientApp
 */
var showrunnerClientApp = angular.module('showrunnerClientApp', ['ngResource', 'ui.bootstrap']);



showrunnerClientApp.controller('MainCtrl', ['$scope', 'fullShowInfo',
  function ($scope, fullShowInfo) {
    //$scope.fullShowInfo = {};
    fullShowInfo.query(function(response) {
        $scope.fullShowInfo = response;
        console.dir(response);
    })
  }]);

showrunnerClientApp.factory("fullShowInfo", ["$resource",
  function ($resource) {
    return $resource('https://api.themoviedb.org/3/tv/on_the_air?api_key=b62c12ba0ea3813f66f9761d20f02cfa', {}, {'query': {method: 'GET', isArray: false}});
  }]);

var PaginationDemoCtrl = function ($scope) {
  $scope.totalItems = 64;
  $scope.currentPage = 4;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;
};




