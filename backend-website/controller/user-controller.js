const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const upload = require('../middlewares/image-upload');
const fs = require('fs');
const {findByEmail,registerUser, findUserByValidOTP}=require('../services/user-service')
const { generateOTP, sendOTPEmail } = require('../utils/otp-util');
const userServices = require('../services/user-service');






exports.register = async (req, res) => {
  let imagePath = req.file ? req.file.path : null;

  try {
    const { username, email, password, phonenumber, role } = req.body;

    // Check if user already exists
    const existingUser = await findByEmail(email);
    if (existingUser) {
      if (imagePath) {
        fs.unlink(imagePath, (err) => {
          if (err) console.error("Error deleting image:", err);
        });
      }
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const newUser = await registerUser({
      username,
      email,
      password: hashedPassword,
      phonenumber,
      role,
      image: imagePath,
    });

    res.status(201).json({
      message: "User registered successfully. Please log in to receive OTP.",
      userId: newUser.id,
    });
  } catch (error) {
    console.error(error);

    // Delete uploaded image if an error occurs
    if (imagePath) {
      fs.unlink(imagePath, (err) => {
        if (err) console.error("Error deleting image:", err);
      });
    }

    res.status(500).json({ error: "Server error", details: error.message });
  }
};

exports.validateLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    // Check if user exists
    const existingUser = await findByEmail(email);
    if (!existingUser) {
      return res.status(401).json({ error: 'Invalid credentials1' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate OTP and store in database
    const { otp, otpExpiresAt } = generateOTP();
    // 10 min expiration

    await existingUser.update({ otp, otpExpiresAt });
    await sendOTPEmail(email, otp);

    const token = jwt.sign({ existingUser }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    res.json({
      message: "OTP sent to email. Please verify OTP to proceed.",
      jwtoken: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Find user by email
    const existingUser = await findByEmail(email);
    if (!existingUser) {
      return res.status(400).json({ error: "User not found" });
    }

    // Check OTP validity
    if (
      existingUser.otp !== otp ||
      new Date() > new Date(existingUser.otpExpiresAt)
    ) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    // Mark user as verified and remove OTP fields
    await existingUser.update({
      isActive: true,
      otp: null,
      otpExpiresAt: null,
    });

    res.status(200).json({
      message: "OTP Verified successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

exports.forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    //check user is exist or not
    const emailData = await findByEmail(email);
    if (!emailData) {
      res.status(404).json({
        message: "email not found",
      });
    }
    const { otp, otpExpiresAt } = generateOTP();

    //update otp in db
    await emailData.update({ otp, otpExpiresAt });
    await sendOTPEmail(email, otp);
    res
      .status(200)
      .json({ message: "otp sent given email successfully", statusCode: 200 });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error", details: e.message });
  }
};

exports.resetPassword = async (req, res) => {
  const { email, confirmPassword, newPassword, otp } = req.body;

  try {
    if (confirmPassword !== newPassword) {
      return res.status(404).json({
        message: "Password does'not match",
      });
    }
    const user = await findUserByValidOTP({ email, otp });
    if (!user) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password and clear OTP
    await user.update({
      password: hashedPassword,
      otp: null,
      otpExpiresAt: null,
    });

    res.json({
      message:
        "Password reset successfully. You can now log in with your new password.",
    });
  } catch (e) {
    console.error(error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await getAllUsers();


//get all users

exports.getAllUser = async(req,res) => {
    try {
        const allUsers = await userServices.getAllUsers()
        res.status(200).json({
            success : true,
            message : "User data",
            allUsers
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
};

//get user by id
exports.getUserById = async(req,res) => {
    try {
       const userById = await userServices.getSingleUserById(req.params.id)
        res.status(200).json({
            success : true,
            message : "User data",
            userById
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
};


//update user
exports.updateUser = async(req,res) => {
    try {
      const updateUser = await userServices.updateUser(req.params.id)
        
        res.status(200).json({
            success : true,
            message : "User data",
            updateUser
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
};

//delete user
exports.deleteUser = async(req,res) => {
    try {
        const deleteUser = await userServices.deleteUser(req.params.id);
        res.status(200).json({
            success : true,
            message : "User deleted",
            deleteUser
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}
    res
      .status(200)
      .json({ message: "User data feched Successfully ", data: allUsers });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
