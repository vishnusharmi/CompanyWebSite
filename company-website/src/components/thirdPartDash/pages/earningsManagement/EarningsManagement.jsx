function EarningsManagement() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Earnings Management</h2>
      <div className="text-2xl font-semibold">₹5,25,000.00</div>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600 transition-all">
        Withdraw Funds
      </button>
      <h3 className="mt-6 font-bold">Transaction History</h3>
      <ul className="mt-2">
        <li className="border-b py-2">Task Payment - ₹30000.00</li>
        <li className="border-b py-2">Task Payment - ₹15000.00</li>
      </ul>
    </div>
  );
}

export default EarningsManagement;
