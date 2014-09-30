'use strict';

/**
 * @ngdoc overview
 * @name ShowRunnerApp
 * @description
 * # ShowRunnerApp
 *
 * Main module of the application.
 */
angular
  .module('ShowRunnerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ShowRunnerApp.services',
    'ngPrettyJson'
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
