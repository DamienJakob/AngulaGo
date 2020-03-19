'use strict';

// Module creation


angular.module('myApp').
component('greetUser', {
    templateUrl: 'component.html',
    controller: function GreetUserController() {
        this.user = 'world';
    }
});