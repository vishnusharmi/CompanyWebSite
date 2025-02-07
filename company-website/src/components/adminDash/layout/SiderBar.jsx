import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronRight,
  FaChevronDown,
  FaUsers,
  FaChartLine,
  FaTasks,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Manage dropdown state

  return (
    <>
      {/* Sidebar for larger screens */}
{/* Sidebar for larger screens */}
<nav className="bg-gray-700 text-white  w-54 fixed left-0 top-0 h-screen flex-shrink-0 hidden md:block mt-9">
        <div className="p-4">
          <Link
            to={"/admin"}
            classNme="flex items-center  py-2 hover:bg-gray-600 rounded transition-colors duration-300"
          >
            Dashboard
          </Link>
          <Link
            to={"/admin/users"}
            className="flex items-center py-2 hover:bg-gray-600 rounded transition-colors duration-300"
          >
            <FaUsers className="mr-2" />
            User Management
          </Link>
          <Link
            to={"/admin/content"}
            className="flex items-center py-2 hover:bg-gray-600 rounded transition-colors duration-300"
          >
            <FaChartLine className="mr-2" />
            Content Management
          </Link>
          <Link
            to={"/admin/task"}
            className="flex items-center py-2 hover:bg-gray-600 rounded transition-colors duration-300"
          >
            <FaTasks className="mr-2" />
            Task Management
          </Link>

          <Link
            to={"/admin/financial"}
            className="flex items-center py-2 hover:bg-gray-600 rounded transition-colors duration-300"
          >
            <FaFileAlt className="mr-2" />
            Financial Management
          </Link>

          <Link
            to={"/admin"}
            className="flex items-center py-2 hover:bg-gray-600 rounded transition-colors duration-300"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </Link>
        </div>
      </nav>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-gray-700 p-2 rounded-lg shadow-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar Content */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 w-64 bg-gray-700 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <a
            href="#"
            className="flex items-center py-2 hover:bg-gray-600 rounded transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="flex items-center py-2 hover:bg-gray-600 rounded transition-colors duration-300"
          >
            About
          </a>
          <div className="relative group">
            {/* Services Button for Mobile */}
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)} // Toggle dropdown
              className="w-full text-left py-2 hover:bg-gray-600 rounded transition-colors duration-300 flex items-center justify-between"
            >
              Services
              {/* Right/Down Arrow Icon for Mobile */}
              {isServicesOpen ? (
                <FaChevronDown className="ml-2" />
              ) : (
                <FaChevronRight className="ml-2" />
              )}
            </button>

            {/* Dropdown for Services in Mobile */}
            {isServicesOpen && (
              <div className="pl-4 mt-2 space-y-2">
                <a
                  href="#"
                  className="block py-2 hover:bg-gray-600 rounded transition-colors duration-300"
                >
                  Web Development
                </a>
                <a
                  href="#"
                  className="block py-2 hover:bg-gray-600 rounded transition-colors duration-300"
                >
                  App Development
                </a>
                <a
                  href="#"
                  className="block py-2 hover:bg-gray-600 rounded transition-colors duration-300"
                >
                  SEO Services
                </a>
              </div>
            )}
          </div>
          <a
            href="#"
            className="flex items-center py-2 hover:bg-gray-600 rounded transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default SideBar;
