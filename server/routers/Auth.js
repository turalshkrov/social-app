const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');
const authenticationToken = require('../middlewares/auth/authenticationToken');
const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Incorrect email or password" })
    }
    if (!user.isActive) {
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

router.post('/refresh-token', async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ message: 'Unauthorized' });
  
    jwt.verify(refreshToken, process.env.JWT_SECRETKEY, (error, data) => {
      if (error) return res.status(403);
      const accessToken = jwt.sign({ id: data.id }, process.env.JWT_SECRETKEY, { expiresIn: '1h' });
      res.status(200).json({
        message: "Login success",
        accessToken,
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
})

router.get('/get-me', authenticationToken, async (req, res) => {
  try {
    const { userId } = req;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
