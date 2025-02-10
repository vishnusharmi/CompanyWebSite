import { useState } from "react";
import Modal from "react-modal";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function TaskManagement() {
  const initialTasks = [
    { id: 1, title: "Fix UI Bug", assignedTo: "John Doe", status: "In Progress", deadline: "2025-02-10" },
    { id: 2, title: "Deploy API", assignedTo: "Jane Smith", status: "Completed", deadline: "2025-02-05" },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [formData, setFormData] = useState({ title: "", assignedTo: "", status: "Pending", deadline: "" });

  const openModal = () => {
    setFormData({ title: "", assignedTo: "", status: "Pending", deadline: "" });
    setModalOpen(true);
  };

  const openEditModal = (task) => {
    setSelectedTask(task);
    setFormData(task);
    setEditModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTask) {
      setTasks((prev) =>
        prev.map((task) => (task.id === selectedTask.id ? { ...formData, id: selectedTask.id } : task))
      );
    } else {
      setTasks((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Task Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={openModal}>
          Assign Task
        </button>
      </div>

      <table className="min-w-full bg-white mt-4 shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Assigned To</th>
            <th className="p-2">Status</th>
            <th className="p-2">Deadline</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t">
              <td className="p-2">{task.title}</td>
              <td className="p-2">{task.assignedTo}</td>
              <td className="p-2">{task.status}</td>
              <td className="p-2">{task.deadline}</td>
              <td className="p-2">
                <button className="text-blue-600 mr-6" onClick={() => openEditModal(task)}>
                <FaEdit />
                </button>
                <button className="text-red-600" onClick={() => handleDelete(task.id)}>
                <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Assign Task Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold">Assign Task</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <label className="block mt-4 mb-2">Assigned To:</label>
          <input
            type="text"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <label className="block mt-4 mb-2">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <label className="block mt-4 mb-2">Deadline:</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <div className="flex justify-end mt-4">
            <button type="button" className="bg-gray-400 px-4 py-2 rounded mr-2" onClick={closeModal}>
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Assign
            </button>
          </div>
        </form>
        </div>
      </Modal>

      {/* Edit Task Modal */}
      <Modal
        isOpen={editModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold">Edit Task</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <label className="block mt-4 mb-2">Assigned To:</label>
          <input
            type="text"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <label className="block mt-4 mb-2">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <label className="block mt-4 mb-2">Deadline:</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <div className="flex justify-end mt-4">
            <button type="button" className="bg-gray-400 px-4 py-2 rounded mr-2" onClick={closeModal}>
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Update
            </button>
          </div>
        </form>
        </div>
      </Modal>
    </div>
  );
}

export default TaskManagement;
