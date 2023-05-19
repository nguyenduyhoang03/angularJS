// tao module
var app = angular.module("app",['ngMessages']);
// link module voi ctrl
app.controller("userCtrl",function($scope){
    $scope.users = [];

    $scope.saveUser = function(user){
        $scope.users.push(user);
        $scope.user = {}
        $scope.myForm.$setPristine();
        alert("ok con dê =))");
    }
})