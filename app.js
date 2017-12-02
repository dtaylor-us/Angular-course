// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

    $scope.alertClick = function() {
        alert('Clicked');
    };

    $scope.name = 'Iron-man';
}]);