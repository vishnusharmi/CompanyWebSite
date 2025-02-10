import React, { useState } from 'react';
import { 
  Download, 
  DollarSign, 
  FileText, 
  BarChart2, 
  Calendar,
  Filter,
  Plus,
  Printer,
  Search
} from 'lucide-react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


import { X, Save, Upload } from 'lucide-react';
const FinancialManagement = () => {
  // Sample financial data
  const [earnings, setEarnings] = useState([
    {
      id: 1,
      name: "John Doe",
      type: "employee",
      currentMonth: 5000,
      lastMonth: 4800,
      ytd: 58000,
      status: "paid",
      lastPayment: "2025-02-01"
    },
    {
      id: 2,
      name: "TechCorp Services",
      type: "company",
      currentMonth: 12500,
      lastMonth: 11800,
      ytd: 145000,
      status: "pending",
      lastPayment: "2025-01-15"
    }
  ]);

  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [filterType, setFilterType] = useState('all');

  // Sample data for the earnings chart
  // const chartData = [
  //   { name: 'Jan', employees: 45000, contractors: 65000 },
  //   { name: 'Feb', employees: 48000, contractors: 68000 },
  //   { name: 'Mar', employees: 52000, contractors: 72000 },
  // ];

  const generateInvoice = (id) => {
    console.log('Generating invoice for ID:', id);
  };

  const getStatusBadge = (status) => {
    const styles = {
      paid: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      overdue: 'bg-red-100 text-red-800'
    };
    return styles[status] || 'bg-gray-100 text-gray-800';
  };
const [formData, setFormData] = useState({
    name: '',
    type: 'employee',
    salary: '',
    paymentDate: '',
    status: 'pending',
    documents: []
  });
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setShowModal(false);  // Close the modal after submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formHandle = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };


  return (
    
    <div className={`p-6 max-w-7xl min-h-screen mx-auto ` }>
      {/* Header Section */}
      <div className="mb-8">
        <div className={`flex justify-between items-center mb-6 `}>
          <h1 className="text-2xl font-bold ">Financial Management</h1>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              <Download className="h-5 w-5 mr-2" />
              Export Reports
            </button>
            <button
              onClick={formHandle}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              New Payment
            </button>
          </div>
        </div>
        {/* {form} */}
        {/* bg-black/70 bg-opacity-50 */}
       
        {showModal && (
          <div className={`absolute inset-0 flex ml-60 items-center justify-center z-50  bg-black/70`}>
            <div className="bg-white rounded-lg p-6 shadow-lg bg-opacity-50 border  w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">New Financial Entry</h2>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name/Company</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="employee">Employee</option>
                      <option value="company">Company</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payment Amount</label>
                    <input
                      type="number"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payment Date</label>
                    <input
                      type="date"
                      name="paymentDate"
                      value={formData.paymentDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="pending">Pending</option>
                      <option value="paid">Paid</option>
                      <option value="overdue">Overdue</option>
                    </select>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end space-x-4 mt-8">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Save 
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Monthly Earnings</p>
                <h3 className="text-2xl font-bold">$87,500</h3>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-sm text-green-500 mt-2">↑ 12% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending Payments</p>
                <h3 className="text-2xl font-bold">$12,500</h3>
              </div>
              <FileText className="h-8 w-8 text-yellow-500" />
            </div>
            <p className="text-sm text-yellow-500 mt-2">3 invoices pending</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">YTD Payments</p>
                <h3 className="text-2xl font-bold">$203,000</h3>
              </div>
              <BarChart2 className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-sm text-blue-500 mt-2">↑ 8% from last year</p>
          </div>
        </div>

        {/* Earnings Chart */}
        {/* <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold mb-4">Earnings Overview</h2>
          <LineChart width={800} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="employees" stroke="#4F46E5" />
            <Line type="monotone" dataKey="contractors" stroke="#10B981" />
          </LineChart>
        </div> */}

        {/* Filters */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <div className="relative">
              <select 
                className="pl-10 pr-4 py-2 border rounded-lg appearance-none bg-white"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="employee">Employees</option>
                <option value="company">Companies</option>
              </select>
              <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="relative">
              <select 
                className="pl-10 pr-4 py-2 border rounded-lg appearance-none bg-white"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Earnings Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name/Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Month
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Month
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  YTD
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {earnings.map((entry) => (
               <tr key={entry.id} className="hover:bg-gray-50">
               <td className="px-6 py-4">
                 <div className="text-sm font-medium text-gray-900">{entry.name}</div>
               </td>
               <td className="px-6 py-4">
                 <span className={`px-2 py-1 text-xs rounded-full ${
                   entry.type === 'employee' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                 }`}>
                   {entry.type}
                 </span>
               </td>
               <td className="px-6 py-4">
                 <div className="text-sm text-gray-900">${entry.currentMonth.toLocaleString()}</div>
               </td>
               <td className="px-6 py-4">
                 <div className="text-sm text-gray-900">${entry.lastMonth.toLocaleString()}</div>
               </td>
               <td className="px-6 py-4">
                 <div className="text-sm text-gray-900">${entry.ytd.toLocaleString()}</div>
               </td>
               <td className="px-6 py-4">
                 <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(entry.status)}`}>
                   {entry.status}
                 </span>
               </td>
               <td className="px-6 py-4">
                 <div className="flex space-x-2">
                 <button 
    onClick={() => generateInvoice(entry.id)} 
    className="p-1 hover:bg-gray-100 rounded" 
    title="File"
  >
    <FileText className="h-5 w-5 text-blue-600" />
  </button>
  <button className="p-1 hover:bg-gray-100 rounded" title="Printer">
    <Printer className="h-5 w-5 text-gray-600" />
  </button>
</div>
               </td>
             </tr>             
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
  
  );
};

export default FinancialManagement;