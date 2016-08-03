var dresslineApp = angular.module('dresslineApp');
dresslineApp.controller('registerController', function($scope, $rootScope, $location){

  $scope.saveUser = function(){
    $rootScope.userType = "customer";
    $location.path("#/");
      };

});
