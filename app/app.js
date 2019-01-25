'use strict';

// Declare app level module which depends on views, and core components
angular.module('adpExercise', [
  'ngRoute',
  'myServices',
  'adpExercise.blog',
  'adpExercise.contact',
  'adpExercise.glossary',
]).
config(['$locationProvider', '$routeProvider', '$compileProvider', function($locationProvider, $routeProvider, $compileProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/blog'});

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto):/);
}]);
