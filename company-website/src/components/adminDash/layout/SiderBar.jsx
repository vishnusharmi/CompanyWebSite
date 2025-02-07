import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUsers,
  FaChartLine,
  FaTasks,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";



const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const menuItems = [
    {
      id: "1",
      link: "/admin",
      name: "Dashboard",
      icon: <TbLayoutDashboardFilled />,
      font: "text-2xl font-medium ", // Define the font size class here
    },
    {
      id: "2",
      link: "/admin/users",
      name: "User Management",
      icon: <FaUsers />,
    },
    {
      id: "3",
      link: "/admin/content",
      name: "Content Management",
      icon: <FaChartLine />,
    },
    {
      id: "4",
      link: "/admin/task",
      name: "Task Management",
      icon: <FaTasks />,
    },
    {
      id: "5",
      link: "/admin/financial",
      name: "Financial Management",
      icon: <FaFileAlt />,
    },
  ];

  return (
    <>
      {/* Fixed Sidebar for larger screens */}
      <nav className="bg-gray-900 text-white w-60 flex-shrink-0 fixed left-0 top-10 bottom-0 z-50 flex flex-col">
        {/* Sidebar Header */}


        {/* Sidebar Menu Items */}
        <div className="p-2 flex-grow space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
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
          ))}
        </div>

        {/* Sidebar Logout Button */}
        <div className="border-t border-gray-600 mb-0 border-solid"></div>
        <div className="p-3">
          <Link
            to="/logout"
            className="flex items-center space-x-3 px-4 py-2 w-full transition-colors duration-200 rounded-lg hover:bg-gray-600 hover:text-white"
          >
            <FaSignOutAlt className="text-lg" />
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
            {menuItems.map((item) => (
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
            ))}
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


      {/* Add padding to main content to prevent it from being hidden under the sidebar */}
      <div className="md:pl-60">{/* Your main content goes here */}</div>
    </>
  );
};

export default SideBar;
