exampleApplication.controller('languageCtrl', function ($scope, $http) {
    $scope.language = "english";
    $scope.person = {
        firstName: 'Bob',
        lastName: 'Lennon',
    };
    $scope.personFullName = function () {
        return $scope.person.firstName + " " + $scope.person.lastName.toUpperCase();
    };
    $scope.points = [1, 4, 6];
    $scope.clickCount = 0;
    $scope.countries = [
        {id: "CH", name: "Switzerland",},
        {id: "FR", name: "France",},
        {id: "DE", name: "Germany",},
        {id: "??", name: "",},
    ];
    $scope.orderCountriesBy = function (attribute) {
        $scope.orderCountries = attribute;
    };
    $scope.click = function () {
        $scope.clickCount++;
    };
});