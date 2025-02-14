import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import PropTypes from "prop-types";

const Profile = ({ onClose }) => {
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
        @keyframes rotateBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Outer container with fadeInScale animation and a linear gradient background */}
      <div className="relative animate-[fadeInScale_0.2s_ease-out_forwards] bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-gray-100 p-6 shadow-xl z-50 rounded">
        {/* Close Icon */}
        <button
          className="absolute top-2 right-2 cursor-pointer text-gray-400 hover:text-gray-200"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>
        {/* Arrow/Tail pointing upward */}
        <div className="absolute top-0 right-10 transform -translate-y-full">
          <div className="w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-b-10 border-b-gray-700"></div>
        </div>
        <div className="flex items-center space-y-4">
          {/* Rotating gradient border behind the static profile image */}
          <div className="relative w-[104px] h-[104px] flex items-center justify-center rounded-full mr-5">
            {/* Rotating border element */}
            <div
              className="absolute inset-0 rounded-full animate-[rotateBorder_2s_linear_infinite]"
              style={{
                background:
                  "conic-gradient(from 0deg, #4b5563, #9ca3af, #4b5563)",
              }}
            ></div>
            {/* Static profile image container */}
            <div className="relative w-24 h-24 rounded-full bg-gray-800 overflow-hidden">
              <img
                src="https://dummyimage.com/150"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Profile text with a slight delay */}
          <div className="text-center animate-[fadeInScale_0.6s_ease-out_forwards] delay-[0.4s] mr-3">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <div className="mt-2 flex flex-col space-y-2">
              <button className="px-4 py-2 text-white rounded-lg hover:scale-105 transition-all duration-300">
                <div className="flex items-center">
                  <CgProfile />
                  <div className="pl-2">View Profile</div>
                </div>
              </button>
              <button className="px-4 py-2 text-white rounded-lg hover:scale-105 transition-all duration-300">
                <div className="flex items-center">
                  <FaSignOutAlt />
                  <div className="pl-2">Logout</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

Profile.propTypes = {
  onClose: PropTypes.func,
};
