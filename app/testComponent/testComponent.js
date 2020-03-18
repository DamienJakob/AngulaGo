'use strict';

function TestComponentController($scope, $element, $attrs) {
    // let controller = this;
    $scope.content = "Test component";
    $scope.language = $scope.$parent.language.name;
}

angular.module('angulago').component('testComponent', {
    templateUrl: 'testComponent/testComponent.html',
    controller: TestComponentController,
});