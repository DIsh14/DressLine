/*! dressline-project - v1.0.0 - 2016-07-28*/
var dresslineApp = angular.module('dresslineApp', ["ngRoute"])
  .config(function($routeProvider){
      $routeProvider.when('/',
      {
          templateUrl:'home/home.html',
          controller:'homeController'
      });
      $routeProvider.when('/register',
      {
          templateUrl:'register/register.html',
          controller:'registerController'
      });
      $routeProvider.otherwise({redirectTo: '/'});
  });

dresslineApp.controller('mainController', function($scope){});

var dresslineApp = angular.module('dresslineApp');
dresslineApp.controller('homeController', function($scope){});

var dresslineApp = angular.module('dresslineApp');
dresslineApp.controller('registerController', function($scope){});

