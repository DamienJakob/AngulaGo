'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'myApp.homepage',
    'myApp.search',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/homepage'});
}]).controller('appController', function ($scope, $http) {
    $scope.language = {
        "id": "fr",
        "name": "Français"
    };
    $scope.currency = "EUR";

    $scope.loadLanguage = function () {
        $http.get('language/' + $scope.language.id + '.json')
            .then(function (response) {
                $scope.textContent = response.data;
                $scope.currency = $scope.textContent.defaultCurrency;
            });
    };
    $scope.displayShortLanguage = function (language = $scope.language) {
        return language.id.toUpperCase();
    };
    $scope.displayLanguage = function (language = $scope.language) {
        return $scope.displayShortLanguage(language) + "-" + language.name;
    };

    $http.get('language/languages.json')
        .then(function (response) {
            $scope.languages = response.data;
        });
    $scope.loadLanguage();
});
