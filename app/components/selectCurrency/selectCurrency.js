'use strict';

function SelectCurrencyController($scope, $http) {

    // methods
    $scope.loadCurrencies = function (language = this.defaultLanguage) {
        $http.get('data/currencies/currencies.' + language.id + '.json')
            .then(function (response) {
                $scope.currencies = response.data.currencies;
                $scope.currency = response.data.defaultCurrency;
            });
    };

    $scope.displayCurrency = function (currency) {
        return currency.id.toUpperCase() + " - " + currency.name;
    };

    // filter : main currencies
    $scope.isMainCurrency = function (currency) {
        return currency.mainCurrency;
    };


    // init
    this.$onInit = () => {
        $scope.loadCurrencies(this.defaultLanguage);
    };

    // event listeners
    $scope.$on('setLanguage', function (event, language) {
        $scope.loadCurrencies(language);
    });
}

angular.module('angulago').component('selectCurrency', {
    templateUrl: 'components/selectCurrency/selectCurrency.html',
    controller: SelectCurrencyController,
    bindings: {
        defaultLanguage: '<',
        textContent: '<',
    }
});