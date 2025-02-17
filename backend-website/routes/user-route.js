const express = require("express");
const {
  register,
  verifyOTP,
  validateLogin,
  resetPassword,
  forgetPassword,
  getAllUsers,
} = require("../controller/user-controller");
const upload = require("../middlewares/image-upload");

const userRouter = express.Router();

userRouter
  .post("/validate-login", validateLogin)
  .post("/register", upload.single("image"), register)
  .post("/verify-otp", verifyOTP)
  .post("/forget-password", forgetPassword)
  .post("/reset-password", resetPassword)
  .get("/all-users", getAllUsers);

module.exports = userRouter;
