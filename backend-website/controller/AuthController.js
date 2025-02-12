const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');
const upload = require('../middlewares/UploadMiddleware');
const fs = require('fs');
require('dotenv').config();
const { generateOTP, sendOTPEmail } = require('../utils/optService');

exports.register = async (req, res) => {
  let imagePath = req.file ? req.file.path : null;

  try {
    const { username, email, password, phonenumber, role } = req.body;

    // Check if user already exists
    const existingUser = await user.findOne({ where: { email } });
    if (existingUser) {
      if (imagePath) {
        fs.unlink(imagePath, (err) => {
          if (err) console.error('Error deleting image:', err);
        });
      }
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const newUser = await user.create({
      username,
      email,
      password: hashedPassword,
      phonenumber,
      role: role || 'user',
      image: imagePath,
      isVerified: false, // User must verify OTP before login
    });

    res.status(201).json({ message: 'User registered successfully. Please log in to receive OTP.', userId: newUser.id });
  } catch (error) {
    console.error(error);

    // Delete uploaded image if an error occurs
    if (imagePath) {
      fs.unlink(imagePath, (err) => {
        if (err) console.error('Error deleting image:', err);
      });
    }

    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existingUser = await user.findOne({ where: { email } });
    if (!existingUser) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate OTP and store in database
    const otp = generateOTP();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 min expiration

    await existingUser.update({ otp, otpExpiresAt });
    await sendOTPEmail(email, otp);

    const token = jwt.sign(
      { id: existingUser.id, email: existingUser.email, role: existingUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ message: 'OTP sent to email. Please verify OTP to proceed.', jwtoken: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Find user by email
    const existingUser = await user.findOne({ where: { email } });
    if (!existingUser) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Check OTP validity
    if (existingUser.otp !== otp || new Date() > new Date(existingUser.otpExpiresAt)) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    // Mark user as verified and remove OTP fields
    await existingUser.update({ isVerified: true, otp: null, otpExpiresAt: null });

    // Generate JWT Token
    const token = jwt.sign(
      { id: existingUser.id, email: existingUser.email, role: existingUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ token, message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};
