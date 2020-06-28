const mongoose = require('mongoose');

const twitScheme = mongoose.Schema({
  body: {
      type: String,
  },
  user: {
      type: mongoose.Types.ObjectId,
      ref: "User"
  }
});

module.exports = mongoose.model('Twit', twitScheme);
