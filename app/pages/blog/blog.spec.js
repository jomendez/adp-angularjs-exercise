'use strict';

describe('adpExercise.blog module', function () {

  var $controller, $rootScope;

  beforeEach(
    function () {
      angular.module('myServices', []);
      module('adpExercise.blog');

      module(function ($provide) {
        $provide.service('resolvedData', function () {
          // Mocking resolvedData
          this.data 
          var obj = {};
          obj.blog = [];
          obj.blog.push(JSON.parse(`{"categories":["es","blog"],"title":"3 formas para usar una nueva cobertura del Mercado","lang":"es","date":"2019-01-17 00:00:00 -0500","url":"/es/blog/3-ways-use-2019-marketplace-coverage/","content":"Descriprion","id":0}`));
          this.data = obj;
        });

        $provide.service('compareServices', function () {
          // Mocking compareServices
        });
      });
    });




  beforeEach(inject(function (_$controller_, _$rootScope_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $rootScope = _$rootScope_;

  }));

  describe('blog controller', function () {

    it('blogCtrl should be defined', function () {
      //spec body
      var $scope = $rootScope.$new();
      var blogCtrl = $controller('blogCtrl', {
        $scope: $scope
      });
      expect(blogCtrl).toBeDefined();
    });

  });
});