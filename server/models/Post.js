const mongoose = require('mongoose');

const Post = new mongoose.Schema({
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  media: {
    type: String,
    required: false
  },
  likes: [{
    type: mongoose.Types.ObjectId,
    ref: 'User',
  }],
  comments: [{
    type: mongoose.Types.ObjectId,
    ref: 'Comment',
  }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
}, { collection: 'Post', versionKey: false });

module.exports = mongoose.model('Post', Post);