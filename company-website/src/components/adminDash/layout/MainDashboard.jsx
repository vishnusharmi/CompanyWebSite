// import { motion } from "framer-motion";
// import sample_image from "/sample_image.jpg";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// export default function Dashboard() {
//   const barData = [
//     { name: "Jan", value: 90 },
//     { name: "Feb", value: 60 },
//     { name: "Mar", value: 75 },
//     { name: "Apr", value: 60 },
//     { name: "May", value: 55 },
//     { name: "June", value: 45 },
//     { name: "July", value: 50 },
//   ];

//   const pieData = [
//     { name: "Projects Completed", value: 3000, color: "#7269EF" },
//     { name: "Projects Ongoing", value: 4000, color: "#4ADE80" },
//     { name: "Projects Cancel", value: 1000, color: "#F87171" },
//   ];
//   return (
//     <>
//       <div>
//         <div className="p-6 bg-gray-800  ">
//           {/* Welcome Section */}
//           <div className=" rounded-2xl shadow-md p-4 flex items-center mt-5  bg-gray-50">
//             <img
//               src={sample_image}
//               alt="Businessman"
//               className="w-35 h-20 object-contain "
//             />
//             <div className="ml-6 ">
//               <h1 className="text-xl font-bold text-blue-700 ">
//                 {" "}
//                 <span className="text-xl text-black font-bold mr-2">
//                   Welcome{" "}
//                 </span>{" "}
//                 John Doe!
//               </h1>
//               <p className="text-black mt-2 text-sm pr-20">
//                 Busitron empowers businesses with smart solutions, streamlining
//                 operations and driving success with innovation and efficiency.
//               </p>
//             </div>
//           </div>

//           {/* 2nd row*/}
//           <div className="grid grid-cols-4 gap-6 mt-9 ">
//             {[
//               { label: "Users", value: "1000+", percent: 80, color: "#6366F1" }, // Blue
//               {
//                 label: "Projects",
//                 value: "500+",
//                 percent: 70,
//                 color: "#14B8A6",
//               }, // Teal
//               {
//                 label: "Employers",
//                 value: "1000+",
//                 percent: 75,
//                 color: "#EC4899",
//               }, // Pink
//               {
//                 label: "Worth",
//                 value: "$10000",
//                 percent: 85,
//                 color: "#3B82F6",
//               }, // Blue variant
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-md flex flex-row gap-9 p-5 pl-5 items-center transition-transform transform hover:scale-105 duration-300"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <div className="relative w-16 h-16 flex items-center justify-center">
//                   <svg className="absolute w-full h-full" viewBox="0 0 36 36">
//                     {/* Background Circle */}
//                     <circle
//                       className="text-gray-200 stroke-current"
//                       strokeWidth="3"
//                       cx="18"
//                       cy="18"
//                       r="16"
//                       fill="none"
//                       strokeOpacity="0.2"
//                     ></circle>

//                     {/* Animated Progress Circle with Disappearing Effect */}
//                     <motion.circle
//                       stroke={item.color}
//                       strokeWidth="3"
//                       strokeDasharray="100"
//                       strokeDashoffset="100"
//                       strokeLinecap="round"
//                       cx="18"
//                       cy="18"
//                       r="16"
//                       fill="none"
//                       initial={{ strokeDashoffset: 100, opacity: 1 }}
//                       animate={{
//                         strokeDashoffset: 100 - item.percent,
//                         opacity: [1, 1, 0], // Fully visible → Stay → Disappear
//                       }}
//                       transition={{
//                         duration: 2,
//                         ease: "easeInOut",
//                         times: [0, 0.7, 1],
//                         repeat: Infinity, // Infinite loop
//                       }}
//                     ></motion.circle>
//                   </svg>
//                   <span className="text-lg font-bold text-gray-700">
//                     {item.percent}%
//                   </span>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold mt-2 text-gray-900">
//                     {item.value}
//                   </h3>
//                   <p className="text-gray-500 text-sm">{item.label}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* 3rd row */}
//         <div className="bg-gray-800 text-white p-6 ">
//           <div className="grid grid-cols-3 gap-6 ">
//             {/* Left Card */}
//             <div className="bg-gray-900 rounded-2xl p-6 shadow-[0px_0px_5px_white]  h-90 pt-20 transition-transform transform hover:scale-102 duration-300">
//               <h2 className="text-medium font-semibold text-gray-300">
//                 Total Revenue:
//               </h2>
//               <p className="text-2xl font-bold">$9,542.00</p>
//               <p className="text-sm text-gray-400">
//                 From Jan 20, 2000 to July 2023
//               </p>
//               <div className="mt-4 flex items-center ">
//                 <div className="h-10 w-full bg-green-500 rounded-lg"> </div>
//               </div>
//               <div className="mt-3 flex justify-between text-sm">
//                 <p className="text-green-400">3,526.56 Net Profit</p>
//               </div>
//             </div>

//             {/* Bar Chart */}
//             <div className="bg-gray-900  shadow-[0px_0px_5px_white] flex items-center justify-center rounded-2xl h-90 transition-transform transform hover:scale-102 duration-300">
//               <ResponsiveContainer width="90%" height={250}>
//                 <BarChart data={barData}>
//                   <XAxis dataKey="name" tick={{ fill: "#A1A1AA" }} />
//                   <YAxis tick={{ fill: "#A1A1AA" }} />
//                   <Bar
//                     dataKey="value"
//                     fill="#7269EF"
//                     radius={[10, 10, 0, 0]}
//                     isAnimationActive={false}
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>

//             {/* Donut Chart */}
//             <div className="bg-gray-900 p-3 rounded-2xl shadow-[0px_0px_5px_white] h-90 transition-transform transform hover:scale-102 duration-300">
//               <ResponsiveContainer width="100%" height={250}>
//                 <PieChart>
//                   <Pie
//                     data={pieData}
//                     innerRadius={50}
//                     outerRadius={80}
//                     dataKey="value"
//                   >
//                     {pieData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={entry.color} />
//                     ))}
//                   </Pie>
//                 </PieChart>
//               </ResponsiveContainer>
//               <div className=" text-sm">
//                 {pieData.map((item, index) => (
//                   <div key={index} className="flex justify-between py-1">
//                     <span className="flex items-center">
//                       <span
//                         className="w-3 h-3 inline-block rounded-full mr-2"
//                         style={{ background: item.color }}
//                       ></span>
//                       {item.name}
//                     </span>
//                     <span className="text-gray-300">
//                       {item.value.toLocaleString()}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { motion } from "framer-motion";
import sample_image from "/sample_image.jpg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Dashboard() {
  const barData = [
    { name: "Jan", value: 90 },
    { name: "Feb", value: 60 },
    { name: "Mar", value: 75 },
    { name: "Apr", value: 60 },
    { name: "May", value: 55 },
    { name: "June", value: 45 },
    { name: "July", value: 50 },
  ];

  const pieData = [
    { name: "Projects Completed", value: 3000, color: "#7269EF" },
    { name: "Projects Ongoing", value: 4000, color: "#4ADE80" },
    { name: "Projects Cancel", value: 1000, color: "#F87171" },
  ];

  return (
    <div className="max-h-screen w-full bg-white text-gray-900">
      <div className="p-6">
        {/* Welcome Section */}
        <div className="rounded-2xl shadow-md p-4 flex items-center mt-5 bg-gray-100">
          <img
            src={sample_image}
            alt="Businessman"
            className="w-35 h-20 object-contain"
          />
          <div className="ml-6">
            <h1 className="text-xl font-bold text-blue-600">
              <span className="text-xl text-gray-900 font-bold mr-2">
                Welcome
              </span>
              John Doe!
            </h1>
            <p className="text-gray-600 mt-2 text-sm pr-20">
              Busitron empowers businesses with smart solutions, streamlining
              operations and driving success with innovation and efficiency.
            </p>
          </div>
        </div>

        {/* 2nd row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-9">
          {[
            { label: "Users", value: "1000+", percent: 80, color: "#6366F1" }, // Blue
            { label: "Projects", value: "500+", percent: 70, color: "#14B8A6" }, // Teal
            {
              label: "Employers",
              value: "1000+",
              percent: 75,
              color: "#EC4899",
            }, // Pink
            { label: "Worth", value: "$10000", percent: 85, color: "#3B82F6" }, // Blue variant
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-2xl shadow-md p-5 flex flex-row gap-9 items-center transition-transform transform hover:scale-105 duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="absolute w-full h-full" viewBox="0 0 36 36">
                  {/* Background Circle */}
                  <circle
                    className="text-gray-300 stroke-current"
                    strokeWidth="3"
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    strokeOpacity="0.2"
                  ></circle>

                  {/* Animated Progress Circle */}
                  <motion.circle
                    stroke={item.color}
                    strokeWidth="3"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                    strokeLinecap="round"
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: 100 - item.percent }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  ></motion.circle>
                </svg>
                <span className="text-lg font-bold text-gray-600">
                  {item.percent}%
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  {item.value}
                </h3>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3rd row */}
      <div className="bg-white text-gray-900 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Left Card */}
          <div className="bg-gray-100 rounded-2xl p-6 shadow-md h-90 transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-medium font-semibold text-gray-600">
              Total Revenue:
            </h2>
            <p className="text-2xl font-bold text-gray-900">$9,542.00</p>
            <p className="text-sm text-gray-600">
              From Jan 20, 2000 to July 2023
            </p>
            <div className="mt-4 flex items-center">
              <div className="h-10 w-full bg-green-500 rounded-lg"></div>
            </div>
            <div className="mt-3 flex justify-between text-sm">
              <p className="text-green-600">3,526.56 Net Profit</p>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-gray-100 shadow-md flex items-center justify-center rounded-2xl h-90 transition-transform transform hover:scale-105 duration-300">
            <ResponsiveContainer width="90%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" tick={{ fill: "#4B5563" }} />
                <YAxis tick={{ fill: "#4B5563" }} />
                <Bar
                  dataKey="value"
                  fill="#6366F1"
                  radius={[10, 10, 0, 0]}
                  isAnimationActive={false}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Donut Chart */}
          <div className="bg-gray-100 p-3 rounded-2xl shadow-md h-90 transition-transform transform hover:scale-105 duration-300">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="text-sm">
              {pieData.map((item, index) => (
                <div key={index} className="flex justify-between py-1">
                  <span className="flex items-center">
                    <span
                      className="w-3 h-3 inline-block rounded-full mr-2"
                      style={{ background: item.color }}
                    ></span>
                    {item.name}
                  </span>
                  <span className="text-gray-600">
                    {item.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
