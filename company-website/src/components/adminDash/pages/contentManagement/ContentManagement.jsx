import React, { useState } from "react";
import {
  Pencil,
  Trash2,
  Plus,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";

// A simple button for each tab.
const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
      active
        ? "bg-blue-600 text-white"
        : "bg-gray-200 hover:bg-gray-300 text-gray-700"
    }`}
  >
    {children}
  </button>
);

// Table header cell with a sort button (if sortable).
const TableHeader = ({ label, sortable, sortDirection, onSort }) => (
  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
    <div className="flex items-center gap-2">
      <span>{label}</span>
      {sortable && (
        <button
          className="p-2 hover:bg-gray-100 rounded transition-colors duration-200"
          onClick={onSort}
        >
          {sortDirection === "asc" ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : sortDirection === "desc" ? (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-300" />
          )}
        </button>
      )}
    </div>
  </th>
);

// Action buttons for each table row.
const ActionButtons = ({ onEdit, onDelete }) => (
  <div className="flex gap-2">
    <button
      onClick={onEdit}
      className="p-2 hover:bg-gray-100 rounded transition-colors duration-200"
    >
      <Pencil className="h-4 w-4 text-blue-600" />
    </button>
    <button
      onClick={onDelete}
      className="p-2 hover:bg-gray-100 rounded transition-colors duration-200"
    >
      <Trash2 className="h-4 w-4 text-red-600" />
    </button>
  </div>
);

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    lastModified: "",
    client: "",
    location: "",
    name: "",
    address: "",
    city: "",
    country: "",
  });

  const initialContent = {
    services: [
      {
        id: 1,
        title: "Web Development",
        description: "Full stack development services",
        status: "published",
        lastModified: "2025-02-10",
      },
      {
        id: 2,
        title: "UI/UX Design",
        description: "User interface design",
        status: "draft",
        lastModified: "2025-02-09",
      },
    ],
    projects: [
      {
        id: 1,
        title: "E-commerce Platform",
        client: "TechCorp",
        status: "completed",
        location: "New York",
      },
      {
        id: 2,
        title: "Mobile App",
        client: "StartupXYZ",
        status: "in-progress",
        location: "San Francisco",
      },
    ],
    locations: [
      {
        id: 1,
        name: "Headquarters",
        address: "123 Main St",
        city: "Boston",
        country: "USA",
      },
      {
        id: 2,
        name: "Branch Office",
        address: "456 Park Ave",
        city: "London",
        country: "UK",
      },
    ],
  };

  const [content, setContent] = useState(initialContent);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const tableHeaders = {
    services: ["Title", "Description", "Status", "Last Modified", "Actions"],
    projects: ["Title", "Client", "Status", "Location", "Actions"],
    locations: ["Name", "Address", "City", "Country", "Actions"],
  };

  const tableKeys = {
    services: ["title", "description", "status", "lastModified"],
    projects: ["title", "client", "status", "location"],
    locations: ["name", "address", "city", "country"],
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContent = content[activeTab].filter((item) => {
    return Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  let sortedContent = [...filteredContent];
  if (sortColumn) {
    sortedContent.sort((a, b) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      // Update existing item
      const updatedItem = { ...formData, id: editingId };
      setContent({
        ...content,
        [activeTab]: content[activeTab].map((item) =>
          item.id === editingId ? updatedItem : item
        ),
      });
    } else {
      // Add new item
      const newId = content[activeTab].length + 1;
      const newItem = { id: newId, ...formData };
      setContent({
        ...content,
        [activeTab]: [...content[activeTab], newItem],
      });
    }

    setFormData({
      title: "",
      description: "",
      status: "",
      lastModified: "",
      client: "",
      location: "",
      name: "",
      address: "",
      city: "",
      country: "",
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      ...item,
    });
    setShowForm(true);
  };

  const handleDelete = (item) => {
    setDeleteItemId(item.id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    const updatedContent = content[activeTab].filter(
      (el) => el.id !== deleteItemId
    );
    setContent({
      ...content,
      [activeTab]: updatedContent,
    });
    setShowDeleteConfirm(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setDeleteItemId(null);
  };

  return (
    <div className="max-w-7xl w-full  mx-auto bg-white min-h-screen rounded-xl shadow-xl p-6">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">
        Content Management
      </h1>

      <div className="flex gap-6 mb-8">
        {Object.keys(content).map((tab) => (
          <TabButton
            key={tab}
            active={activeTab === tab}
            onClick={() => {
              setActiveTab(tab);
              setSortColumn("");
              setSortDirection("asc");
              setSearchTerm("");
              setEditingId(null);
            }}
          >
            {tab}
          </TabButton>
        ))}
      </div>

      <div className="flex justify-between mb-6">
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center cursor-pointer gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="h-5 w-5" />
          Add New
        </button>
      </div>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {tableHeaders[activeTab].map((header, index) => (
                  <TableHeader
                    key={index}
                    label={header}
                    onSort={
                      header !== "Actions"
                        ? () => handleSort(tableKeys[activeTab][index])
                        : undefined
                    }
                  />
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sortedContent.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {tableKeys[activeTab].map((key, index) => (
                    <td key={index} className="px-6 py-4 text-sm text-gray-800">
                      {item[key]}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-sm">
                    <ActionButtons
                      onEdit={() => handleEdit(item)}
                      onDelete={() => handleDelete(item)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Form Modal for Editing or Adding */}
      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/70">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">
              {editingId ? "Edit" : "Add New"} {activeTab.slice(0, -1)}
            </h2>
            <form onSubmit={handleFormSubmit}>
              {/* Dynamic form fields */}
              {tableKeys[activeTab].map((key) => (
                <div key={key} className="mb-4">
                  <label
                    htmlFor={key}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={formData[key] || ""}
                    onChange={handleFormChange}
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
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

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-red-600">
              Are you sure you want to delete this item?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentManagement;
