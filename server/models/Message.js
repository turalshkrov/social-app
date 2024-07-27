const mongoose = require('mongoose');

const Message = new mongoose.Schema({
  chatId: {
    type: mongoose.Types.ObjectId,
    ref: 'Chat',
    required: true,
  },
  sender: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    defaul: Date.now(),
  }
});

module.exports = mongoose.model('Message', Message);