import { useState, useEffect } from "react";
import Modal from "react-modal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const initialUsers = [
  { id: 1, name: "John Doe", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
];

const initialPermissions = {
  Admin: ["Manage Users", "Edit Content", "View Reports"],
  Editor: ["Edit Content", "View Reports"],
  User: ["View Reports"],
};

function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [permissions, setPermissions] = useState(initialPermissions);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", role: "User", status: "Active" });

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    } else {
      setFormData({ name: "", role: "User", status: "Active" });
    }
  }, [selectedUser]);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => setIsEditModalOpen(false);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, isEditing) => {
    e.preventDefault();
    setUsers((prev) => {
      if (isEditing) {
        return prev.map((u) => (u.id === selectedUser.id ? formData : u));
      } else {
        return [...prev, { ...formData, id: Date.now() }];
      }
    });
    isEditing ? closeEditModal() : closeAddModal();
  };

  return (
    <div className="p-4 min-h-screen">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">User Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={openAddModal}>
          Add User
        </button>
      </div>
      <table className="min-w-full bg-white mt-4 shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">{user.status}</td>
              <td className="p-2">
                <button className="text-blue-600 mr-6" onClick={() => openEditModal(user)}>
                <FaEdit />
                </button>
                <button className="text-red-600" onClick={() => handleDelete(user.id)}>
                <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add User Modal */}
      <Modal isOpen={isAddModalOpen} onRequestClose={closeAddModal} className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold">Add User</h2>
        <form onSubmit={(e) => handleSubmit(e, false)} className="mt-4">
          <label className="block mb-2">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />

          <label className="block mt-4 mb-2">Role:</label>
          <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="User">User</option>
          </select>

          <label className="block mt-4 mb-2">Status:</label>
          <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <div className="flex justify-end mt-4">
            <button type="button" className="bg-gray-400 px-4 py-2 rounded mr-2" onClick={closeAddModal}>Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
          </div>
        </form>
        </div>
      </Modal>

      {/* Edit User Modal */}
      <Modal isOpen={isEditModalOpen} onRequestClose={closeEditModal} className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold">Edit User</h2>
        <form onSubmit={(e) => handleSubmit(e, true)} className="mt-4">
          <label className="block mb-2">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />

          <label className="block mt-4 mb-2">Role:</label>
          <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="User">User</option>
          </select>

          <label className="block mt-4 mb-2">Status:</label>
          <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <div className="flex justify-end mt-4">
            <button type="button" className="bg-gray-400 px-4 py-2 rounded mr-2" onClick={closeEditModal}>Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
          </div>
        </form>
        </div>
      </Modal>
    </div>
  );
}

export default UserManagement;
