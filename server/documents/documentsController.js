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

    Document.findById(id, function(err, foundDoc) {
      if ( err ) {
        console.error('An error occured. ', err);
        next();
      } else {
        res.send(foundDoc);
        next();
      }
    });
  },

  saveDocument: function (req, res, next) {
    Document.create({
      title: req.body.title,
      desc: req.body.desc,
      text: req.body.text,
      author: req.body.author
    });

    res.sendStatus(200);
  },
  updateDocument: function(req, res, next) {

    Document.findById(req.body.id, function(err, foundDoc) {
      if( !foundDoc ) {
        next(console.error('Document Does Not Exist', err));
      } else {
        foundDoc.title = req.body.title;
        foundDoc.desc = req.body.req.body.desc;
        foundDoc.text = req.body.text;
        foundDoc.author = req.body.author;

        foundDoc.save(function(err) {
          if (err) {
            next(err);
          } else {
            res.send(200);
            next();
          }
        })
      }
    });
  },
};