import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function ContentManagement() {
  const [content, setContent] = useState([
    { id: 1, title: "Our Services", description: "We offer top-quality solutions.", status: "Published" },
    { id: 2, title: "About Us", description: "Learn more about our company.", status: "Draft" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "", status: "Draft" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (!modalOpen && !editModalOpen) {
      setFormData({ title: "", description: "", status: "Draft" });
      setEditingId(null);
    }
  }, [modalOpen, editModalOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    setContent((prev) => [...prev, { ...formData, id: Date.now() }]);
    setModalOpen(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setContent((prev) => prev.map((item) => (item.id === editingId ? { ...formData, id: editingId } : item)));
    setEditModalOpen(false);
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
    setEditModalOpen(true);
  };

  const handleDelete = (id) => {
    setContent((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Content Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setModalOpen(true)}>
          Add Content
        </button>
      </div>

      <table className="min-w-full bg-white mt-4 shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {content.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-2">{item.title}</td>
              <td className="p-2">{item.status}</td>
              <td className="p-2">
                <button className="text-blue-600 mr-6" onClick={() => handleEdit(item)}>
                <FaEdit />
                </button>
                <button className="text-red-600" onClick={() => handleDelete(item.id)}>
                <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Content Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold">Add Content</h2>
        <form onSubmit={handleAddSubmit} className="mt-4">
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <label className="block mt-4 mb-2">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>

          <label className="block mt-4 mb-2">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>

          <div className="flex justify-end mt-4">
            <button type="button" className="bg-gray-400 px-4 py-2 rounded mr-2" onClick={() => setModalOpen(false)}>
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Add
            </button>
          </div>
        </form>
        </div>
      </Modal>

      {/* Edit Content Modal */}
      <Modal
        isOpen={editModalOpen}
        onRequestClose={() => setEditModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold">Edit Content</h2>
        <form onSubmit={handleEditSubmit} className="mt-4">
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <label className="block mt-4 mb-2">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>

          <label className="block mt-4 mb-2">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>

          <div className="flex justify-end mt-4">
            <button type="button" className="bg-gray-400 px-4 py-2 rounded mr-2" onClick={() => setEditModalOpen(false)}>
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

export default ContentManagement;
