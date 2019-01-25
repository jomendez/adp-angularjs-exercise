'use strict';

describe('adpExercise.contact module', function () {

  var $controller, $rootScope;

  beforeEach(function () {
    angular.module('myServices', []);
    module('adpExercise.contact');
    
    module(function ($provide) {
      $provide.service('contactUtils', function () {
        // Mocking compareServices
        var options = [];
        var submitForm = function (isValid) {
        };

        return {
          submitForm: submitForm,
          options: options
        }

      });
    });
  });

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  describe('contact controller', function () {

    it('contactCtrl should be defined', function () {
      //spec body
      var $scope = $rootScope.$new();
      var contactCtrl = $controller('contactCtrl', {
        $scope: $scope
      });
      expect(contactCtrl).toBeDefined();
    });

  });
});