'use strict';

function MenuController($scope, $element, $attrs) {
    $scope.content = "menu";

    $scope.selectLanguage = function () {
        $scope.$emit('loadLanguage');
    };

    $scope.displayLanguage = function (language = $scope.language) {
        return language.id.toUpperCase() + "-" + language.name;
    };
}

angular.module('angulago').component('menu', {
    templateUrl: 'menu/menu.html',
    controller: MenuController,
});