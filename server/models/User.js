const mongoose = require('mongoose');
const bcyrpt = require('bcryptjs');

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: {
    type: String,
  },
  active: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
}, { collection: 'Users', versionKey: false });

User.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcyrpt.hash(this.password, 8);
  }
  this.name = this.name.trim();
  this.email = this.email.trim().toLowerCase();
  this.username = this.username.trim().toLowerCase();
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('User', User);