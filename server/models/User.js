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
  isActive: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  otpCode: {
    type: String,
    select: false,
  },
  otpExpiry: {
    type: Date,
    select: false,
  },
  resetPasswordToken: {
    type: String,
    select: false,
  },
  resetPasswordExpires: {
    type: Date,
    select: false,
  },
  following: [{
    type: mongoose.Types.ObjectId,
    ref: 'User',
    default: [],
  }],
  followers: [{
    type: mongoose.Types.ObjectId,
    ref: 'User',
    default: [],
  }],
  posts: [{
    type: mongoose.Types.ObjectId,
    ref: 'Post',
    default: [],
  }]
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