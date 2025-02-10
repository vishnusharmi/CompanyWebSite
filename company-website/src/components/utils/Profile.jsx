import React from "react";
import { FaEdit, FaTimes } from "react-icons/fa";

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

      {/* Outer container with fadeInScale animation and smooth pastel green gradient */}
      <div className="relative animate-[fadeInScale_0.6s_ease-out_forwards] bg-gradient-to-br from-green-50 to-green-100 text-gray-800 p-6 shadow-xl z-50 rounded">
        {/* Close Icon */}
        <button
          className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>
        {/* Arrow/Tail pointing upward */}
        <div className="absolute top-0 right-10 transform -translate-y-full">
          <div className="w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-b-10 border-b-green-50"></div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          {/* Rotating gradient border behind the static profile image */}
          <div className="relative w-[104px] h-[104px] flex items-center justify-center rounded-full">
            {/* Rotating border element */}
            <div
              className="absolute inset-0 rounded-full animate-[rotateBorder_2s_linear_infinite]"
              style={{
                background:
                  "conic-gradient(from 0deg, #d1fae5, #6ee7b7, #d1fae5)",
              }}
            ></div>
            {/* Static profile image container */}
            <div className="relative w-24 h-24 rounded-full bg-white overflow-hidden">
              <img
                src="https://dummyimage.com/150"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Profile text with a slight delay */}
          <div className="text-center animate-[fadeInScale_0.6s_ease-out_forwards] delay-[0.4s]">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <button className="mt-2 flex items-center px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition-colors duration-300">
              <FaEdit className="mr-2" /> Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
