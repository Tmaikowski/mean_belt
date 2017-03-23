app.factory('PollFactory', function($http) {
  var factory = {};

  factory.index = function(callback) {
    $http.get('/polls').then(callback);
  };

  factory.create = function(newPost, callback) {
    $http.post('/polls', newPost).then(callback);
  };

  factory.show = function(pollId, callback) {
    $http.get(`/polls/${pollId}`).then(callback);
  };

  factory.vote = function(option, pollId, callback) {
    var voteObj = {option: option};
    $http.put(`/polls/${pollId}`, voteObj).then(callback);
  };

  factory.destroy = function(pollId, callback) {
    $http.post(`/polls/${pollId}/destroy`).then(callback);
  }

  return factory;
});
