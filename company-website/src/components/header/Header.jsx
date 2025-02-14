import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import Profile from "../utils/Profile";
import Notifications from "../utils/Notifications";
import logo from "../../assets/BusitronLogo.jpg"; // Adjust the path to your local logo

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleBellClick = () => {
    setShowNotifications(!showNotifications);
    setShowProfile(false);
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
    setShowNotifications(false);
  };

  // bg-gray-800
  return (
    <header className="bg-linear-to-r from-gray-600 to-gray-800 text-white py-2 px-8 border-b border-gray-700 flex justify-between items-center w-full sticky top-0 z-50">
      {/* Left Side: Branding */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Logo"
          className="w-8 h-8 rounded-3xl mr-5 border-2 border-white shadow-lg"
        />
        <span className="text-2xl font-bold">Busitron</span>
      </div>

      {/* Right Side: Notification and User Profile */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <Link to="/admin/notification">
          <button className="relative cursor-pointer">
            <FaBell className="hover:text-gray-300 transition-colors duration-300 h-6 text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
        </Link>

        {/* User Profile Button */}
        <button
          className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300 cursor-pointer"
          onClick={handleProfileClick}
        >
          <img
            src="https://dummyimage.com/40x40"
            alt="John Doe"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
          <span className="font-semibold">John Doe</span>
        </button>
      </div>

      {/* Render Notifications and Profile as siblings so they don't affect layout */}
      {showNotifications && (
        <div className="absolute top-12 right-32 mt-2">
          <Notifications onClose={() => setShowNotifications(false)} />
        </div>
      )}
      {showProfile && (
        <div className="absolute top-12 right-5 mt-2">
          <Profile onClose={() => setShowProfile(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
