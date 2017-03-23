var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var PollSchema = new mongoose.Schema({

  author: {
    type: String,
    required: true
  },

  question: {
    type: String,
    required: true,
    minlength: 8
  },

  optionOne: {
    type: String,
    required: true,
    minlength: 3
  },

  optionTwo: {
    type: String,
    required: true,
    minlength: 3
  },

  optionThree: {
    type: String,
    required: true,
    minlength: 3
  },

  optionFour: {
    type: String,
    required: true,
    minlength: 3
  },

  optionOneCount: {
    type: Number,
    default: 0
  },

  optionTwoCount: {
    type: Number,
    default: 0
  },

  optionThreeCount: {
    type: Number,
    default: 0
  },

  optionFourCount: {
    type: Number,
    default: 0
  }

}, {timestamps: true});

var Poll = mongoose.model('Poll', PollSchema);
