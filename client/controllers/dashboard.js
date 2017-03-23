app.controller("DashboardController", function($location, $cookies, PollFactory) {
  var self = this;
  self.polls = [];

  self.getPolls = function() {
    self.loggedInUser = $cookies.get('username');
    PollFactory.index(function(polls) {
      console.log(polls);
      self.polls = polls.data;
    });
  };

  self.destroyPoll = function(pollId) {
    PollFactory.destroy(pollId, function(poll) {
      self.getPolls();
    })
  }

})
