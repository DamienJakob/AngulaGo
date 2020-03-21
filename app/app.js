'use strict';

function AngulagoController($scope, $http) {
    // data
    $scope.language = {
        "id": "fr",
        "name": "Français"
    };

    // functions
    $scope.loadLanguage = function (language = $scope.language) {
        $http.get('data/languages/angulago/angulago.' + language.id + '.json')
            .then(function (response) {
                $scope.language = language;
                $scope.textContent = response.data;
            });
    };
    $scope.displayLanguage = function (language = $scope.language) {
        return language.id.toUpperCase();
    };

    // init
    $scope.loadLanguage();

    // event listeners
    $scope.$on('requestLanguage', function (event, language) {
        $scope.loadLanguage(language);
        $scope.$broadcast('setLanguage', language);
    });
}

// Declare app level module which depends on views, and core components
angular.module('angulago', [
    'ngRoute',
    'angulago.homepage',
    'angulago.search',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/homepage'});
}]).controller('angulagoController', AngulagoController);
