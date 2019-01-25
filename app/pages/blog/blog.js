'use strict';

angular.module('myApp.blog', ['ngRoute', 'myServices'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/blog', {
      templateUrl: 'pages/blog/blog.html',
      controller: 'blogCtrl',
      resolve: {
        resolvedData: function (blogServices) {
          return blogServices.getAllPost();
        }
      }
    });
  }])

  .controller('blogCtrl', ['$scope', 'resolvedData', 'compareServices', function ($scope, resolvedData, compareServices) {

    const datasource = resolvedData.data.blog.map(function(val, i){
      val.id = i;
      return val;
    });
    const numberOfPostPerPages = 5;
    var allData = [];


    var loadInitialData = function (allData) {
      if (!!allData && allData.length > 0) {
        allData = JSON.parse(JSON.stringify(allData.sort(compareServices.compareDate)));
        $scope.data = allData.slice(0, numberOfPostPerPages);
      }
    }

    var restartData = function () {
      allData = datasource.sort(compareServices.compareDate);
      loadInitialData(allData);
    }

    restartData();//get all the data from the api when controller is loaded

    $scope.loadMore = function () {
      if (allData && $scope.data) {
        var last = $scope.data.length;
        var temp = allData.slice(last, last + numberOfPostPerPages);
        $scope.data = $scope.data.concat(temp);
      }
    };


    $scope.getLanguage = function () {
      if (!!$scope.languageSelected) {
        allData = datasource.sort(compareServices.compareDate);

        //usually this filter should be applied in the backend web api
        allData = allData.filter(function (x) {
          return x.lang == $scope.languageSelected;
        });
        
        loadInitialData(allData);
      } else {
        restartData();
      }
    }

    $scope.parseCategoriesArray = function (categories) {
      return categories.join(', ');
    }

    $scope.getDate = function (date) {
      return new Date(date).getTime();
    }

  }]);