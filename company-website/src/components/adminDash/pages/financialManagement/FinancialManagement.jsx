import { useState } from "react";
import Modal from "react-modal";

const initialEarnings = [
  { id: 1, name: "John Doe", amount: 5000, role: "Employee", status: "Paid" },
  { id: 2, name: "Jane Smith", amount: 3000, role: "Third-Party", status: "Pending" },
];

const initialInvoices = [
  { id: 1, client: "ABC Corp", amount: 15000, status: "Paid", date: "2025-02-01" },
  { id: 2, client: "XYZ Ltd", amount: 10000, status: "Pending", date: "2025-02-05" },
];

function FinancialManagement() {
  const [earnings, setEarnings] = useState(initialEarnings);
  const [invoices, setInvoices] = useState(initialInvoices);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleUpdateStatus = (id, newStatus) => {
    setEarnings(earnings.map(entry => (entry.id === id ? { ...entry, status: newStatus } : entry)));
  };

  const handleDownload = (invoice) => {
    const invoiceDetails = `Invoice ID: ${invoice.id}\nClient: ${invoice.client}\nAmount: $${invoice.amount}\nStatus: ${invoice.status}\nDate: ${invoice.date}`;
    const blob = new Blob([invoiceDetails], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Invoice-${invoice.id}.txt`;
    link.click();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Financial Management</h2>
      
      {/* Earnings Section */}
      <h3 className="text-lg font-semibold mt-4">Earnings</h3>
      <table className="min-w-full bg-white mt-2 shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
            <th className="p-2">Amount ($)</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {earnings.map((entry) => (
            <tr key={entry.id} className="border-t">
              <td className="p-2">{entry.name}</td>
              <td className="p-2">{entry.role}</td>
              <td className="p-2">{entry.amount}</td>
              <td className="p-2">{entry.status}</td>
              <td className="p-2">
                {entry.status === "Pending" && (
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    onClick={() => handleUpdateStatus(entry.id, "Paid")}
                  >
                    Mark as Paid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Invoices Section */}
      <h3 className="text-lg font-semibold mt-4">Invoices</h3>
      <table className="min-w-full bg-white mt-2 shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Client</th>
            <th className="p-2">Amount ($)</th>
            <th className="p-2">Status</th>
            <th className="p-2">Date</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-t">
              <td className="p-2">{invoice.client}</td>
              <td className="p-2">{invoice.amount}</td>
              <td className="p-2">{invoice.status}</td>
              <td className="p-2">{invoice.date}</td>
              <td className="p-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  onClick={() => handleDownload(invoice)}
                >
                  Download
                </button>
                <button
                  className="bg-gray-500 text-white px-3 py-1 rounded"
                  onClick={() => {
                    setSelectedInvoice(invoice);
                    setModalIsOpen(true);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Invoice Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="bg-white p-6 rounded shadow-md w-96 mx-auto mt-10"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        {selectedInvoice && (
          <div>
            <h3 className="text-lg font-semibold">Invoice Details</h3>
            <p><strong>ID:</strong> {selectedInvoice.id}</p>
            <p><strong>Client:</strong> {selectedInvoice.client}</p>
            <p><strong>Amount:</strong> ${selectedInvoice.amount}</p>
            <p><strong>Status:</strong> {selectedInvoice.status}</p>
            <p><strong>Date:</strong> {selectedInvoice.date}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setModalIsOpen(false)}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default FinancialManagement;
