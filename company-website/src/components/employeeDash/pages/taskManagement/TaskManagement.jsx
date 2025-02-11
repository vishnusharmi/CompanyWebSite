import React, { useState } from "react";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Website Redesign",
      description: "Update the company website with new branding guidelines",
      status: "in-progress",
      dueDate: "2025-03-01",
      progress: 60,
      priority: "high",
    },
    {
      id: 2,
      title: "Q1 Report Analysis",
      description: "Analyze Q1 performance metrics and prepare summary",
      status: "pending",
      dueDate: "2025-02-28",
      progress: 20,
      priority: "medium",
    },
    {
      id: 3,
      title: "Q1 Report Analysis",
      description: "Analyze Q1 performance metrics and prepare summary",
      status: "completed",
      dueDate: "2025-02-28",
      progress: 20,
      priority: "low",
    },
    {
      id: 4,
      title: "Q1 Report Analysis",
      description: "Analyze Q1 performance metrics and prepare summary",
      status: "completed",
      dueDate: "2025-02-28",
      progress: 20,
      priority: "low",
    },
    {
      id: 5,
      title: "Q1 Report Analysis",
      description: "Analyze Q1 performance metrics and prepare summary",
      status: "completed",
      dueDate: "2025-02-28",
      progress: 20,
      priority: "low",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
    progress: 0,
    priority: "",
  });

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "all" || task.status === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityBadgeColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setFormData({
      title: task.title,
      description: task.description,
      status: task.status,
      dueDate: task.dueDate,
      progress: task.progress,
      priority: task.priority,
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map((task) =>
      task.id === editingTask.id ? { ...task, ...formData } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className="sticky top-0 ">
        <h1 className="text-3xl font-bold text-gray-900 mb-5">My Tasks</h1>

        {/* Search and Filter Section */}
        <div className="flex gap-4 mb-5">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:border-gray-600"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Tasks</option>
            <option value="in-progress">In Progress</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="max-h-[450px] overflow-y-scroll">
        {/* Task Cards Section */}
        <div className="space-y-3 ">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-5 transition-all hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {task.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{task.description}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeColor(
                    task.status
                  )}`}
                >
                  {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                </span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-gray-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      Due {new Date(task.dueDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="w-32">
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {task.progress}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityBadgeColor(
                    task.priority
                  )}`}
                >
                  {task.priority.charAt(0).toUpperCase() +
                    task.priority.slice(1)}{" "}
                  Priority
                </span>
                <button
                  onClick={() => handleEdit(task)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Edit Task Form (Modal) */}
      {editingTask && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setEditingTask(null)}
              className="cursor-pointer absolute top-5 right-5 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={formData.title}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={formData.description}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={formData.status}
                  onChange={handleFormChange}
                  required
                >
                  <option value="in-progress">In Progress</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="priority"
                  className="block text-sm font-medium text-gray-700"
                >
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={formData.priority}
                  onChange={handleFormChange}
                  required
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="dueDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={formData.dueDate}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="progress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Progress
                </label>
                <input
                  type="number"
                  id="progress"
                  name="progress"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={formData.progress}
                  onChange={handleFormChange}
                  min="0"
                  max="100"
                  required
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setEditingTask(null)}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskManagement;