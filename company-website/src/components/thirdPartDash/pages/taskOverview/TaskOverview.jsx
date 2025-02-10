import { useState } from "react";

function TaskOverview() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Review Document",
      deadline: "2025-02-10",
      status: "Pending",
    },
    {
      id: 2,
      name: "Submit Report",
      deadline: "2025-02-12",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Send Email",
      deadline: "2025-02-20",
      status: "Completed",
    },
  ]);

  function handleClick(id) {
    const currentTask = tasks.map((value) => {
      if (value.id === id) {
        value.status = "Completed";
      }
      return value;
    });
    setTasks(currentTask);
  }

  return (
    <div className="p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Task Overview</h2>
      <table className="w-full text-left ">
        <thead>
          <tr className="border bg-green-500 border-white">
            <th className="p-2">Task</th>
            <th className="p-2">Deadline</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="shadow-md border-b-gray-300">
              <td className="p-2">{task.name}</td>
              <td className="p-2">{task.deadline}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded ${
                    task.status === "Pending"
                      ? "bg-yellow-400"
                      : task.status === "In Progress"
                      ? "bg-blue-400"
                      : "bg-green-500"
                  }`}
                >
                  {task.status}
                </span>
              </td>
              <td className="p-2">
                <button
                  onClick={() => handleClick(task.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer"
                >
                  Submit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskOverview;
