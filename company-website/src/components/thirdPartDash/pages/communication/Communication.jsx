import { useState } from "react";

const allMessages = [
  {
    id: 1,
    sender: "Admin",
    text: "Complete the report by Feb 10.",
    completed: true,
  },
  {
    id: 2,
    sender: "Admin",
    text: "Payment has been processed.",
    completed: false,
  },
];

function Communication() {
  const [messages, setMessages] = useState(allMessages);

  function handleChange(id) {
    setMessages((prev) => {
      return prev.map((msg) => {
        if (msg.id === id) {
          return { ...msg, completed: !msg.completed }; // Toggling the completed task
        } else {
          return msg; // returning other tasks as it is
        }
      });
    });
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Messages</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id} className="border-b py-2 flex justify-between">
            <p>
              {" "}
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
            <div className="flex items-center justify-between gap-1">
              <label htmlFor="completed">Completed</label>
              <input
                type="checkbox"
                name="completed"
                id="completed"
                checked={msg.completed}
                className="ml-auto accent-pink-500 cursor-pointer checkbox-lg w-4 h-4"
                onChange={() => handleChange(msg.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Communication;
