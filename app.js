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
        address: '321 Wildwood Rd.', 
        city: 'Willernie', 
        state: 'MN',
        zip: '55090'
    };

    $scope.formattedAddress = function(person) {
        return person.address + '\n' + person.city + '\n' + person.state + '\n' + person.zip;
    };

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

    $scope.num = $routeParams.num || 1;

}]);

// DIRECTIVE MODEL
//(TYPES: '@' : text, '=' : object, '&' : function)
myApp.directive("searchResult", function () {
    return {
        //restrict: 'AECM',
        templateUrl: './components/searchresult.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFn: "&"
        } //isolating the scope 
    };
});