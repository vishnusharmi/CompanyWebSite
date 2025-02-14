import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff,Loader } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // To track loading state

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData,'data');
    
    setLoading(true); // Start loading

    try {
      const response = await axios.post(`${baseURL}/users/validate-login`, userData, {
        headers: { 'Content-Type': 'application/json' },
      });

      const token = response.data.jwtoken;
      sessionStorage.setItem('authToken', token); 

      console.log('Login successful:', response.data);
      navigate('/verify-otp', { state: { email: userData.email } });

    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('bg-img.jpg')" }}
    >
      <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm"></div>

      <div className="flex w-full max-w-4xl relative z-10 shadow-2xl rounded-xl overflow-hidden">
        <div className="w-1/2 bg-white/10 text-white rounded-xl shadow-lg p-10 flex flex-col justify-center items-center">
          <h1
            className="text-4xl font-bold mb-4 tracking-wide"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Busitron
          </h1>
          <p className="text-center text-lg leading-relaxed max-w-sm opacity-90">
            Busitron helps you connect and share with the people in your life
          </p>
          <div className="mt-4 w-20 h-1 bg-white rounded-full"></div>
        </div>

        <div className="w-1/2 bg-white bg-opacity-80 backdrop-blur-lg p-8 flex flex-col justify-center">
          <h2
            className="text-3xl font-semibold text-center text-gray-800 mb-6"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
            </div>

            <div className="mb-4 relative">
              <label
                className="block text-gray-700 text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                placeholder="Enter your password"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
              <div
                className="absolute right-3 top-9 cursor-pointer text-gray-500"
                onClick={togglePassword}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
            
            <button
  type="submit"
  disabled={loading}
  className={`w-full py-2 rounded-lg transition duration-300 ease-in-out flex items-center justify-center text-white ${
    loading ? 'bg-emerald-500 cursor-not-allowed' : 'bg-emerald-500 hover:bg-emerald-600 cursor-pointer'
  }`}
>
  {loading ? (
    <>
      <Loader className="h-5 w-5 animate-spin mr-2" /> Loading...
    </>
  ) : (
    'Login'
  )}
</button>
            <Link to="/forget-password">
              <p className="text-center text-sm mt-3 text-blue-500 underline hover:text-blue-600">
                Forgotten password?
              </p>
            </Link>
          </form>
        </div>
      </div>

      <div className="relative z-10 mt-4">
        <p className="text-white text-sm hover:text-blue-400 transition duration-300 ease-in-out cursor-pointer">
          Create a Page for a celebrity, brand, or business
        </p>
      </div>
    </div>
  );
};

export default Login;
