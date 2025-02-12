import React from 'react';
import { UserCircle, Clock, Activity, MessageSquare, Search } from 'lucide-react';
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const monthlyData = [
  { month: "Jan", completed: 65, pending: 35 },
  { month: "Feb", completed: 55, pending: 45 },
  { month: "Mar", completed: 75, pending: 25 },
  { month: "Apr", completed: 60, pending: 40 },
  { month: "May", completed: 80, pending: 20 },
];

const EmployeeDashboard = () => {
  const stats = [
    { icon: <UserCircle className="w-6 h-6 text-orange-400" />, title: "Total Employees", value: "2.3016", type: "Task", change: "+95%" },
    { icon: <Clock className="w-6 h-6 text-violet-500" />, title: "Total Tasks", value: "2.3016", type: "Task", change: "+95%" },
    { icon: <Activity className="w-6 h-6 text-teal-400" />, title: "Completed Task", value: "2.3016", type: "Task", change: "+95%" },
    { icon: <MessageSquare className="w-6 h-6 text-red-400" />, title: "Incompleted Task", value: "2.3016", type: "Task", change: "+95%" }
  ];

  const topEmployees = [
    { name: "Rudolph G", role: "Product Designer", tasks: "194 Tasks", points: "1,230 pts" },
    { name: "Anna F", role: "Frontend Engineer", tasks: "194 Tasks", points: "1,140 pts" },
    { name: "Marco D.G", role: "Social Media", tasks: "194 Tasks", points: "1,084 pts" },
    { name: "Robert X", role: "Growth", tasks: "194 Tasks", points: "1,001 pts" }
  ];

  const monthlyData = [
    { month: 'Jan', completed: 65, total: 100 },
    { month: 'Feb', completed: 55, total: 90 },
    { month: 'Mar', completed: 75, total: 95 },
    { month: 'Apr', completed: 60, total: 85 },
    { month: 'May', completed: 80, total: 100 }
  ];

  // Animated Progress Circle Component
  const CircularProgress = ({ percent, color }) => {
    const circumference = 2 * Math.PI * 60;
    const strokeOffset = circumference - (circumference * percent) / 100;

    return (
      <svg className="w-32 h-32 transform -rotate-90">
        <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200" />
        <motion.circle
          cx="64"
          cy="64"
          r="60"
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference, opacity: 1 }}
          animate={{ strokeDashoffset: strokeOffset, opacity: [1, 1, 0] }}
          transition={{ duration: 2, ease: "easeInOut", times: [0, 0.7, 1], repeat: Infinity }}
        />
      </svg>
    );
  };

  return (
    <div className="max-h-[620px] bg-gray-50 p-8 overflow-y-scroll">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-semibold">Employee Dashboard</h1>
          {/* <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div> */}
        </div>
        {/* <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors">
          Add Task
        </button> */}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-3">
              {stat.icon}
              <span className="text-gray-500">{stat.title}</span>
            </div>
            <div className="mt-4">
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-500 mr-2">{stat.type}</span>
                <span className="text-sm text-green-500">{stat.change} This Month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Task Completion Circle */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold mb-4">Complete Task Target</h3>
          <div className="relative flex justify-center">
            <div className="absolute flex items-center justify-center w-32 h-32">
              <span className="text-2xl font-bold">82%</span>
            </div>
            <CircularProgress percent={82} color="teal" />
          </div>
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-between bg-teal-50 p-3 rounded-lg">
              <span className="text-sm">Completed Task</span>
              <span className="text-sm font-medium">455</span>
            </div>
          </div>
        </div>

        {/* Task Count Chart */}
        <div className="bg-white rounded-lg shadow-sm p-6">
  <h3 className="font-semibold mb-4">Task Count</h3>
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={monthlyData} barSize={30}>
      <XAxis dataKey="month" stroke="#888" />
      <YAxis hide />
      <Tooltip />
      <Bar dataKey="completed" stackId="a" fill="#7C3AED" radius={[5, 5, 0, 0]} />
      <Bar dataKey="pending" stackId="a" fill="#F59E0B" radius={[5, 5, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
</div>


        {/* Top Employees */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold mb-4">Top Employees</h3>
          <div className="space-y-4">
            {topEmployees.map((employee, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-medium">{employee.name}</p>
                    <p className="text-sm text-gray-500">{employee.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{employee.tasks}</p>
                  <p className="text-sm text-teal-500">{employee.points}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;






// import React from 'react';
// import { UserCircle, Clock, Activity, MessageSquare, Search } from 'lucide-react';
// import { motion } from "framer-motion";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const monthlyData = [
//   { month: "Jan", completed: 65, pending: 35 },
//   { month: "Feb", completed: 55, pending: 45 },
//   { month: "Mar", completed: 75, pending: 25 },
//   { month: "Apr", completed: 60, pending: 40 },
//   { month: "May", completed: 80, pending: 20 },
// ];

// const EmployeeDashboard = () => {
//   const stats = [
//     { icon: <UserCircle className="w-6 h-6 text-orange-400" />, title: "Total Employees", value: "2.3016", type: "Task", change: "+95%" },
//     { icon: <Clock className="w-6 h-6 text-violet-500" />, title: "Total Tasks", value: "2.3016", type: "Task", change: "+95%" },
//     { icon: <Activity className="w-6 h-6 text-teal-400" />, title: "Completed Task", value: "2.3016", type: "Task", change: "+95%" },
//     { icon: <MessageSquare className="w-6 h-6 text-red-400" />, title: "Incompleted Task", value: "2.3016", type: "Task", change: "+95%" }
//   ];

//   const topEmployees = [
//     { name: "Rudolph G", role: "Product Designer", tasks: "194 Tasks", points: "1,230 pts" },
//     { name: "Anna F", role: "Frontend Engineer", tasks: "194 Tasks", points: "1,140 pts" },
//     { name: "Marco D.G", role: "Social Media", tasks: "194 Tasks", points: "1,084 pts" },
//     { name: "Robert X", role: "Growth", tasks: "194 Tasks", points: "1,001 pts" }
//   ];

//   // Animated Progress Circle Component
//   const CircularProgress = ({ percent, color }) => {
//     const circumference = 2 * Math.PI * 60;
//     const strokeOffset = circumference - (circumference * percent) / 100;

//     return (
//       <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90">
//         <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200" />
//         <motion.circle
//           cx="64"
//           cy="64"
//           r="60"
//           stroke={color}
//           strokeWidth="8"
//           fill="none"
//           strokeDasharray={circumference}
//           strokeDashoffset={circumference}
//           strokeLinecap="round"
//           initial={{ strokeDashoffset: circumference, opacity: 1 }}
//           animate={{ strokeDashoffset: strokeOffset, opacity: [1, 1, 0] }}
//           transition={{ duration: 2, ease: "easeInOut", times: [0, 0.7, 1], repeat: Infinity }}
//         />
//       </svg>
//     );
//   };

//   return (
//     <div className="max-h-[620px] bg-gray-50 p-4 sm:p-8 overflow-y-auto">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
//         <h1 className="text-xl sm:text-2xl font-semibold">Employee Dashboard</h1>
//         <div className="relative w-full sm:w-auto">
//           <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
//           />
//         </div>
//         <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors">
//           Add Task
//         </button>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//         {stats.map((stat, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//             <div className="flex items-center space-x-3">
//               {stat.icon}
//               <span className="text-gray-500">{stat.title}</span>
//             </div>
//             <div className="mt-4">
//               <div className="text-xl sm:text-2xl font-semibold">{stat.value}</div>
//               <div className="flex items-center mt-1">
//                 <span className="text-sm text-gray-500 mr-2">{stat.type}</span>
//                 <span className="text-sm text-green-500">{stat.change} This Month</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
//         {/* Task Completion Circle */}
//         <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center">
//           <h3 className="font-semibold mb-4 text-center">Complete Task Target</h3>
//           <div className="relative flex justify-center">
//             <div className="absolute flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32">
//               <span className="text-xl sm:text-2xl font-bold">82%</span>
//             </div>
//             <CircularProgress percent={82} color="teal" />
//           </div>
//           <div className="mt-6 bg-teal-50 p-3 rounded-lg w-full text-center">
//             <span className="text-sm">Completed Task: <strong>455</strong></span>
//           </div>
//         </div>

//         {/* Task Count Chart */}
//         <div className="bg-white rounded-lg shadow-sm p-6">
//  <h3 className="font-semibold mb-4">Task Count</h3>
//   <ResponsiveContainer width="100%" height={200}>
//     <BarChart data={monthlyData} barSize={30}>
//       <XAxis dataKey="month" stroke="#888" />
//      <YAxis hide />
//       <Tooltip />
//       <Bar dataKey="completed" stackId="a" fill="#7C3AED" radius={[5, 5, 0, 0]} />
//      <Bar dataKey="pending" stackId="a" fill="#F59E0B" radius={[5, 5, 0, 0]} />
//      </BarChart>
//    </ResponsiveContainer>
// </div>

//         {/* Top Employees */}
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <h3 className="font-semibold mb-4">Top Employees</h3>
//           <div className="space-y-4">
//             {topEmployees.map((employee, index) => (
//               <div key={index} className="flex items-center justify-between">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full"></div>
//                   <div>
//                     <p className="font-medium">{employee.name}</p>
//                     <p className="text-sm text-gray-500">{employee.role}</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="font-medium">{employee.tasks}</p>
//                   <p className="text-sm text-teal-500">{employee.points}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default EmployeeDashboard;

