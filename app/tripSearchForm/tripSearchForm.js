'use strict';

function TripSearchFormController($scope) {

}

angular.module('angulago').component('tripSearchForm', {
    templateUrl: 'tripSearchForm/tripSearchForm.html',
    controller: TripSearchFormController,
    bindings: {
        textContent: '<',
    }
});