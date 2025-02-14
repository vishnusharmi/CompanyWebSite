import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState(''); // Added email input for the request
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const Api_Url = import.meta.env.VITE_API_BASE_URL

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${Api_Url}/users/reset-password`, {
        email,
        otp,
        newPassword,
        confirmPassword,
      });

      if (response.status === 200) {
        setSuccess('Your password has been reset successfully!');
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after success
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('bg-img.jpg')" }}
    >
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"></div>

      <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg w-96 relative z-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Reset Password</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your registered email, the OTP sent to your email, and set a new password.
        </p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
          />

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
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? 'bg-gray-400' : 'bg-green-500'} text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out`}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>

        <Link to="/login">
          <p className="text-center text-sm mt-4 text-blue-500 hover:underline">Back to Login</p>
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
