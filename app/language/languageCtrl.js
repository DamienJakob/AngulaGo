languageApplication.controller('languageCtrl', function ($scope, $http) {
    $scope.language = {
        "id": "fr",
        "name": "Français"
    };
    $scope.loadLanguage = function () {
        $http.get('language/' + $scope.language.id + '.json')
            .then(function (response) {
                $scope.textContent = response.data;
            });
    };
    $scope.displayLanguage = function(language) {
        return language.id.toUpperCase() + "-" + language.name
    };

    $http.get('language/languages.json')
        .then(function (response) {
            $scope.languages = response.data;
        });
    $scope.loadLanguage();
});