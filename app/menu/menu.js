'use strict';

function MenuController($scope, $element, $attrs) {
    $scope.content = "menu";

    $scope.selectLanguage = function () {
        $scope.$emit('loadLanguage');
    };
}

angular.module('angulago').component('menu', {
    templateUrl: 'menu/menu.html',
    controller: MenuController,
});