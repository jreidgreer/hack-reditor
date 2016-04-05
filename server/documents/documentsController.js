var mongoose = require('mongoose');
var Document = require('./documentModel.js');
ObjectId = mongoose.Schema.ObjectId;

module.exports = {
  documentsByUser: function (req, res, next) {
    var user = req.body.user;

    Document.find({'author': user}, function(err, documents) {
      if ( err ) {
        console.error('An error occured. ', err);
      } else {
        res.send(documents);
        next();
      }
    });
  },

  getDocument: function (req, res, next) {
    var id = req.body.id;

    Document.findById(id).populate('author', 'name').exec(function(err, foundDoc) {
      if ( err ) {
        console.error('An error occured. ', err);
        next();
      } else {
        res.send(foundDoc);
      }
    });
  },

  saveDocument: function (req, res, next) {
    Document.create({
      title: req.body.title,
      desc: req.body.desc,
      text: req.body.text,
      author: req.body.author
    }, function(err, createResponse) {
        if( err ) {
          console.log('An error occured during creation: ', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
  },
  deleteDocument: function (req, res, next) {
    Document.create({
      title: req.body.title,
      desc: req.body.desc,
      text: req.body.text,
      author: req.body.author
    }, function(err, createResponse) {
        if( err ) {
          console.log('An error occured during creation: ', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
  },
  updateDocument: function(req, res, next) {

    Document.findById(req.body.id, function(err, foundDoc) {
      if( !foundDoc ) {
        next(console.error('Document Does Not Exist', err));
      } else {
        foundDoc.title = req.body.title;
        foundDoc.desc = req.body.desc;
        foundDoc.text = req.body.text;
        foundDoc.author = req.body.author;

        foundDoc.save(function(err) {
          if (err) {
            next(err);
          } else {
            res.sendStatus(200);
            next();
          }
        })
      }
    });
  },
};