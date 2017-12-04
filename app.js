var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        });
});

myApp.service('nameService', function () {
    var self = this;
    this.name = 'Derek';

    this.namelength = function () {
        return self.name.length;
    };
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {
    //SCOPE ISOLATED: THIS DATA NOT AVAILABLE IN DIRECTIVE 
    $scope.person = {
        name: 'Clarence Taylor',
        address: '321 Wildwood Rd., Willernie, MN, 55090'
    };

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

    $scope.num = $routeParams.num || 1;

}]);

// DIRECTIVE MODEL
myApp.directive("searchResult", function () {
    return {
        //restrict: 'AECM',
        templateUrl: './components/searchresult.html',
        replace: true,
        scope: {
            personName: "@",
            personAddress: "@"
        } //isolating the scope
    };
});