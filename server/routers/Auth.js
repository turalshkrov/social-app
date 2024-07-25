const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Incorrect email or password" })
    }
    if (!user.active) {
      return res.status(401).json({ message: "Please verify your email address" });
    }

    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRETKEY, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRETKEY, { expiresIn: '30d' });

    res.status(200).json({
      message: "Login success",
      accessToken,
      refreshToken,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;