
var app = angular.module('app', ['ngMessages']);

app.controller('registerCtrl', function($scope) {
  
  $scope.user = {};

  $scope.register = function() {
    
    console.log('User registered: ', $scope.user);
    alert('Đăng ký thành công');
  };
  
});
