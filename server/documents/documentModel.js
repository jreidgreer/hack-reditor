var mongoose = require('mongoose');

var DocumentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  desc: {
    type: String
  },

  text: {
    type: String
  },

  author:{
    type: mongoose.Schema.Types.ObjectId, ref: 'users'
  }
});

module.exports = mongoose.model('documents', DocumentSchema);