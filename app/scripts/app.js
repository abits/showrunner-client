'use strict';

/**
 * @ngdoc overview
 * @name showrunnerClientApp
 * @description
 * # showrunnerClientApp
 *
 * Main module of the application.
 */
angular
  .module('showrunnerClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'showrunnerClientApp.services',
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
