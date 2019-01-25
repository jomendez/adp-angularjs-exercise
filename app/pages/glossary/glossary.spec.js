'use strict';

describe('myApp.glossary module', function () {
  var $controller, $rootScope;

  beforeEach(module('myApp.glossary'));

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $rootScope = _$rootScope_;

  }));

  describe('glossary controller', function () {

    it('glossaryCtrl should be defined', function ($controller) {
      //spec body
      var $scope = $rootScope.$new();
      var glossaryCtrl = $controller('glossaryCtrl', {
        $scope: $scope
      });
      expect(glossaryCtrl).toBeDefined();
    });

  });
});