import React, { useState, useEffect } from 'react';
import { 
  Download,
  Filter,
  Plus,
  Search,
  X,
  Pencil,
  Trash2,
  AlertCircle
} from 'lucide-react';

const TaskManagement = () => {
  // ----- Task State -----
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Website Redesign",
      assignedTo: "John Doe",
      assigneeType: "employee",
      deadline: "2025-02-15",
      status: "in-progress",
      progress: 65,
      priority: "high"
    },
    {
      id: 2,
      title: "Server Maintenance",
      assignedTo: "TechCorp Inc",
      assigneeType: "company",
      deadline: "2025-02-20",
      status: "pending",
      progress: 0,
      priority: "medium"
    }
  ]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage on every update
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // ----- Other States -----
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // New Task Modal state
  const [newTask, setNewTask] = useState({
    title: '',
    assignedTo: '',
    assigneeType: 'employee',
    deadline: '',
    status: 'pending',
    progress: 0,
    priority: 'low'
  });
  const [showAddTask, setShowAddTask] = useState(false);

  // Edit Task Modal state
  const [editTask, setEditTask] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // Delete Confirmation Modal state
  const [itemToDelete, setItemToDelete] = useState(null);

  // ----- Helper Functions -----
  const getStatusColor = (status) => {
    const colors = {
      'completed': 'bg-green-100 text-green-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      'pending': 'bg-yellow-100 text-yellow-800',
      'overdue': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'medium':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
    }
  };

  const getProgressBarColor = (progress) => {
    if (progress <= 20) return 'bg-red-600';
    if (progress < 80) return 'bg-blue-600';
    return 'bg-green-600';
  };

  const generateReport = () => {
    const headers = ["ID", "Title", "Assigned To", "Assignee Type", "Deadline", "Status", "Progress", "Priority"];
    const rows = tasks.map(task => [
      task.id,
      `"${task.title}"`,
      `"${task.assignedTo}"`,
      task.assigneeType,
      task.deadline,
      task.status,
      task.progress,
      task.priority
    ]);
    const csvContent = [headers, ...rows].map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'task_report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ----- New Task Modal Handlers -----
  const handleAddTask = () => {
    if (
      newTask.title.trim() === '' || 
      newTask.assignedTo.trim() === '' || 
      newTask.deadline.trim() === ''
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    setTasks([...tasks, { ...newTask, id: newId }]);
    setNewTask({
      title: '',
      assignedTo: '',
      assigneeType: 'employee',
      deadline: '',
      status: 'pending',
      progress: 0,
      priority: 'low'
    });
    setShowAddTask(false);
  };

  // ----- Edit Task Modal Handlers -----
  const openEditModal = (task) => {
    setEditTask(task);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTask(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === editTask.id ? { ...editTask } : task
      )
    );
    setShowEditModal(false);
    setEditTask(null);
  };

  // ----- Delete Modal Handlers -----
  const handleDelete = (task) => {
    setItemToDelete(task);
  };

  const handleDeleteConfirm = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    setItemToDelete(null);
  };

  const handleDeleteCancel = () => {
    setItemToDelete(null);
  };

  // ----- Filtering Tasks -----
  const filteredTasks = tasks.filter(task => 
    (filterStatus === 'all' || task.status === filterStatus) &&
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main container with relative positioning so modals appear only in this area.
    <div className="p-6 max-w-7xl min-h-screen relative">
      {/* --- New Task Modal --- */}
      {showAddTask && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg border relative w-full max-w-md">
            <button 
              onClick={() => setShowAddTask(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
                <input 
                  type="text" 
                  placeholder="Enter task title" 
                  value={newTask.title} 
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assigned To</label>
                <input 
                  type="text" 
                  placeholder="Enter assignee name" 
                  value={newTask.assignedTo} 
                  onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                <input 
                  type="date" 
                  value={newTask.deadline} 
                  onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                <select
                  value={newTask.priority}
                  onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  onClick={() => setShowAddTask(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddTask}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- Edit Task Modal --- */}
      {showEditModal && editTask && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg border relative w-full max-w-md">
            <button 
              onClick={() => { setShowEditModal(false); setEditTask(null); }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <form onSubmit={handleEditSubmit}>
              {/* Pre-populated fields similar to the New Task modal */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
                <input 
                  type="text"
                  name="title"
                  value={editTask.title}
                  onChange={handleEditChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Assigned To</label>
                <input 
                  type="text"
                  name="assignedTo"
                  value={editTask.assignedTo}
                  onChange={handleEditChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                <input 
                  type="date"
                  name="deadline"
                  value={editTask.deadline}
                  onChange={handleEditChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                <select
                  name="priority"
                  value={editTask.priority}
                  onChange={handleEditChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              {/* The Status dropdown */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  name="status"
                  value={editTask.status}
                  onChange={handleEditChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>
              <div className="flex justify-end gap-4">
                <button 
                  type="button"
                  onClick={() => { setShowEditModal(false); setEditTask(null); }}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- Delete Confirmation Modal --- */}
      {itemToDelete && (
        <div className="absolute inset-0 flex justify-center items-center bg-black/65 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this item?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleDeleteCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteConfirm(itemToDelete.id)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- Header and Controls --- */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Task Management</h1>
          <div className="flex space-x-4">
            <button 
              onClick={generateReport}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Download className="h-5 w-5 mr-2" />
              Export Report
            </button>
            <button 
              onClick={() => setShowAddTask(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              New Task
            </button>
          </div>
        </div>

        {/* --- Filter and Search --- */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <div className="relative">
              <select 
                className="pl-10 pr-4 py-2 border rounded-lg appearance-none bg-white"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="overdue">Overdue</option>
              </select>
              <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search tasks..."
                className="pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* --- Tasks Table --- */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTasks.map(task => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{task.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{task.assignedTo}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{task.deadline}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(task.status)}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`${getProgressBarColor(task.progress)} h-2.5 rounded-full`}
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{task.progress}%</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <div className="flex items-center">
                      {getPriorityIcon(task.priority)}
                      <span className="ml-2 text-sm text-gray-900">{task.priority}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => openEditModal(task)}
                        className="p-2 hover:bg-gray-100 rounded"
                      >
                        <Pencil className="h-5 w-5 text-blue-600" />
                      </button>
                      <button 
                        onClick={() => handleDelete(task)}
                        className="p-2 hover:bg-gray-100 rounded"
                      >
                        <Trash2 className="h-5 w-5 text-red-600" />
                      </button>
                    </div>
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

export default TaskManagement;
