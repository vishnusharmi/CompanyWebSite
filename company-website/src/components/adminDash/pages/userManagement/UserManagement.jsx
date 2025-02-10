import React, { useState } from 'react';
import { UserPlus, Edit, UserX, Search, CheckCircle, XCircle } from 'lucide-react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Employee', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@external.com', role: 'Third-party', status: 'Inactive' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const roles = ['Admin', 'Employee', 'Third-party'];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <div className="absolute inset-0 flex ml-60 items-center  justify-center bg-black/70 z-50">
        <div className="bg-white rounded-lg w-full max-w-xl">
          <div className="p-6"> 
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    );
  };

  const UserForm = ({ user, onSubmit, title }) => {
    const [formData, setFormData] = useState(user || {
    profileImage: null,
    name: '',
    email: '',
    phone: '',
    role: '',
    status: '',
    password: '',
    });

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData({ ...formData, profileImage: file });
    };
  
    const generatePassword = () => {
      const newPassword = Math.random().toString(36).slice(-8);
      setFormData({ ...formData, password: newPassword });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className='flex gap-4'>
          <div className='w-full'>
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 mt-1 focus:outline-none"
              required
            />
          </div>
          <div className='w-full'>
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 mt-1 focus:outline-none"
              required
            />
          </div>
          </div>
          <div className='flex gap-4'>
          <div className='w-full'>
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none"
            >
            <option value="" disabled>Select a Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
         

          <div className='w-full'>
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Role
            </label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none"
            >
                <option value="" disabled>Select a role</option>
              {roles.map(role => (
                <>
                <option key={role} value={role}>{role}</option>
                </>
              ))}
            </select>
          </div>
          </div>
          <div>
          <label className="text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none"
            required
          />
        </div>

          <div>
          <label className="text-sm font-medium ">Password</label>
          <div className="flex">
            <input
              type="text"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={generatePassword}
              className="ml-2 px-3 py-2 bg-gray-200 rounded-md text-sm"
            >
              Generate
            </button>
          </div>
        </div>
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50"
        >
          {title}
        </button>
      </form>
    );
  };

  const handleAddUser = (userData) => {
    setUsers([...users, { ...userData, id: users.length + 1 }]);
    setIsAddDialogOpen(false);
  };

  const handleEditUser = (userData) => {
    setUsers(users.map(user => 
      user.id === selectedUser.id ? { ...userData, id: user.id } : user
    ));
    setIsEditDialogOpen(false);
  };

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user =>
      user.id === userId
        ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
        : user
    ));
  };

  return (
    <div className="w-full min-h-screen max-w-7xl mx-auto bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="relative flex-1 w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            onClick={() => setIsAddDialogOpen(true)}
            className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none"
          >
            <UserPlus className="h-4 w-4" />
            Add User
          </button>
        </div>

        <div className="relative overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Email</th>
                <th className="px-6 py-3 font-medium">Role</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map(user => (
                <tr key={user.id} className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 text-gray-500">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      user.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
                      user.role === 'Employee' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5">
                      {user.status === 'Active' ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                      <span className={`text-sm ${
                        user.status === 'Active' ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {user.status}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setIsEditDialogOpen(true);
                        }}
                        className="text-gray-400 hover:text-gray-900 focus:outline-none"
                      >
                        <Edit className="h-4 w-4" />
                        
                      </button>
                      <button
                        onClick={() => toggleUserStatus(user.id)}
                        className="text-gray-400 hover:text-gray-900 focus:outline-none"
                      >
                        <UserX className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        title="Add New User"
      >
        <UserForm onSubmit={handleAddUser} title="Add User" />
      </Modal>

      <Modal
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        title="Edit User"
      >
        {selectedUser && (
          <UserForm user={selectedUser} onSubmit={handleEditUser} title="Save Changes" />
        )}
      </Modal>
    </div>
  );
};

export default UserManagement;