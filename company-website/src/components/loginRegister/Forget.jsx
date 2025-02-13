import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Forget = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const Api_Url = import.meta.env.VITE_API_BASE_URL
 

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');


    try {
      const response = await axios.post(`${Api_Url}/users/forget-password`, { email });

      if (response.status === 200) {
        setSuccess('Password reset link has been sent to your email.');
      }
      navigate("/reset-password")
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
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Forgot Password?</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your registered email address, and we'll send you a link to reset your password.
        </p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? 'bg-gray-400' : 'bg-green-500'} text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out`}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <Link to="/login">
          <p className="text-center text-sm mt-4 text-blue-500 hover:underline">Back to Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Forget;
