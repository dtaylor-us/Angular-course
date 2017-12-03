// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', [
    '$scope',
    '$filter',
    '$http',
    function ($scope, $filter, $http) {

        $scope.alertClick = function () {
            alert('Clicked');
        };

        // XMLHttpRequest Example     var xmr = new XMLHttpRequest();
        // xmr.onreadystatechange = function() {         if (xmr.readyState == 4 &&
        // xmr.status == 200) {             $scope.rules = JSON.parse(xmr.responseText);
        //         }     };     xmr.open();     xmr.send(); $http service Example
        $http
            .get('/api')
            .success(function (result) {
                $scope.rules = result;
            })
            .error(function (data, status) {
                console.log(data);
            });

        $scope.newRule = '';
        $scope.addRule = function () {
            $http
                .post('/api', {newrule: $scope.newRule})
                .success(function (result) {
                    $scope.rules = result;
                    $scope.newRule = '';
                })
                .error(function (data, status) {
                    console.log(data);
                });
        };
    }
]);