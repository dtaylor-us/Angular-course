// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function($scope){
    $scope.name = 'main';
}]);

angularApp.controller('secondController', ['$scope', function($scope){
    $scope.name = 'second';
}]);