import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const notificationsData = [
  "This is a very long notification message that should be truncated because it exceeds our maximum allowed length for display.",
  "Another lengthy notification message that will be truncated to maintain design consistency in our layout.",
  "Short notification.",
];

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const Notifications = ({ onClose }) => {
  return (
    <>
      {/* Define custom keyframes inline */}
      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      {/* Outer container with fadeInScale animation and a smooth pastel green gradient */}
      <div className="relative animate-[fadeInScale_0.6s_ease-out_forwards] bg-gradient-to-br from-green-50 to-green-100 text-gray-800 p-6 shadow-xl z-50 mr-2 rounded max-w-sm">
        {/* Close Icon */}
        <button
          className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>
        {/* Arrow/Tail pointing upward */}
        <div className="absolute top-0 right-10 transform -translate-y-full">
          <div className="w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-b-10 border-b-green-100"></div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          {/* Title */}
          <h2 className="text-2xl font-bold">Notifications</h2>
          {/* Notifications List */}
          <ul className="w-full text-sm space-y-2">
            {notificationsData.map((message, index) => (
              <li
                key={index}
                className="border border-gray-300 p-2 rounded transition-all duration-200 hover:bg-green-200 hover:border-green-600 hover:shadow-lg"
                title={message}
              >
                {truncateText(message, 60)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Notifications;

Notifications.propTypes = {
  onClose: PropTypes.func,
};
