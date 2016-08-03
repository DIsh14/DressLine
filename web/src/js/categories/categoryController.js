var dresslineApp = angular.module('dresslineApp');

dresslineApp.controller('categoryController', function($scope){

  $scope.products = [
    {"name" : "Some product1",
    "description" : "Some general description abot this amazing product",
    "price" : 1000,
    "img" : "src/img/women_main_1.jpg",
    "size" : "XL",
    "brand" : "Nike",
    "color" : "black",
    "category" : "categoryEXAMPLE",
    "quantity" : "4"
    },
    {"name" : "Some product2",
    "description" : "Some general description abot this amazing product",
    "price" : 100,
    "img" : "src/img/women_main_1.jpg",
    "size" : "L",
    "brand" : "Nike",
    "color" : "black",
    "category" : "categoryEXAMPLE",
    "quantity" : "4"
    },
    {"name" : "Some product3",
    "description" : "Some general description abot this amazing product",
    "price" : 1100,
    "img" : "src/img/women_main_1.jpg",
    "size" : "XL",
    "brand" : "Adidas",
    "color" : "green",
    "category" : "categoryEXAMPLE",
    "quantity" : "4"
    },
    {"name" : "Some product4",
    "description" : "Some general description abot this amazing product",
    "price" : 10000,
    "img" : "src/img/women_main_1.jpg",
    "size" : "S",
    "brand" : "Adidas",
    "color" : "Armani",
    "category" : "categoryEXAMPLE",
    "quantity" : "4"
    },
    {"name" : "Some product5",
    "description" : "Some general description abot this amazing product",
    "price" : 10,
    "img" : "src/img/women_main_1.jpg",
    "size" : "S",
    "brand" : "Nike",
    "color" : "Blue",
    "category" : "categoryEXAMPLE",
    "quantity" : "4"
    },
    {"name" : "Some product6",
    "description" : "Some general description abot this amazing product",
    "price" : 1000,
    "img" : "src/img/women_main_1.jpg",
    "size" : "L",
    "brand" : "Adidas",
    "color" : "black",
    "category" : "categoryEXAMPLE",
    "quantity" : "4"
    },
    {"name" : "Some product7",
    "description" : "Some general description abot this amazing product",
    "price" : 10,
    "img" : "src/img/women_main_1.jpg",
    "size" : "XL",
    "brand" : "Nike",
    "color" : "green",
    "category" : "categoryEXAMPLE",
    "quantity" : "4"
    },
    {"name" : "Some product8",
    "description" : "Some general description abot this amazing product",
    "price" : 1000,
    "img" : "src/img/women_main_1.jpg",
    "size" : "L",
    "brand" : "Puma",
    "color" : "blue",
    "category" : "categoryEXAMPLE",
    "quantity" : "4"
    },
    {"name" : "Some product9",
    "description" : "Some general description abot this amazing product",
    "price" : 10000,
    "img" : "src/img/women_main_1.jpg",
    "size" : "L",
    "brand" : "Adidas",
    "color" : "green",
    "category" : "categoryEXAMPLE",
    "quantity" : "4"
    }
  ];

  $scope.sizes = ["XS", "S", "M", "L", "XL"];
  $scope.selectedSizes = [];

  $scope.brands = ["Nike", "Adidas", "Armani", "Lacoste", "Mike", "Odidos", "Ermani", "Puma"];
  $scope.selectedBrands = [];

  $scope.colors = ["red", "green", "blue", "brown", "black", "purple"];
  $scope.selectedColors = [];

  $scope.finalPriceFromVal = 0;
  $scope.finalPriceToVal = 999999999999;

  $scope.sizeFilter = function (product) {
    var isEmpty = 0;
       for(var i=0; i< $scope.sizes.length; i++)
       {
         if(product.size == $scope.selectedSizes[i] || $scope.selectedSizes.length == 0)
         {
           return product;
         }
         else if($scope.selectedSizes[i]=="" || $scope.selectedSizes[i]==null){
           isEmpty++;
         }
       }
       if(isEmpty==$scope.sizes.length){
         return product;
       }
    };

    $scope.priceFilter = function(product){
       if(product.price >= $scope.finalPriceFromVal && (product.price <= $scope.finalPriceToVal || !$scope.finalPriceToVal.length)){
         return product;
       }
    };

    $scope.brandFilter = function(product){
      var isEmpty = 0;
         for(var i=0; i< $scope.brands.length; i++)
         {
           if(product.brand == $scope.selectedBrands[i] || $scope.selectedBrands.length == 0)
           {
             return product;
           }
           else if($scope.selectedBrands[i]=="" || $scope.selectedBrands[i]==null){
             isEmpty++;
           }
         }
         if(isEmpty==$scope.brands.length){
           return product;
         }
    };

    $scope.colorFilter = function(product){
      var isEmpty = 0;
         for(var i=0; i< $scope.colors.length; i++)
         {
           if(product.color == $scope.selectedColors[i] || $scope.selectedColors.length == 0)
           {
             return product;
           }
           else if($scope.selectedColors[i]=="" || $scope.selectedColors[i]==null){
             isEmpty++;
           }
         }
         if(isEmpty==$scope.colors.length){
           return product;
         }
    };



});
