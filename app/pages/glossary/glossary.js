'use strict';

angular.module('myApp.glossary', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/glossary', {
      templateUrl: 'pages/glossary/glossary.html',
      controller: 'glossaryCtrl',
      resolve: {
        resolvedData: function (glossaryServices) {
          return glossaryServices.getAllGlossary();
        }
      }
    });
  }])

  .controller('glossaryCtrl', ['$scope', 'resolvedData', '$sce', 'compareServices', '$filter',
    function ($scope, resolvedData, $sce, compareServices, $filter) {

      //added id property to the data collection to be able to do track by on the ng-repeat (improve performance)
      //Note: change language doesn't work when sing track by $index 
      const datasource = resolvedData.data.glossary.map(function (val, i) {
        val.id = i;
        return val;
      });
      const numberOfPostPerPages = 5;
      var allData = [];

      $scope.printHtml = function (html) {
        return $sce.trustAsHtml(html);
      }

      var loadInitialData = function (allData) {
        if (!!allData && allData.length > 0) {
          //this syntax is used to copy the sorted array by value instead of by reference, 
          //we could use [... ] the spread operator to achieve the same, but it is not supported by internet Explorer 
          //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
          allData = JSON.parse(JSON.stringify(allData.sort(compareServices.compareTitle)));

          $scope.data = allData.slice(0, numberOfPostPerPages);//slice also copy by value
        }
      }

      var restartData = function () {
        allData = datasource.sort(compareServices.compareTitle);
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
        //restart the search input when language change
        $scope.search = '';
        if (!!$scope.languageSelected) {
          allData = datasource.sort(compareServices.compareTitle);
          
          //usually this filter should be applied in the backend web api
          allData = allData.filter(function (x) {
            return x.lang == $scope.languageSelected;
          });
          loadInitialData(allData);
        } else {
          restartData();
        }
      }

      $scope.doSearch = function () {
        //restart the language dropdown when searching
        $scope.languageSelected = '';

        //restar the data in allData var
        restartData();
        if (!$scope.search) {
          return;
        }

        allData = [...$filter('filter')(allData, $scope.search)];
        loadInitialData(allData);
      }

    }]);