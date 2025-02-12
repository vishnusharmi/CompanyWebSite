import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const LoginVerify = () => {
const location = useLocation();
  const [otp, setOtp] = useState('');
  const email = location.state?.email;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset link sent to:', otp);
    alert('otp has been sent to your email.');
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('bg-img.jpg')" }} // Background Image
    >
      {/* Background Blur Effect */}
      <div className="absolute inset-0  bg-opacity-50 backdrop-blur-sm"></div>

      <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg w-96 relative z-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          OTP VERIFICATION
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your OTP send to your {email}.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="otp">
            OTP
          </label>
          <input
            type="tel"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            minLength={6}
            maxLength={6}
            placeholder="Enter your OTP"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          />

          <Link to="                                  ">
          <button
    type="submit"
    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
  >
              Resend OTP
            </button>
          </Link>
        </form>

        <Link to="/login">
          <p className="text-center text-sm mt-4 text-blue-500 hover:underline">
            Back to Login
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LoginVerify;
