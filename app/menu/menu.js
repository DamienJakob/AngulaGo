'use strict';

function MenuController($scope, $http) {
    // functions
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
    this.$onInit = () => {
        // get the default language from parent
        // we have to wait until the bindings are done
        $scope.language = this.defaultLanguage;
    };
}

angular.module('angulago').component('menu', {
    templateUrl: 'menu/menu.html',
    controller: MenuController,
    bindings: {
        currency: '=',
        textContent: '<',
        defaultLanguage: '<',
    }
});