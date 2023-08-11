var registerApp = angular.module('registerApp', []);

registerApp.controller('registerCtrl', function($scope) {

$scope.passwordsMatch = true; // Initialize variable to store password comparison results

$scope.checkPasswordMatch = function() {
  $scope.passwordsMatch = $scope.regForm.password.$viewValue === $scope.regForm.confirmPassword.$viewValue;
};

// The function stores registration information to local storage
$scope.saveUserInfoToLocalStorage = function(username, email, password) {
  var users = JSON.parse(localStorage.getItem("users"));
  users.push({ username: username, email: email, password: password });
  localStorage.setItem("users", JSON.stringify(users));
};

//checks if the username already exists or not
$scope.checkIfUsernameExists = function(username) {
  var users = JSON.parse(localStorage.getItem("users"));
  var usernameExists = false;

  users.forEach(function(user) {
    if (user.username === username) {
      usernameExists = true;
      return; // stop loop if username already exist
    }
  });

  return usernameExists;
};



// when user click register
$scope.register = function() {
  // check username is exist or not
  if ($scope.checkIfUsernameExists($scope.username)) {
    // Username already exists, so registration information cannot be stored in local storage
    alert('username already exist !');
  } else {
    //Username does not exist yet, so registration information can be stored in local storage
    $scope.saveUserInfoToLocalStorage($scope.username, $scope.email, $scope.password);
    alert('Register Success !');
    regForm.reset()
  }
};

});




// login form
const login_Form = document.getElementById('login-form');
const user_Name = document.getElementById('user-name');
const user_Password = document.getElementById('user-password');

// Kiểm tra tài khoản admin
function checkAdmin(username, password) {
	return username === 'admin' && password === '123456';
  }
// check account
function loginUser(username, password) {
	const storedUsers = JSON.parse(localStorage.getItem('users'));
  
	// if (storedUsers) {
	//   const foundUser = storedUsers.find(user => user.username === username && user.password === password);
	//   if (foundUser) {
	// 	showSuccess(user_Password, 'Login Success ! Go to home page in 1 seconds !');
	// 	setTimeout(function(){
	// 		location.href = '/T2302M_G3/index.html';
	// 	},1000);
	//   } else {
	// 	showError(user_Password, 'User Name or Password is incorrect !');
	//   }
	// }
	if (checkAdmin(username, password)) {
		alert( 'Login Success as Admin! Redirecting to admin page in 1 second!')
		setTimeout(function(){
		  location.href = '/T2302M_G3/admin/admin.html';
		}, 1000);
	  } else {
		showSuccess(user_Password, 'Login Success! Redirecting to home page in 1 second!');
		setTimeout(function(){
		  location.href = '/T2302M_G3/index.html';
		}, 1000);
	  }
  }
  
// Event listeners
login_Form.addEventListener('submit',function(e){
	e.preventDefault();

	loginUser(user_Name.value,user_Password.value);
})



// switch between registration and login
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

registerLink.addEventListener('click', function (e) {
  e.preventDefault();
  registerForm.style.display = 'block';
  loginForm.style.display = 'none';
});

loginLink.addEventListener('click', function (e) {
  e.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});
