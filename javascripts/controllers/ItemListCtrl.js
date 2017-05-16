app.controller("ItemListCtrl", function($scope, ItemFactory) {
  console.log("inside ItemListCtrl");

	$scope.items = [];


  ItemFactory.getItemList().then((itemz) => {
      $scope.items = itemz;
      console.log("itemz", itemz);
    }).catch((error) => {
      console.log("get Error", error);
    });
  

  ItemFactory.getItemList();

});
