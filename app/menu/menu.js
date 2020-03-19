'use strict';

function MenuController($scope, $http) {
    // data
    // get the default language from parent
    $scope.language = $scope.$parent.language;

    $scope.selectLanguage = function () {
        $scope.$emit('loadLanguage', $scope.language);
    };
    $scope.displayLanguage = function (language) {
        return language.id.toUpperCase() + "-" + language.name;
    };

    // init
    $http.get('language/languages.json')
        .then(function (response) {
            $scope.languages = response.data;
        });
}

angular.module('angulago').component('menu', {
    templateUrl: 'menu/menu.html',
    controller: MenuController,
    bindings: {
        currency: '=',
        textContent: '<',
    }
});