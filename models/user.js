const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  following: [{
      type: mongoose.Types.ObjectId,
      ref: "User"
  }]
});

module.exports = mongoose.model('User', userScheme);
