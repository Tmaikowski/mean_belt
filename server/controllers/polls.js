var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Poll = mongoose.model('Poll');

module.exports = {

  index: function(req, res) {
    Poll.find({}).exec(function(err, polls) {
      if (err) {
        return res.json(err);
      }
      return res.json(polls);
    });
  },

  create: function(req, res) {
    var poll = new Poll({
      author: req.body.author,
      question: req.body.question,
      optionOne: req.body.optionOne,
      optionTwo: req.body.optionTwo,
      optionThree: req.body.optionThree,
      optionFour: req.body.optionFour
    });
    poll.save(function(err) {
      if (err) {
        console.log("ERROR!!!!!!");
        return res.json(err);
      } else {
        console.log("SUCCESS!!!!!!!")
        return res.json(poll);
      }
    });
  },

  show: function(req, res) {
    Poll.findById(req.params.id).exec(function(err, poll) {
      if (err) {
        return res.json(err);
      }
      return res.json(poll);
    });
  },

  update: function(req, res) {
    Poll.findById(req.params.id).exec(function(err, poll) {
      if (err) {
        return res.json(err);
      };

      if (req.body.option == 'one') {
        poll.optionOneCount++;
      } else if (req.body.option == 'two') {
        poll.optionTwoCount++;
      } else if (req.body.option == 'three') {
        poll.optionThreeCount++;
      } else if (req.body.option == 'four') {
        poll.optionFourCount++;
      } else {
        return res.json({error: 'Invalid option number'});
      };

      poll.save(function(err) {
        if (err) {
          return res.json(err);
        }
        return res.json(poll);
      });
    });
  },

  destroy: function(req, res) {
    console.log(req.params.id);
    Poll.findByIdAndRemove(req.params.id).exec(function(err, poll) {
      if (err) {
        return res.json(err);
      }
      return res.json(poll);
    })
  }

}
