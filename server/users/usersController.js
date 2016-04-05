var User = require('./usersModel');
var jwt = require('jwt-simple');

module.exports = {
  login: function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({email: email}, function(err, user) {
      if( !user ) {
        next(console.error('User Does Not Exist', err));
      } else {
        user.comparePasswords(password, function(err, compareResult) {
          if ( err ) {
            console.error('Error comparing passwords: ', err);
          }
          if ( compareResult ) {
            var token = jwt.encode(user, 'super secret stuff');
            res.json({token: token});
          } else {
            return next(console.log('Passwords do not match.'));
          }
        });
      }
    });
  },
  signup: function(req, res, next) {
    var email = req.body.email;
    var name = req.body.name;
    var password = req.body.password;

    User.findOne({email: email}, function(err, user) {
      if( user ) {
        next(console.error('User Already Exists', err));
      } else {
        User.create({
          email: email,
          name: name,
          password: password
        })
      }
    });
  },


};