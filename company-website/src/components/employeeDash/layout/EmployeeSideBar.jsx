import { useState } from "react";
import {
  FaBars,
  FaTimes,
  // FaChevronRight,
  // FaChevronDown,
  // FaUser,
  // FaMoneyBillAlt,
  // FaBell,
  // FaListAlt,
  FaSignOutAlt,
  FaTasks,
} from "react-icons/fa";
import { CgPerformance } from "react-icons/cg";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const EmployeeSideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isServicesOpen, setIsServicesOpen] = useState(false); // Manage dropdown state

  return (
    <>
      {/* Sidebar for larger screens */}
      <nav className="bg-gray-900 text-white  flex-shrink-0 bottom-0 z-50 flex flex-col relative h-dvh">
        {/* Sidebar Header */}

        {/* Sidebar Menu Items */}
        <div className="p-2 flex flex-col space-y-2 overflow-y-auto">
          <Link
            to="/employee"
            className="flex items-center space-x-3 px-4 py-3 w-full transition-colors duration-200 rounded-lg hover:bg-gray-600 hover:text-blue focus:bg-gray-600 "
          >
            <span className="text-xl">
              <TbLayoutDashboardFilled />
            </span>
            <span className="font-medium">Dashboard</span>
          </Link>

          <Link
            to="/employee/task"
            className="flex items-center space-x-3 px-4 py-3 w-full transition-colors duration-200 rounded-lg hover:bg-gray-600 hover:text-blue focus:bg-gray-600 "
          >
            <span className="text-xl">
              <FaTasks />
            </span>
            <span className="font-medium">Task Management</span>
          </Link>

          <Link
            to="/employee/performance"
            className="flex items-center space-x-3 px-4 py-3 w-full transition-colors duration-200 rounded-lg hover:bg-gray-600 hover:text-blue focus:bg-gray-600 "
          >
            <span className="text-xl">
              <CgPerformance />
            </span>
            <span className="font-medium">Performance Tracking</span>
          </Link>
        </div>

        <div className="p-3 w-full absolute bottom-13 mb-4">
          <div className="h-0.5 bg-gray-500 mx-2 mb-2" />
          <Link
            to="/logout"
            className="flex items-center space-x-3 px-4 py-3 w-full transition-colors duration-200 rounded-lg hover:bg-gray-600 hover:text-white text-xl"
          >
            <FaSignOutAlt className="text-xl" />
            <span className="text-sm font-medium text-white">Logout</span>
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

      {/* Mobile Sidebar Content */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 w-64 bg-gray-700 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex-grow space-y-2 overflow-y-auto">
            {/* {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="flex items-center space-x-3 px-4 py-2 w-full transition-colors duration-200 rounded-lg hover:bg-gray-600 hover:text-white"
              >
                <span className="text-lg">{item.icon}</span>
                <span
                  className={`${item.font ? item.font : "text-sm"} font-medium`}
                >
                  {item.name}
                </span>
              </Link>
            ))} */}
          </div>

          {/* Mobile Logout Button at the Bottom */}
          <div className="p-4">
            <Link
              to="/logout"
              className="flex items-center space-x-3 px-4 py-2 w-full transition-colors duration-200 rounded-lg hover:bg-red-600 hover:text-white"
            >
              <FaSignOutAlt className="text-lg" />
              <span className="text-sm font-medium">Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeSideBar;
