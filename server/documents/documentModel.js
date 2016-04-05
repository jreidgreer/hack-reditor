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
    type: Schema.Types.ObjectId, ref: 'users'
  }
});

module.exports = mongoose.model('documents', DocumentSchema);