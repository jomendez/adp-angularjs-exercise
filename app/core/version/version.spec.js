'use strict';

describe('adpExercise.version module', function() {
  beforeEach(module('adpExercise.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
