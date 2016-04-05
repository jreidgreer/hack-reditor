var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true
  },
  salt: String
});

UserSchema.methods.comparePasswords = function(inputPassword, callback) {
  var actualPassword = this.password
  bcrypt.compare(inputPassword, actualPassword, function(err, res) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

UserSchema.pre('save', function(next){
  var user = this;

  var password = this.password;
  bcrypt.genSalt(12, function(err, salt) {
    if(err) {
      return next(err);
    }
    bcrypt.hash(password, salt , null, function(err, hash) {
      if(err) {
        return next(err);
      }

      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

module.exports = mongoose.model('users', UserSchema);