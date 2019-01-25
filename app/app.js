'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myServices',
  'myApp.blog',
  'myApp.contact',
  'myApp.glossary',
]).
config(['$locationProvider', '$routeProvider', '$compileProvider', function($locationProvider, $routeProvider, $compileProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/blog'});

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto):/);
}]);
