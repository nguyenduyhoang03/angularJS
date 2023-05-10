// create angular app
var validationApp = angular.module('validationApp',[]);

// create angular controller
validationApp.controller('mainController',function($scope){
    $scope.submitForm = function(isValid){
        if(isValid){
            alert('form is Valid');
        }
    };
});