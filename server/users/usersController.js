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

        var token = jwt.encode(user, 'super secret stuff');
        res.json({token: token});
      }
    });
  },
  checkAuth: function (req, res, next) {
      var token = req.headers['x-access-token'];
      if (!token) {
        next(new Error('No token'));
      } else {
        var user = jwt.decode(token, 'secret');
        User.findOne({email: email}, function(err, foundUser) {
            if (foundUser) {
              res.send(200);
            } else {
              res.send(401);
            }
          })
      }
    }
};