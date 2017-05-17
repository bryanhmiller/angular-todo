app.controller("ItemListCtrl", function($scope, ItemFactory) {
  console.log("inside ItemListCtrl");

	$scope.items = [];

  let getItems = () => {	
  	ItemFactory.getItemList().then((itemz) => {
      $scope.items = itemz;
      console.log("itemz", itemz);
    }).catch((error) => {
      console.log("get Error", error);
    });
  };

  getItems();

  $scope.deleteItem = (id) => {
  	ItemFactory.deletz(id).then(() => {
  		getItems();
  	}).catch((error) => {
  		console.log("deleteItem error", error);
  	});
  }; 

});
