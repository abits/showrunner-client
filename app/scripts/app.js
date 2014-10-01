'use strict';

/**
 * @ngdoc overview
 * @name ShowRunnerApp
 * @description
 * # ShowRunnerApp
 *
 * Main module of the application.
 */
var showrunnerApp = angular.module('showrunnerApp',
                                   ['ngRoute', 'ngResource', 'ui.bootstrap']);

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
