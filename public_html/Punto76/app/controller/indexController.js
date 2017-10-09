(function () {
    'use strict';

    angular
            .module('MyApp')
            .controller('indexController', indexController);

    indexController.$inject = ['$scope', '$state'];

    function indexController($scope, $state) {
        $scope.reset = function () {
            $scope.ocult = true;
            delete $scope.contac;
        };
        $scope.ocult = true;
        $scope.contac = {};
        $scope.datos = function () {
            $scope.ocult = !true;
            $scope.respuesta = ("Hello " + $scope.contac.yourName + " , your age is:  " + $scope.contac.year + " , " + " year old");
        };


    }
})();
