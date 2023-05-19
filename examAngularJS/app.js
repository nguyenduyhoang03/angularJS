
var app = angular.module('app', ['ngMessages']);

app.controller('registerCtrl', function($scope) {
  
  $scope.user = {};

  $scope.register = function() {
    
    console.log('User registered: ', $scope.user);
    alert('Đăng ký thành công');
  };
  
});

app.controller('loginCtrl',function($scope){
    $scope.login = function() {
        // Kiểm tra xem email và password có hợp lệ hay không
        if ($scope.user.email === 'example@gmail.com' && $scope.user.password === '123456') {
            // Nếu hợp lệ, chuyển đến trang chính
            window.location.href = 'main.html';
        } else {
            // Nếu không hợp lệ, hiển thị thông báo lỗi
            alert('Invalid email or password!');
        }
    };
})
