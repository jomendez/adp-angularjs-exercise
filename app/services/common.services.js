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

  this.loadInitialData = function (allData, compare, numberOfPostPerPages = 5) {
    if (!!allData && allData.length > 0) {
      //this syntax is used to copy the sorted array by value instead of by reference, 
      //we could use [... ] the spread operator to achieve the same, but it is not supported by internet Explorer 
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      allData = JSON.parse(JSON.stringify(allData.sort(compare)));
      return allData.slice(0, numberOfPostPerPages);
    }
  }
}]);


app.factory('dataUtils', ['compareServices', function (compareServices) {

  var loadMore = function (allData, data, numberOfPostPerPages) {
    if (allData && data) {
      var last = data.length;
      var temp = allData.slice(last, last + numberOfPostPerPages);
      return data.concat(temp);
    }
  };

  return {
    loadMore: loadMore
  }
}]);

app.factory('contactUtils', [function () {

  var options = [
    { value: 'HealthcareMarketplace', text: 'Healthcare Marketplace' },
    { value: 'TechnicalSupport', text: 'Technical Support' },
    { value: 'WebsiteFeedback', text: 'Website Feedback' },
  ];

  var submitForm = function (isValid) {
    // check to make sure the form is completely valid
    if (isValid) {
      $('#alert #alert-body').text('This form is valid');
      $('#alert').modal('show');
    } else {
      $('#alert #alert-body').text('This form is invalid');
      $('#alert').modal('show');
    }

  };

  return {
    submitForm: submitForm,
    options: options
  }
}]);