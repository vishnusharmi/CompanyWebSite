import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Loader } from 'lucide-react';
import {jwtDecode} from 'jwt-decode'; // Ensure jwtDecode is imported correctly
import { useAppContext} from '../../Context/Contextapi';

const LoginVerify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const email = location.state?.email;
  const [decodedToken, setDecodedToken] = useState(null);
  const { user, setUser } = useAppContext();

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded.existingUser.role); // Store decoded token in state
      if(decoded){
        setUser(decoded.existingUser)
      }
      else{
        setUser(null)
      }
      } catch (error) {
        console.error('Failed to decode JWT:', error);
      }
    } 
  }, []);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const userData = { email, otp };
    try {
      const response = await axios.post(`${baseURL}/users/verify-otp`, userData, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (decodedToken) {
        // Navigate based on role
        if (decodedToken === 'admin') {
          navigate('/admin');
        } else if (decodedToken === 'third-party') {
          navigate('/company');
        } else if (decodedToken === 'employee') {
          navigate('/employee');
        }
      } else {
        console.error('Decoded token is not available');
      }
    } catch (error) {
      console.error('OTP verification failed:', error.response ? error.response.data : error.message);
      
      // Check for incorrect OTP response
      if (error.response ) {
        sessionStorage.removeItem('authToken'); // Remove the token
        navigate('/login'); // Redirect to login page
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('bg-img.jpg')" }}>
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"></div>
      <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg w-96 relative z-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">OTP VERIFICATION</h1>
        <p className="text-sm text-gray-600 text-center mb-6">Enter the OTP sent to your email: <strong>{email}</strong>.</p>

        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="otp">OTP</label>
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
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg transition duration-300 ease-in-out flex items-center justify-center text-white ${
              loading ? 'bg-emerald-500 cursor-not-allowed' : 'bg-emerald-500 hover:bg-emerald-600 cursor-pointer'
            }`}
          >
            {loading ? (
              <>
                <Loader className="mr-2 h-5 w-5 animate-spin" /> Verifying...
              </>
            ) : (
              'Verify OTP'
            )}
          </button>
        </form>

        <Link to="/login">
          <p className="text-center text-sm mt-4 text-blue-500 hover:underline">Back to Login</p>
        </Link>
      </div>
    </div>
  );
};

export default LoginVerify;
