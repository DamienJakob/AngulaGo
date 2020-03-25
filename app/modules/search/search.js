'use strict';

angular.module('angulago.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'modules/search/search.html',
  });
}]);