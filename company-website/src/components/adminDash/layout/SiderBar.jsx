// import { useState } from "react";
// import {
//   FaBars,
//   FaTimes,
//   FaUsers,
//   FaChartLine,
//   FaTasks,
//   FaFileAlt,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { TbLayoutDashboardFilled } from "react-icons/tb";
// import { Link } from "react-router-dom";

// const SideBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuItems = [
//     {
//       id: "1",
//       link: "/admin",
//       name: "Dashboard",
//       icon: <TbLayoutDashboardFilled />,
//       font: "text-2xl font-medium ", // Define the font size class here
//     },
//     {
//       id: "2",
//       link: "/admin/users",
//       name: "User Management",
//       icon: <FaUsers />,
//     },
//     {
//       id: "3",
//       link: "/admin/content",
//       name: "Content Management",
//       icon: <FaChartLine />,
//     },
//     {
//       id: "4",
//       link: "/admin/task",
//       name: "Task Management",
//       icon: <FaTasks />,
//     },
//     {
//       id: "5",
//       link: "/admin/financial",
//       name: "Financial Management",
//       icon: <FaFileAlt />,
//     },
//   ];

//   return (
//     <>
//       {/* Sidebar for larger screens */}
//       <nav className="bg-gray-900 text-white w-60 flex-shrink-0 bottom-0 z-10 flex flex-col relative text">
//         {/* Sidebar Header */}

//         {/* Sidebar Menu Items */}
//         <div className="p-2 flex flex-col space-y-2 overflow-y-auto fixed">
//           {menuItems.map((item) => {
//             if (item.name === "Dashboard") {
//               return (
//                 <>
//                   <Link
//                     key={item.id}
//                     to={item.link}
//                     className="flex items-center space-x-3 px-4 py-2 w-full transition-colors duration-200 rounded-lg hover:bg-gray-600 hover:text-blue mb-4 mt-2"
//                   >
//                     <span className="text-lg">{item.icon}</span>
//                     <span
//                       className={`${
//                         item.font ? item.font : "text-sm"
//                       } font-medium`}
//                     >
//                       {item.name}
//                     </span>
//                   </Link>
//                   <div className="h-0.5 bg-gray-500 mx-2 mb-4" />
//                 </>
//               );
//             }
//             return (
//               <Link
//                 key={item.id}
//                 to={item.link}
//                 className="flex items-center space-x-3 px-4 py-3 w-full transition-colors duration-200 rounded-lg hover:bg-gray-600 hover:text-blue focus:bg-gray-600 "
//               >
//                 <span className="text-xl">{item.icon}</span>
//                 <span
//                   className={`${item.font ? item.font : "text-sm"} font-medium`}
//                 >
//                   {item.name}
//                 </span>
//               </Link>
//             );
//           })}
//         </div>

//         <div className="p-3 bottom-13 mb-4 w-60 fixed">
//           <div className="h-0.5 bg-gray-500 mx-2 mb-2" />
//           <Link
//             to="/logout"
//             className="flex items-center space-x-3 px-4 py-3 w-full transition-colors duration-200 rounded-lg hover:bg-gray-600 hover:text-white text-xl "
//           >
//             <FaSignOutAlt className="text-xl" />
//             <span className="text-sm font-medium text-white ">Logout</span>
//           </Link>
//         </div>
//       </nav>

//       {/* Mobile Toggle Button */}
//       <button
//         className="md:hidden fixed top-4 left-4 z-50 text-white bg-gray-700 p-2 rounded-lg shadow-lg"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         {isMenuOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Mobile Sidebar Content */}
//       <div
//         className={`md:hidden fixed inset-y-0 left-0 w-64 bg-gray-700 text-white transform transition-transform duration-300 ease-in-out z-50 ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="p-4 flex flex-col h-full">
//           <div className="flex-grow space-y-2 overflow-y-auto">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.id}
//                 to={item.link}
//                 className="flex items-center space-x-3 px-4 py-2 w-full transition-colors duration-200 rounded-lg hover:bg-gray-600 hover:text-white"
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 <span
//                   className={`${item.font ? item.font : "text-sm"} font-medium`}
//                 >
//                   {item.name}
//                 </span>
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Logout Button at the Bottom */}
//           <div className="p-4">
//             <Link
//               to="/logout"
//               className="flex items-center space-x-3 px-4 py-2 w-full transition-colors duration-200 rounded-lg hover:bg-red-600 hover:text-white"
//             >
//               <FaSignOutAlt className="text-lg" />
//               <span className="text-sm font-medium">Logout</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideBar;

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
import { Link } from "react-router-dom";

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
      {/* Sidebar for larger screens */}
      <nav className="bg-gray-900 text-white  flex-shrink-0 bottom-0 z-50 flex flex-col relative h-full">
        {/* Sidebar Header */}

        {/* Sidebar Menu Items */}
        <div className="p-2 flex flex-col space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            if (item.name === "Dashboard") {
              return (
                <>
                  <Link
                    key={item.id}
                    to={item.link}
                    className="flex items-center space-x-3 px-4 py-2 w-full transition-colors duration-200 rounded-lg hover:bg-gray-600 hover:text-blue mb-4 mt-2"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span
                      className={`${
                        item.font ? item.font : "text-sm"
                      } font-medium`}
                    >
                      {item.name}
                    </span>
                  </Link>
                  <div className="h-0.5 bg-gray-500 mx-2 mb-4" />
                </>
              );
            }
            return (
              <Link
                key={item.id}
                to={item.link}
                className="flex items-center space-x-3 px-4 py-3 w-full transition-colors duration-200 rounded-lg hover:bg-gray-600 hover:text-blue focus:bg-gray-600 "
              >
                <span className="text-xl">{item.icon}</span>
                <span
                  className={`${item.font ? item.font : "text-sm"} font-medium`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
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
    </>
  );
};

export default SideBar;
