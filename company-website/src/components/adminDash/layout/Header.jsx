import { FaBell, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center w-full shadow-md">
      {/* Title */}
      <div className="text-xl font-semibold">Busitron</div>

      {/* Right Side: Notification and User Profile */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <button className="relative">
          <FaBell className="text-xl hover:text-gray-300 transition-colors duration-300" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>
        {/* User Profile */}
        <button className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300">
          <FaUserCircle className="text-2xl" />
          <span>John Doe</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
