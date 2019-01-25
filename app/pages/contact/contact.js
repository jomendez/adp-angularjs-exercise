'use strict';

angular.module('adpExercise.contact', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/contact', {
      templateUrl: 'pages/contact/contact.html',
      controller: 'contactCtrl'
    });
  }])

  .controller('contactCtrl', ['$scope', 'contactUtils', function ($scope, contactUtils) {

    $scope.options = contactUtils.options;

    $scope.submitForm = function (isValid) {
     contactUtils.submitForm(isValid); 
    };

  }]);