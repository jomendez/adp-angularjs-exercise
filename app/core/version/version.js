'use strict';

angular.module('adpExercise.version', [
  'adpExercise.version.interpolate-filter',
  'adpExercise.version.version-directive'
])

.value('version', '0.1');
