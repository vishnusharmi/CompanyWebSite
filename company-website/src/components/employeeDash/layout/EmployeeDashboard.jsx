const EmployeeDashboard = () => {
  return (
    <>
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800">Card 1</h2>
            <p className="text-gray-600">This is a sample card.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800">Card 2</h2>
            <p className="text-gray-600">This is a sample card.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800">Card 3</h2>
            <p className="text-gray-600">This is a sample card.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default EmployeeDashboard;
