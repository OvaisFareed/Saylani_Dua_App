var abc = angular.module("newMod",["ngMaterial","firebase"]);

abc.controller("awaenCtrl",function($scope,$firebaseArray){
    var ref1 = new Firebase("https://blazing-torch-900.firebaseio.com/");
    var messages = $firebaseArray(ref1);
    $scope.abc = function(){
        messages.$add($scope.task);
    };
});