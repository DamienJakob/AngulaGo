'use strict';

function SelectCurrencyController($scope) {

    this.$onInit = () => {
        $scope.currency = this.textContent.defaultCurrency;
    };

    // watcher
    // when textContent is updated, set the currency to the default currency of textContent
    $scope.$watch('$ctrl.textContent', function (newTextContent, oldTextContent) {
        if (newTextContent != oldTextContent) {
            $scope.currency = newTextContent.defaultCurrency;
        }
    });
}

angular.module('angulago').component('selectCurrency', {
    templateUrl: 'components/selectCurrency/selectCurrency.html',
    controller: SelectCurrencyController,
    bindings: {
        textContent: '<',
    }
});