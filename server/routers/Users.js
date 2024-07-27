const express = require('express');
const User = require('../models/User');
const userValidationRules = require('../validation rules/userValidationRules');
const passwordValidationRules = require('../validation rules/passwordValidationRules');
const validation = require('../middlewares/validation/validation');
const crypto = require('crypto');
const bcyrpt = require('bcryptjs');
const bcrypt = require('bcryptjs/dist/bcrypt');
const router = express.Router();

router.post('/register', userValidationRules(), validation, async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const otpCode = crypto.randomInt(1000, 9999).toString();
    const otpExpiry = new Date(Date.now() + 30 * 60 * 1000);
    console.log(otpCode, otpExpiry);
    const newUser = new User({ name, username, email, password, otpCode, otpExpiry });
    await newUser.save();
    res.status(201).json({ message: "Verify email address" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/email-verify', async (req, res) => {
  try {
    const { email, otpCode } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    if (user.otpCode === otpCode && user.otpExpiry > Date.now()) {
      user.isActive = true;
      user.otpCode = null;
      user.otpExpiry = null;
      await user.save();
      return res.json({ message: "Email verified successfully" });
    }
    return res.status(400).json({ message: "Invail or expired OTP" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/forget-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const token = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/reset-password/:token', passwordValidationRules(), validation, async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({ resetPasswordToken: token });
    if(!user) return res.status(400).json({ message: "Invalid or expired token" });

    user.password = password;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = router;