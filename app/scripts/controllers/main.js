'use strict';

/**
 * @ngdoc function
 * @name showrunnerClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showrunnerClientApp
 */
var showrunnerClientApp = angular.module('showrunnerClientApp', ['ngResource', 'ui.bootstrap']);


showrunnerClientApp.controller('MainCtrl', ['$scope', 'CurrentShowList',
  function ($scope, CurrentShowList) {

    var loadPage = function(pageNumber) {
      $scope.fullShowInfo = CurrentShowList.query({'page': pageNumber});
    };
    loadPage(1);
    $scope.$broadcast('listLoaded', $scope.fullShowInfo)
    $scope.$on('loadPage', function(event, pageNumber) { loadPage(pageNumber) });

  }]);

showrunnerClientApp.factory("CurrentShowList", ["$resource",
  function ($resource) {
    return $resource('https://api.themoviedb.org/3/tv/on_the_air?api_key=b62c12ba0ea3813f66f9761d20f02cfa', {}, {'query': {method: 'GET', isArray: false}});
  }]);

var PaginationDemoCtrl = function ($scope) {
  $scope.totalItems = 64;
  $scope.currentPage = 1;

  $scope.$on('listLoaded', function(event, data) {console.dir("P")})

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $scope.$emit('loadPage', $scope.currentPage)
    console.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;
};




