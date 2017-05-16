app.controller("ItemNewCtrl", function($http, $q, $scope, FIREBASE_CONFIG) {
  console.log("inside ItemNewCtrl");

  $scope.addNewItem = () => {
    $scope.newTask.isCompleted = false;
    postNewItem($scope.newTask).then((response) => {
      $scope.newTask = {};
      //switch views
    }).catch((Error) => {
      console.log("Add error", error);
    });
  };

});
