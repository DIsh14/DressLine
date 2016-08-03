angular.module('dresslineApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $rootScope, $location) {

  $scope.login = function (userName) {

    if(userName == "admin")
    {
      $rootScope.userType = "admin";
      $location.path("#/adminCategories");
    }
    else if(userName == "manager")
    {
      $rootScope.userType = "manager";
    }
    else{
      $rootScope.userType = "customer";
      $location.path("#/");
    }

    $uibModalInstance.dismiss('cancel');
  };

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  }
});
