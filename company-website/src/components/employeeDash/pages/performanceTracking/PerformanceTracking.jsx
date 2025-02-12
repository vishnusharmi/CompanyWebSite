import CountUp from "react-countup";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Check, Clock, Activity } from "lucide-react";

const PerformanceTracking = () => {
  const metrics = {
    totalTasks: 156,
    completedTasks: 142,
    avgEfficiency: 93,
    onTimeDelivery: 91,
  };

  const performanceData = [
    { month: "Jan", efficiency: 89 },
    { month: "Feb", efficiency: 92 },
    { month: "Mar", efficiency: 94 },
    { month: "Apr", efficiency: 91 },
    { month: "May", efficiency: 96 },
    { month: "Jun", efficiency: 95 },
    { month: "Jul", efficiency: 90 },
    { month: "Aug", efficiency: 93 },
    { month: "Sep", efficiency: 92 },
    { month: "Oct", efficiency: 94 },
    { month: "Nov", efficiency: 91 },
    { month: "Dec", efficiency: 95 },
  ];

  const taskHistory = [
    {
      id: 1,
      title: "Website Redesign",
      completedDate: "2025-02-10",
      timeSpent: "4d 3h",
      efficiency: 95,
      status: "Completed",
    },
    {
      id: 2,
      title: "Q1 Report Analysis",
      completedDate: "2025-02-08",
      timeSpent: "2d 5h",
      efficiency: 88,
      status: "Completed",
    },
    {
      id: 3,
      title: "Client Presentation",
      completedDate: "2025-02-05",
      timeSpent: "1d 6h",
      efficiency: 92,
      status: "Completed",
    },
  ];

  return (
    <div className="w-full max-w-6xl space-y-6 p-4">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Tasks</p>
              <p className="text-2xl font-bold">
                <CountUp end={metrics.totalTasks} duration={2} />
              </p>
            </div>
            <div className="p-2 bg-blue-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Completed</p>
              <p className="text-2xl font-bold">
                <CountUp end={metrics.completedTasks} duration={2} />
              </p>
            </div>
            <div className="p-2 bg-green-100 rounded-full">
              <Check className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Efficiency</p>
              <p className="text-2xl font-bold">
                <CountUp end={metrics.avgEfficiency} duration={2} suffix="%" />
              </p>
            </div>
            <div className="p-2 bg-purple-100 rounded-full">
              <Activity className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                On-time Delivery
              </p>
              <p className="text-2xl font-bold">
                <CountUp end={metrics.onTimeDelivery} duration={2} suffix="%" />
              </p>
            </div>
            <div className="p-2 bg-yellow-100 rounded-full">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Efficiency Overview */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Efficiency Overview</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="efficiency"
                stroke="#8b5cf6"
                name="Efficiency %"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Task History */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Recent Task History</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left py-3 px-4 border-b">Task</th>
                <th className="text-left py-3 px-4 border-b">Completed Date</th>
                <th className="text-left py-3 px-4 border-b">Time Spent</th>
                <th className="text-left py-3 px-4 border-b">Efficiency</th>
                <th className="text-left py-3 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {taskHistory.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">{task.title}</td>
                  <td className="py-3 px-4 border-b">{task.completedDate}</td>
                  <td className="py-3 px-4 border-b">{task.timeSpent}</td>
                  <td className="py-3 px-4 border-b">{task.efficiency}%</td>
                  <td className="py-3 px-4 border-b">
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        task.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTracking;
