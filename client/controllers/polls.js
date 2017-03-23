app.controller('PollsController', function($location, $cookies, $routeParams, PollFactory) {
  var self = this;

  self.create = function(newPost) {
    newPost.author = $cookies.get('username');
    PollFactory.create(newPost, function(poll) {
      if (poll.data.errors) {
        self.errors = poll.data.errors;
      } else {
        angular.copy({}, newPost);
        $location.url('/dashboard')
      }
    });
  };

  self.show = function() {
    PollFactory.show($routeParams.id, function(poll) {
      self.poll = poll.data;
    });
  };

  self.vote = function(option) {
    PollFactory.vote(option, $routeParams.id, function(poll) {
      self.show();
    });
  };

})
