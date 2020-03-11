languageApplication.controller('languageCtrl', function ($scope, $http) {
    $scope.language = "en";
    $scope.loadLanguage = function () {
        $http.get('language/' + $scope.language + '.json')
            .then(function (response) {
                console.log(response);
                $scope.textContent = response.data;
            });
    };
});