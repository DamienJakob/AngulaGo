let exampleApplication = angular.module('example', []);

languageApplication.directive("normalDirective", function () {
    return {
        template: "<p>I'm a directive</p>",
    }
});

languageApplication.directive("classDirective", function () {
    return {
        restrict: "C",
        template: "<p>I'm a class directive</p>",
    }
});

languageApplication.directive("commentDirective", function () {
    return {
        restrict: "M",
        replace: "true",
        template: "<p>I'm a comment directive</p>",
    }
});

/*
RESTRICT
default : EA
E for Element name
A for Attribute
C for Class
M for Comment
*/