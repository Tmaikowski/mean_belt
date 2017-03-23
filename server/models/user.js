var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(val) {
        return /\S+@\S+\.\S+/.test(val);
      },
      message: "Email failed validation. Please try again"
    }
  },

  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 45
  },

  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 45
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 32,
    validate: {
      validator: function(val) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(val);
      },
      message: "Password failed validation, you must have at least 1 number, uppercase and special character"
    }
  }

}, {timestamps: true});

UserSchema.virtual('name.full').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

UserSchema.pre('save', function(done) {
  if (this.password.length != 60) {
    console.log("Hashed Password.");
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  done();
})

var User = mongoose.model('User', UserSchema);
