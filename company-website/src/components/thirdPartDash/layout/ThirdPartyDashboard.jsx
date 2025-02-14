import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const EmployeeDashboard = () => {
  // Sample data for the line chart
  const chartData = Array.from({ length: 12 }, (_, i) => ({
    month: `M${i + 1}`,
    value1: Math.floor(Math.random() * 300) + 100,
    value2: Math.floor(Math.random() * 300) + 100,
  }));

  return (
    <div className="p-6 bg-gray-50 max-h-[500px] overflow-y-scroll">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Invoice */}
        <div className="bg-white p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 text-xs">$</span>
            </div>
            <span className="text-sm text-gray-600">
              Invoice Awaiting Payment
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold">45/76</span>
            <span className="text-sm text-gray-500">USD</span>
          </div>
          <div className="w-full h-1 bg-blue-100 rounded mt-4">
            <div className="w-3/5 h-full bg-blue-600 rounded"></div>
          </div>
          <span className="text-sm text-gray-500 mt-2 block">$5,568</span>
        </div>

        {/* Converted Leads */}
        <div className="bg-white p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
              <span className="text-orange-600 text-xs">⚡</span>
            </div>
            <span className="text-sm text-gray-600">Converted Leads</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold">48/86</span>
          </div>
          <div className="w-full h-1 bg-orange-100 rounded mt-4">
            <div className="w-4/6 h-full bg-orange-500 rounded"></div>
          </div>
          <span className="text-sm text-gray-500 mt-2 block">
            52 Completed (60%)
          </span>
        </div>

        {/* Projects */}
        <div className="bg-white p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-xs">📊</span>
            </div>
            <span className="text-sm text-gray-600">Projects in Progress</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold">16/20</span>
          </div>
          <div className="w-full h-1 bg-green-100 rounded mt-4">
            <div className="w-4/5 h-full bg-green-500 rounded"></div>
          </div>
          <span className="text-sm text-gray-500 mt-2 block">
            16 Completed (80%)
          </span>
        </div>

        {/* Conversion Rate */}
        <div className="bg-white p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 text-xs">📈</span>
            </div>
            <span className="text-sm text-gray-600">Conversion Rate</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold">46.59%</span>
          </div>
          <div className="w-full h-1 bg-red-100 rounded mt-4">
            <div className="w-1/2 h-full bg-red-500 rounded"></div>
          </div>
          <span className="text-sm text-gray-500 mt-2 block">$2,254</span>
        </div>
      </div>

      {/* Chart and Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="md:col-span-2 bg-white p-4">
          <h3 className="text-lg font-semibold mb-6">Payment Record</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value1"
                  stroke="#E5E7EB"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="value2"
                  stroke="#4F46E5"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6 border-t pt-4">
            <div>
              <p className="text-sm text-gray-500">Available</p>
              <p className="font-semibold">$5,456</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="font-semibold text-green-600">$9,275</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="font-semibold text-red-600">$3,868</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Revenue</p>
              <p className="font-semibold">$50,868</p>
            </div>
          </div>
        </div>

        {/* Sales */}
        <div className="bg-white p-4">
          <div className="bg-blue-600 text-white p-4 rounded-lg mb-6">
            <h3 className="text-sm font-medium mb-2">Total Sales</h3>
            <p className="text-2xl font-bold">30,569</p>
            <div className="w-full h-24 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <Line
                    type="monotone"
                    dataKey="value1"
                    stroke="#ffffff"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🛍️</span>
                </div>
                <div>
                  <p className="font-medium">Shopify eCommerce Store</p>
                  <p className="text-sm text-gray-500">Development</p>
                </div>
              </div>
              <p className="font-semibold">$1050</p>
            </div>
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">📱</span>
                </div>
                <div>
                  <p className="font-medium">iOS App Development</p>
                  <p className="text-sm text-gray-500">Development</p>
                </div>
              </div>
              <p className="font-semibold">$1450</p>
            </div>
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🎨</span>
                </div>
                <div>
                  <p className="font-medium">Figma Dashboard Design</p>
                  <p className="text-sm text-gray-500">UI/UX Design</p>
                </div>
              </div>
              <p className="font-semibold">$1350</p>
            </div>
          </div>
          <button className="w-full mt-6 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 font-medium">
            FULL DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
