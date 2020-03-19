'use strict';

function AngulagoController($scope, $http) {
    // data
    $scope.language = {
        "id": "fr",
        "name": "Français"
    };
    $scope.currency = "EUR";

    // functions
    $scope.loadLanguage = function () {
        $http.get('language/' + $scope.language.id + '.json')
            .then(function (response) {
                $scope.textContent = response.data;
                $scope.currency = $scope.textContent.defaultCurrency;
            });
    };

    $scope.displayLanguage = function (language = $scope.language) {
        return language.id.toUpperCase();
    };

    // init
    $http.get('language/languages.json')
        .then(function (response) {
            $scope.languages = response.data;
        });
    $scope.loadLanguage();

    // event listeners
    $scope.$on('loadLanguage', function () {
        $scope.loadLanguage();
    });
}

// Declare app level module which depends on views, and core components
angular.module('angulago', [
    'ngRoute',
    'myApp.homepage',
    'myApp.search',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/homepage'});
}]).controller('angulagoController', AngulagoController);
