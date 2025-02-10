import { createContext, useContext, useState } from "react";

// Create a context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores user authentication info
  const [role, setRole] = useState(null); // Stores user role (Super Admin, Third-Party Admin, Employee)
  const [tasks, setTasks] = useState([]); // Stores assigned tasks
  const [notifications, setNotifications] = useState([]); // Stores system notifications

  return (
    <AppContext.Provider value={{ user, setUser, role, setRole, tasks, setTasks, notifications, setNotifications }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};
