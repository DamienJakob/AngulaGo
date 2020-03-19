'use strict';

function MenuController($scope, $element, $attrs) {
    this.content = "content of $ctrl";

    $scope.selectLanguage = function () {
        $scope.$emit('loadLanguage');
    };

    $scope.displayLanguage = function (language = $scope.$parent.language) {
        return language.id.toUpperCase() + "-" + language.name;
    };
}

angular.module('angulago').component('menu', {
    templateUrl: 'menu/menu.html',
    controller: MenuController,
    bindings: {
        currency: '=',
        textContent: '<',
    }
});