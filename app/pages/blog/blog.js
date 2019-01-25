'use strict';

angular.module('adpExercise.blog', ['ngRoute', 'myServices'])

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

  .controller('blogCtrl', ['$scope', 'resolvedData', 'compareServices', 'dataUtils', function ($scope, resolvedData, compareServices, dataUtils) {

    //added id property to the data collection to be able to do track by on the ng-repeat (improve performance)
    //Note: change language doesn't work when sing track by $index 
    const datasource = resolvedData.data.blog.map(function (val, i) {
      val.id = i;
      return val;
    });
    const numberOfPostPerPages = 5;
    var allData = datasource.sort(compareServices.compareDate);
    $scope.data = compareServices.loadInitialData(allData, compareServices.compareDate);//get all the data from the api when controller is loaded

    $scope.loadMore = function () {
      $scope.data = dataUtils.loadMore(allData, $scope.data, numberOfPostPerPages);
    };


    $scope.getLanguage = function () {
      if (!!$scope.languageSelected) {
        allData = datasource.sort(compareServices.compareDate);

        allData = allData.filter(function (x) {
          return x.lang == $scope.languageSelected;
        });

        $scope.data = compareServices.loadInitialData(allData, compareServices.compareDate);
      } else {
        allData = datasource.sort(compareServices.compareDate);
        $scope.data = compareServices.loadInitialData(allData, compareServices.compareDate);//get all the data from the api when controller is loaded    
      }
    }

    $scope.parseCategoriesArray = function (categories) {
      return categories.join(', ');
    }

    $scope.getDate = function (date) {
      return new Date(date).getTime();
    }

  }]);