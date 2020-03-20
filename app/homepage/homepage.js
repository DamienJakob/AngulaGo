'use strict';

angular.module('angulago.homepage', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/homepage', {
            templateUrl: 'homepage/homepage.html',
        });
    }]);

