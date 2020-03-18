'use strict';

function MenuController($scope, $element, $attrs) {
    $scope.content = "menu";
}

angular.module('angulago').component('menu', {
    templateUrl: 'menu/menu.html',
    controller: MenuController,
});