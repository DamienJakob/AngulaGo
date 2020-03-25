'use strict';

function HomepageController($scope, $http) {
    // functions
    $scope.loadLanguage = function (language = $scope.language) {
        $http.get('data/languages/homepage/homepage.' + language.id + '.json')
            .then(function (response) {
                $scope.textContent = response.data;
            });
    };

    // init
    $scope.loadLanguage();

    // event listeners
    $scope.$on('setLanguage', function (event, language) {
        $scope.loadLanguage(language);
    });
}

angular.module('angulago.homepage', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/homepage', {
            controller: HomepageController,
            templateUrl: 'modules/homepage/homepage.html',
        });
    }]);

