app.controller('UsersController', function($location, $cookies, UserFactory) {
  var self = this;

  self.login = function(userLogin) {
    if (!userLogin.hasOwnProperty('password')) {
      self.loginErrors = {message: "Please enter a password"}
      return self.loginErrors;
    }
    UserFactory.login(userLogin, function(user) {
      if (user.data.errors) {
        self.loginErrors = user.data.errors;
      } else {
        $cookies.put('username', user.data.username);
        $cookies.put('userId', user.data._id);
        $location.url('/dashboard');
        console.log("LOGGED IN AS (Login):", $cookies.get("username"));
        console.log("LOGGED IN AS (Login):", $cookies.get("userId"));
      }
      angular.copy({}, userLogin);
    });
  };

  self.register = function(newUserObj) {
    self.errors = {};

    if (newUserObj.password !== newUserObj.passwordConfirm) {
      self.errors = {passwordError: "Passwords do not match"};
      return self.errors;
    }

    UserFactory.register(newUserObj, function(data) {
      if (data.data.errmsg) {
        return self.errors = {duplicate: "Username/Email already exists"}
      }
      if (data.data.errors) {
        self.errors = data.data.errors;
        return self.errors;
      }
      $cookies.put("userId", data.data._id);
      $cookies.put("username", data.data.username);
      $location.url('/dashboard');
      console.log("LOGGED IN AS (Register):", $cookies.get("username"));
      console.log("LOGGED IN AS (Register):", $cookies.get("userId"));
    })
  };

  self.logout = function() {
    $cookies.remove('userEmail');
    $cookies.remove('userId');
    $location.url('/login')
  };

})
