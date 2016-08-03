var dresslineApp = angular.module('dresslineApp', ['ngRoute','ui.bootstrap'])
  .config(function($routeProvider){
      $routeProvider.
      when('/',
      {
          templateUrl:'src/js/home/home.html',
          controller:'homeController'
      })
      .when('/register',
      {
          templateUrl:'src/js/register/register.html',
          controller:'registerController'
      })
      .when('/categories',
      {
          templateUrl:'src/js/categories/category.html',
          controller:'categoryController'
      })
      .when('/cart',
      {
          templateUrl:'src/js/shopping_cart/shopping_cart.html',
          controller:'shoppingCartController'
      })
      .when('/product',
      {
          templateUrl:'src/js/product/product.html',
          controller:'productController'
      })
      .when('/wishList',
      {
          templateUrl:'src/js/wishlist/wishlist.html',
          controller:'wishlistController'
      })
      .when('/userProfile',
      {
          templateUrl:'src/js/customer_account/account.html',
          controller:'accountController'
      })
      .when('/customerOrders',
      {
          templateUrl:'src/js/customer_orders/orders.html',
          controller:'ordersController'
      })
      .when('/customerOrder',
      {
          templateUrl:'src/js/order_details/order_detail.html',
          controller:'orderDetailController'
      })
      .when('/checkout',
      {
          templateUrl:'src/js/checkout/checkout.html',
          controller:'checkoutController'
      })
      .when('/adminCategories',
      {
          templateUrl:'src/js/admin_categories/admin_category.html',
          controller:'adminCategoryController'
      })
      .when('/adminManagers',
      {
          templateUrl:'src/js/admin_managers/admin_manager.html',
          controller:'adminManagerController'
      })
      .when('/adminAddManager',
      {
          templateUrl:'src/js/admin_add_manager/admin_add_manager.html',
          controller:'adminAddManagerController'
      })
      .when('/adminCategory',
      {
          templateUrl:'src/js/admin_category_administration/category_administration.html',
          controller:'adminCategoryManagementController'
      })
      .when('/managerOrders',
      {
          templateUrl:'src/js/manager_orders/manager_order.html',
          controller:'managerOrderController'
      })
      .when('/managerProducts',
      {
          templateUrl:'src/js/manager_products/manager_product.html',
          controller:'managerProductController'
      })
      .when('/orderDetail',
      {
          templateUrl:'src/js/order_details/order_detail.html',
          controller:'orderDetailController'
      })
      .when('/managerProduct',
      {
          templateUrl:'src/js/manager_product_management/product_managment.html',
          controller:'managerProductManagementController'
      })
      .when('/aboutus',
      {
          templateUrl:'src/js/about_us/aboutUs.html',
          controller:'aboutUsController'
      })
      .otherwise({redirectTo: '/'})
  });

  dresslineApp.controller('mainCtrl', function($scope, $rootScope){
    $rootScope.userType = "unregisteredUser";

    $scope.logOut = function() {
      $rootScope.userType = "unregisteredUser";
    };

  });
  dresslineApp.controller('DatepickerPopupDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});
