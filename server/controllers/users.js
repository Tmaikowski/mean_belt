var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = mongoose.model('User');

module.exports = {
  create: function(req, res) {
    var user = new User({
      username: req.body.username,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password
    });
    console.log("USER:", user);
    user.save(function(err) {
      if (err) {
        console.log("!!!ERROR!!!!")
        return res.json(err);
      } else {
        console.log("!!!!SUCCESS!!!!!");
        return res.json(user);
      }
    });
  },

  login: function(req, res) {
    User.findOne({email: req.body.email}).exec(function(err, user) {
      if (!user) {
        return res.json({"errors": {
          "message": "Email does not exist"
        }});
      } else {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          return res.json(user);
        } else {
          return res.json({"errors": {
            "message": "Invalid credentials"
          }});
        }
      }
    });
  }

}
