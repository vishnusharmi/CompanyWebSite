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
import { X, Save, Upload } from 'lucide-react';

const FinancialManagement = () => {
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
  const [formData, setFormData] = useState({
    name: '',
    type: 'employee',
    salary: '',
    paymentDate: '',
    status: 'pending',
    documents: []
  });
  const [showModal, setShowModal] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setShowModal(false);
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
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto min-h-screen">
      {/* Header Section */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6">
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">Financial Management</h1>
          <div className="flex space-x-2 md:space-x-4">
            <button className="flex items-center px-3 py-1 md:px-4 md:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              <Download className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              <span className="text-sm md:text-base">Export Reports</span>
            </button>
            <button
              onClick={formHandle}
              className="flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              <span className="text-sm md:text-base">New Payment</span>
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 ml-60 flex items-center justify-center z-50 bg-black/70">
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg w-full max-w-md mx-4">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold">New Financial Entry</h2>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name/Company</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="pending">Pending</option>
                      <option value="paid">Paid</option>
                      <option value="overdue">Overdue</option>
                    </select>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end space-x-2 md:space-x-4 mt-4 md:mt-6">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3 py-1 md:px-4 md:py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Monthly Earnings</p>
              <h3 className="text-xl md:text-2xl font-bold">$87,500</h3>
            </div>
            <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
          </div>
          <p className="text-sm text-green-500 mt-2">↑ 12% from last month</p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Payments</p>
              <h3 className="text-xl md:text-2xl font-bold">$12,500</h3>
            </div>
            <FileText className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />
          </div>
          <p className="text-sm text-yellow-500 mt-2">3 invoices pending</p>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">YTD Payments</p>
              <h3 className="text-xl md:text-2xl font-bold">$203,000</h3>
            </div>
            <BarChart2 className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
          </div>
          <p className="text-sm text-blue-500 mt-2">↑ 8% from last year</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-row md:flex-row justify-between items-center mb-4 md:mb-6 space-y-4 md:space-y-0">
        <div className="flex flex-row sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4">
          <div className="relative">
            <select 
              className="pl-8 pr-4 py-2 border rounded-lg appearance-none bg-white"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="employee">Employees</option>
              <option value="company">Companies</option>
            </select>
            <Filter className="absolute left-2 top-2.5 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
          </div>

          <div className="relative">
            <select 
              className="pl-8 pr-4 py-2 border rounded-lg appearance-none bg-white"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
            <Calendar className="absolute left-2 top-2.5 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-2 top-2.5 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
        </div>
      </div>

      {/* Earnings Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Name/Company
              </th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Current Month
              </th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Last Month
              </th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                YTD
              </th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {earnings.map((entry) => (
              <tr key={entry.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 md:px-6 md:py-4">
                  <div className="text-sm md:text-base font-medium text-gray-900">{entry.name}</div>
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    entry.type === 'employee' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {entry.type}
                  </span>
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4">
                  <div className="text-sm md:text-base text-gray-900">${entry.currentMonth.toLocaleString()}</div>
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4">
                  <div className="text-sm md:text-base text-gray-900">${entry.lastMonth.toLocaleString()}</div>
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4">
                  <div className="text-sm md:text-base text-gray-900">${entry.ytd.toLocaleString()}</div>
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(entry.status)}`}>
                    {entry.status}
                  </span>
                </td>
                <td className="px-4 py-2 md:px-6 md:py-4">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => generateInvoice(entry.id)} 
                      className="p-1 hover:bg-gray-100 rounded" 
                      title="File"
                    >
                      <FileText className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded" title="Printer">
                      <Printer className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
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