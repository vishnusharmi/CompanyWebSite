import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('OTP:', otp);
    console.log('New Password:', newPassword);
    alert('Your password has been reset successfully!');
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('bg-img.jpg')" }} // Background Image
    >
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"></div>

      <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg w-96 relative z-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Reset Password</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter the OTP sent to your email and set a new password.
        </p>

        <form onSubmit={handleSubmit}>
          {/* OTP Input */}
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="otp">
            OTP
          </label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            placeholder="Enter OTP"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
          />

          {/* New Password Input */}
          <div className="relative mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="newPassword">
              New Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder="Enter new password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-10"
            />
            <div
              className="absolute right-3 top-10 cursor-pointer text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="relative mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm new password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-10"
            />
          </div>

          {/* Reset Password Button */}
          <Link to="/login">
          <button
    type="submit"
    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
  >
              Reset Password
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
