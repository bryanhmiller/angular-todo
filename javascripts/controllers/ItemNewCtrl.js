app.controller("ItemNewCtrl", function($http, $q, $scope, FIREBASE_CONFIG) {
  console.log("inside ItemNewCtrl");

  let postNewItem = (newItem) => {
    return $q ((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify(newItem))
      .then((resultz) => {
        resolve(resultz);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  $scope.addNewItem = () => {
    $scope.newTask.isCompleted = false;
    postNewItem($scope.newTask).then((response) => {
      $scope.newTask = {};
      getItems();
    }).catch((Error) => {
      console.log("Add error", error);
    });
  };

});
