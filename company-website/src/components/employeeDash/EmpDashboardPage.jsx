import EmployeeFooter from "./layout/EmployeeFooter";
import EmployeeHeader from "./layout/EmployeeHeader";
import EmployeeSideBar from "./layout/EmployeeSideBar";
import { Outlet } from "react-router-dom";

const EmpDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <EmployeeHeader />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* SideBar */}
        <EmployeeSideBar />

        {/* Main Content */}
        <div className="flex-1">
          <Outlet /> {/* This will render nested routes */}
        </div>
      </div>

    
     
    </div>
  );
};

export default EmpDashboardPage;
