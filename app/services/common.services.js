'use strict';

var app = angular.module('myServices', []);

app.service('blogServices', ['$http', function ($http) {
  this.getAllPost = function () {
    return $http.get('data/blog.json');
  }
}]);

app.service('glossaryServices', ['$http', function ($http) {
  this.getAllGlossary = function () {
    return $http.get('data/glossary.json');
  }

}]);

app.service('compareServices', [function ($) {
  this.compareTitle = function (a, b) {
    // Use toUpperCase() to ignore character casing
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();

    let comparison = 0;
    if (titleA > titleB) {
      comparison = 1;
    } else if (titleA < titleB) {
      comparison = -1;
    }
    return comparison;
  };

  this.compareDate = function (a, b) {
    // Use toUpperCase() to ignore character casing
    const dateA = a.date.toUpperCase();
    const dateB = b.date.toUpperCase();

    let comparison = 0;
    if (dateA < dateB) {
      comparison = 1;
    } else if (dateA > dateB) {
      comparison = -1;
    }
    return comparison;
  };

}]);
