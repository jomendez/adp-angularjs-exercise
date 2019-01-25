'use strict';

angular.module('myApp.contact', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/contact', {
      templateUrl: 'pages/contact/contact.html',
      controller: 'contactCtrl'
    });
  }])

  .controller('contactCtrl', ['$scope', function ($scope) {

    $scope.options = [
      {value:'HealthcareMarketplace', text:'Healthcare Marketplace'},
      {value:'TechnicalSupport', text:'Technical Support'},
      {value:'WebsiteFeedback', text:'Website Feedback'},
    ];

    $scope.submitForm = function (isValid) {

      // check to make sure the form is completely valid
      if (isValid) {
        $('#alert #alert-body').text('This form is valid');
        $('#alert').modal('show');
      }else{
       $('#alert #alert-body').text('This form is invalid');
       $('#alert').modal('show');
      }

    };

  }]);