'use strict';

function MenuController($scope, $http) {

}

angular.module('angulago').component('menu', {
    templateUrl: 'components/menu/menu.html',
    controller: MenuController,
    bindings: {
        textContent: '<',
        defaultLanguage: '<',
    }
});