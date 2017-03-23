app.factory('UserFactory', function($http) {
  var factory = {};

  factory.login = function(userLogin, callback) {
    $http.post('/login', userLogin).then(function(user, err) {
      if (!user.errors) {
        factory.loggedInUser = user.data.email;
        factory.loggedInUserId = user.data._id;
      }
      callback(user);
    });
  }

  factory.register = function(newUser, callback) {
    $http.post('/register', newUser).then(callback)
  };

  return factory;
})
