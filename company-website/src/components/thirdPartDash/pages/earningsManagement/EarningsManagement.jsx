import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  DollarSign,
  Download,
  Calendar,
  TrendingUp,
  FileText,
} from "lucide-react";

const EarningsManagement = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  // Sample data
  const earnings = [
    { month: "Jan", amount: 2500, tasks: 15 },
    { month: "Feb", amount: 3200, tasks: 18 },
    { month: "Mar", amount: 2800, tasks: 16 },
    { month: "Apr", amount: 3500, tasks: 20 },
    { month: "May", amount: 4000, tasks: 22 },
    { month: "Jun", amount: 3800, tasks: 21 },
  ];

  const recentPayments = [
    {
      id: 1,
      task: "Website Redesign",
      amount: 850,
      date: "2025-02-10",
      status: "Paid",
    },
    {
      id: 2,
      task: "API Integration",
      amount: 1200,
      date: "2025-02-08",
      status: "Pending",
    },
    {
      id: 3,
      task: "Database Optimization",
      amount: 750,
      date: "2025-02-05",
      status: "Paid",
    },
    {
      id: 4,
      task: "UI Component Library",
      amount: 950,
      date: "2025-02-03",
      status: "Paid",
    },
  ];

  const totalEarnings = earnings.reduce((sum, item) => sum + item.amount, 0);
  const totalTasks = earnings.reduce((sum, item) => sum + item.tasks, 0);
  const avgPerTask = totalEarnings / totalTasks;

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Earnings Management</h1>
        <button className="flex items-center cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 shadow-lg rounded-lg">
          <div className="flex flex-row items-center space-y-0 pb-2">
            <div className="text-sm font-medium">Total Earnings</div>
            <DollarSign className="w-4 h-4 text-gray-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">
              ${totalEarnings.toLocaleString()}
            </div>
            <p className="text-xs text-gray-500">+12% from last period</p>
          </div>
        </div>

        <div className="p-4 shadow-lg rounded-lg">
          <div className="flex flex-row items-center  space-y-0 pb-2">
            <div className="text-sm font-medium">Completed Tasks</div>
            <FileText className="w-4 h-4 text-gray-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">{totalTasks}</div>
            <p className="text-xs text-gray-500">Last 6 months</p>
          </div>
        </div>

        <div className="p-4 shadow-lg rounded-lg">
          <div className="flex flex-row items-center  space-y-0 pb-2">
            <div className="text-sm font-medium">Average per Task</div>
            <TrendingUp className="w-4 h-4 text-gray-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">${avgPerTask.toFixed(2)}</div>
            <p className="text-xs text-gray-500">Based on total earnings</p>
          </div>
        </div>
      </div>

      {/* Earnings Chart */}

      <div className="p-3">
        <div>
          <div className="py-5 text-2xl">Earnings Overview</div>
          <div className="flex space-x-2 pb-4">
            <button
              className={`px-3 py-1 rounded-md cursor-pointer ${
                selectedPeriod === "month"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100"
              }`}
              onClick={() => setSelectedPeriod("month")}
            >
              Monthly
            </button>
            <button
              className={`px-3 py-1 rounded-md cursor-pointer ${
                selectedPeriod === "week"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100"
              }`}
              onClick={() => setSelectedPeriod("week")}
            >
              Weekly
            </button>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={earnings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Payments */}
      <div className="overflow-x-auto px-5">
        <table className="w-full">
          <caption className="py-5 text-2xl">Recent Payments</caption>
          <thead className="shadow-md">
            <tr className="text-left">
              <th className="p-4">Task</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentPayments.map((payment) => (
              <tr key={payment.id} className="shadow-lg">
                <td>{payment.task}</td>
                <td>${payment.amount}</td>
                <td>{new Date(payment.date).toLocaleDateString()}</td>
                <td className="py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      payment.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EarningsManagement;
