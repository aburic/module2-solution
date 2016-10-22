(function(){
  'use strict'

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
  function ToBuyController($scope,ShoppingListCheckOffService) {
    var vm = this;
    vm.toBuyItems = ShoppingListCheckOffService.getBuyItems();
    vm.moveItemsToBoughtList = function(index){
      ShoppingListCheckOffService.moveItemToAlreadyBoughtList(index);
    };
  }
  AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];
    function AlreadyBoughtController($scope,ShoppingListCheckOffService) {
      var vm = this;
      vm.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }
  function ShoppingListCheckOffService() {
    var service = this;
    var already_bought_items = [];
    var buy_items = [{"name":"cookie","quantity":10},
                      {"name":"ice-cream","quantity":10},
                      {"name":"chocolate","quantity":4},
                      {"name":"juice","quantity":7},
                      {"name":"orange","quantity":10}
                    ];
    service.moveItemToAlreadyBoughtList = function(index){
      already_bought_items.push(buy_items[index]);
      buy_items.splice(index,1);
    };
    service.getBuyItems = function(){
      return buy_items;
    };
    service.getAlreadyBoughtItems = function(){
      return already_bought_items;
    };
  }
})();
