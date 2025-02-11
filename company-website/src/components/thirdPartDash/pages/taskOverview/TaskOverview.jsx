import React, { useState } from "react";
import Modal from "react-modal";
import { Clock, CheckCircle, Loader2 } from "lucide-react";

const TaskOverview = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Project Proposal",
      deadline: "2025-02-15",
      status: "pending",
      instructions:
        "Draft a detailed proposal for the new client project including timeline and budget estimates.",
    },
    {
      id: 2,
      title: "Review Code Changes",
      deadline: "2025-02-12",
      status: "completed",
      instructions:
        "Review and approve pull requests for the frontend components.",
    },
    {
      id: 3,
      title: "Update Documentation",
      deadline: "2025-02-14",
      status: "pending",
      instructions:
        "Update API documentation with new endpoints and response formats.",
    },
    {
      id: 4,
      title: "Review Code Changes",
      deadline: "2025-02-12",
      status: "completed",
      instructions:
        "Review and approve pull requests for the frontend components.",
    },
  ]);

  const [submitting, setSubmitting] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (taskId) => {
    setSelectedTask(taskId);
    setShowDialog(true);
  };

  const confirmSubmit = async () => {
    setShowDialog(false);
    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setTasks(
      tasks.map((task) =>
        task.id === selectedTask ? { ...task, status: "completed" } : task
      )
    );

    setSubmitting(false);
    setShowAlert(true);

    setTimeout(() => setShowAlert(false), 3000);
  };

  const isOverdue = (deadline) => new Date(deadline) < new Date();

  return (
    <div>
      <div className="mb-1 p-2 sticky top-0 max-w-8xl">
        <h1 className="text-2xl font-bold mb-2 ml-22">Task Overview</h1>
      </div>

    <div className="max-h-[590px] overflow-y-scroll">
      <div className="max-w-6xl mx-auto p-2">
        {showAlert && (
          <div className="mb-2 bg-green-50 border-green-200 p-2 rounded text-green-800">
            Task submitted successfully! Your work is now under review.
          </div>
        )}

        <div className="grid z-10 gap-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {task.instructions}
                  </p>
                </div>
                {task.status === "completed" ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <Clock className="text-amber-500" />
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                      task.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {task.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-gray-500" />
                    <span
                      className={`text-sm ${
                        isOverdue(task.deadline)
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    >
                      Due: {new Date(task.deadline).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {task.status !== "completed" && (
                  <button
                    className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors 
                    ${
                      submitting && selectedTask === task.id
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={() => handleSubmit(task.id)}
                    disabled={submitting && selectedTask === task.id}
                  >
                    {submitting && selectedTask === task.id ? (
                      <span className="flex items-center">
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      "Submit for Review"
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <Modal
          isOpen={showDialog}
          onRequestClose={() => setShowDialog(false)}
          className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
          overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center ml-53 "
        >
          <h2 className="text-xl font-semibold mb-4">Submit Task for Review</h2>
          <p className="text-gray-600 mb-6">
            Are you sure you want to submit this task? Once submitted, it will
            be marked as completed and sent for review.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded-md"
              onClick={() => setShowDialog(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={confirmSubmit}
            >
              Submit
            </button>
          </div>
        </Modal>
        </div>
      </div>
    </div>
  );
};

export default TaskOverview;
