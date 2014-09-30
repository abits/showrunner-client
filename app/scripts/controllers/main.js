'use strict';

/**
 * @ngdoc function
 * @name ShowRunnerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ShowRunnerApp
 */
 var showrunnerApp = angular.module('showrunnerApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

showrunnerApp.
  config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/download/:showId', {
          templateUrl: 'download.html',
          controller: 'DownloadCtrl',
          controllerAs: 'download'
        })
        .when('/info/:showId', {
          templateUrl: 'info.html',
          controller: 'InfoCtrl',
          controllerAs: 'info'
        })
        .when('/', {
          templateUrl: 'main.html',
          controller: 'ShowListCtrl',
          controllerAs: 'list'
        })
        ;

      // configure html5 to get links working on jsfiddle
      $locationProvider.html5Mode(true);
  }])

 showrunnerApp.controller('ShowListCtrl', ['$scope', 'CurrentShowList',
    function ($scope, CurrentShowList) {

      var loadPage = function(pageNumber) {
        $scope.fullShowInfo = CurrentShowList.query({'page': pageNumber});
      };
      loadPage(1);
      $scope.$on('loadPage', function(event, pageNumber) { loadPage(pageNumber) });

    }]);

 showrunnerApp.factory("CurrentShowList", ["$resource",
     function ($resource) {
      return $resource('https://api.themoviedb.org/3/tv/on_the_air?api_key=b62c12ba0ea3813f66f9761d20f02cfa', {}, {'query': {method: 'GET', isArray: false}});
    }]);

 showrunnerApp.factory("DownloadInfo", ["$resource",
     function ($resource, id) {
       console.log(id);
       return id;

    }]);

 showrunnerApp.controller('PaginationDemoCtrl', ['$scope',
    function ($scope) {
      $scope.totalItems = 60;
      $scope.currentPage = 1;

      $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
      }

      $scope.pageChanged = function() {
        $scope.$emit('loadPage', $scope.currentPage)
        console.log('Page changed to: ' + $scope.currentPage);
      };

    }]);

 var ModalDemoCtrl = function ($scope, $modal, $log) {

   $scope.items = ['item1', 'item2', 'item3'];

   $scope.open = function (size) {

     var modalInstance = $modal.open({
       templateUrl: 'download.html',
       controller: ModalInstanceCtrl,
       size: size,
       resolve: {
         items: function () {
           return $scope.items;
         }
       }
     });

     modalInstance.result.then(function (selectedItem) {
       $scope.selected = selectedItem;
     }, function () {
       $log.info('Modal dismissed at: ' + new Date());
     });
   };
 };

 var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

   $scope.items = items;
   $scope.selected = {
     item: $scope.items[0]
   };

   $scope.ok = function () {
     $modalInstance.close($scope.selected.item);
   };

   $scope.cancel = function () {
     $modalInstance.dismiss('cancel');
   };
 };


