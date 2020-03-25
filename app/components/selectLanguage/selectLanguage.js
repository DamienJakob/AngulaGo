'use strict';

function SelectLanguageController($scope, $http) {
    // functions
    $scope.selectLanguage = function (language = $scope.language) {
        $scope.$emit('requestLanguage', language);
    };
    $scope.displayLanguage = function (language) {
        return language.id.toUpperCase() + "-" + language.name;
    };

    // init
    this.$onInit = () => {
        // get the default languages from parent
        // Rem 1 : we have to wait until the bindings are done
        // Rem 2 : by copying the item, we don't have to worry about the parent updating later the variable
        $scope.language = Object.assign({}, this.defaultLanguage);

        $http.get('data/languages.json')
            .then(function (response) {
                $scope.languages = response.data;
            });
    };
}

angular.module('angulago').component('selectLanguage', {
    templateUrl: 'components/selectLanguage/selectLanguage.html',
    controller: SelectLanguageController,
    bindings: {
        defaultLanguage: '<',
    }
});