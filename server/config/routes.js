var users = require('../controllers/users.js');
var polls = require('../controllers/polls.js');

module.exports = function(app) {

  //User Routes
  app.post('/login', function(req, res) {
    users.login(req, res);
  });

  app.post('/register', function(req, res) {
    users.create(req, res);
  });

  //Poll Routes
  app.get('/polls', function(req, res) {
    polls.index(req, res);
  });

  app.post('/polls', function(req, res) {
    polls.create(req, res);
  });

  app.get('/polls/:id', function(req, res) {
    polls.show(req, res);
  });

  app.post('/polls/:id/destroy', function(req, res) {
    polls.destroy(req, res);
  });

  app.put('/polls/:id', function(req, res) {
    polls.update(req, res);
  });

};
