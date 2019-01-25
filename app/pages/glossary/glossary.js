'use strict';

angular.module('adpExercise.glossary', ['ngRoute'])

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

  .controller('glossaryCtrl', ['$scope', 'resolvedData', '$sce', 'compareServices', '$filter', 'dataUtils',
    function ($scope, resolvedData, $sce, compareServices, $filter, dataUtils) {

      //added id property to the data collection to be able to do track by on the ng-repeat (improve performance)
      //Note: change language doesn't work when sing track by $index 
      const datasource = resolvedData.data.glossary.map(function (val, i) {
        val.id = i;
        return val;
      });
      const numberOfPostPerPages = 5;
      var allData = datasource.sort(compareServices.compareTitle);
      $scope.data = compareServices.loadInitialData(allData, compareServices.compareTitle);

      $scope.loadMore = function () {
        $scope.data = dataUtils.loadMore(allData, $scope.data, numberOfPostPerPages);
      };


      $scope.getLanguage = function () {
        //restart the search input when language change
        $scope.search = '';
        if (!!$scope.languageSelected) {
          allData = datasource.sort(compareServices.compareTitle);

          allData = allData.filter(function (x) {
            return x.lang == $scope.languageSelected;
          });
          $scope.data = compareServices.loadInitialData(allData, compareServices.compareTitle);
        } else {

          allData = datasource.sort(compareServices.compareTitle);
          $scope.data = compareServices.loadInitialData(allData, compareServices.compareTitle);
        }
      }

      $scope.doSearch = function () {
        //restart the language dropdown when searching
        $scope.languageSelected = '';

        //restar the data in allData var
        allData = datasource.sort(compareServices.compareTitle);
        $scope.data = compareServices.loadInitialData(allData, compareServices.compareTitle);
        if (!$scope.search) {
          return;
        }

        allData = [...$filter('filter')(allData, $scope.search)];//copy by value
        $scope.data = compareServices.loadInitialData(allData, compareServices.compareTitle);
      }

      $scope.printHtml = function (html) {
        return $sce.trustAsHtml(html);
      }

    }]);