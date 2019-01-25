'use strict';

describe('adpExercise.contact module', function () {

  beforeEach(module('adpExercise.contact'));
  var $controller, $rootScope;

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  describe('contact controller', function () {

    it('should ....', function () {
      //spec body
      var $scope = $rootScope.$new();
      var contactCtrl = $controller('contactCtrl', {
        $scope: $scope
      });
      expect(contactCtrl).toBeDefined();
    });

  });
});