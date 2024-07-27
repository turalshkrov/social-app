const mongoose = require('mongoose');

const Notification = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  actor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['following', 'like', 'comment'],
  },
  content: {
    type: String,
    default: '',
  },
  entityId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'entityType',
    required: true,
  },
  entityType: {
    type: String,
    required: true,
    enum: ['Post', 'Comment'],
  },
  read: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }

}, { collection: 'Notifation', versionKey: false });

module.exports = mongoose.model('Notifaction', Notification);