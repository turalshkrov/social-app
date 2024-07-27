const mongoose = require('mongoose');

const Chat = new mongoose.Schema({
  participants: [{
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  lastMessage: {
    type: mongoose.Types.ObjectId,
    ref: 'Message'
  }
}, { collection: 'Chats', versionKey: false });

module.exports = mongoose.model('Chat', Chat);