(function () {
    'use strict';

    angular
            .module('App')
            .controller('indexController', indexController);

    indexController.$inject = ['$scope', '$state' ];

    function indexController($scope, $state ) {
       $scope.people = [];
       $scope.add = function (){
           $scope.people.unshift($scope.contac);
           delete $scope.contac;
           $scope.person = false;  
       };
    }
})();
  