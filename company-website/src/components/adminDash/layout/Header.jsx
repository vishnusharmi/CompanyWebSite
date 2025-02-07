import { FaBell, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-700 text-white py-3 px-4 flex justify-between items-center fixed top-0 left-0 w-full shadow-md z-500 md:pl-20">
      {/* Left Side: Title & Mobile Menu Icon */}
      <div className="flex items-center space-x-2">
        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-xl hover:text-gray-300 transition-colors duration-300" />
          ) : (
            <FaBars className="text-xl hover:text-gray-300 transition-colors duration-300" />
          )}
        </button>

        {/* Brand Name (Hidden on Mobile) */}
        <span className="text-lg font-bold md:block hidden">Busitron</span>
      </div>

      {/* Right Side: Notification & User Profile */}
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Notification Icon */}
        <button className="relative">
          <FaBell className="text-lg hover:text-gray-300 transition-colors duration-300" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* User Profile (Hidden on Small Screens) */}
        <button className="hidden md:flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300">
          <FaUserCircle className="text-xl" />
          <span className="text-sm">John Doe</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown (Same Style as Sidebar) */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-64 bg-gray-700 text-white p-4 md:hidden shadow-md">
          <button className="block w-full text-left py-2 hover:bg-gray-600 rounded transition">
            Dashboard
          </button>
          <button className="block w-full text-left py-2 hover:bg-gray-600 rounded transition">
            Profile
          </button>
          <button className="block w-full text-left py-2 hover:bg-red-600 rounded transition">
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
