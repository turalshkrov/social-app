const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  postId: {
    type: mongoose.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  content: {
    type: String,
    requirede: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
}, { collection: 'Comment', versionKey: false });

module.exports = mongoose.model('Comment', Comment);