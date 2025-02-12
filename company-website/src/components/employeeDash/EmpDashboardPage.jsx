// import EmployeeFooter from "./layout/EmployeeFooter";
// import EmployeeHeader from "./layout/EmployeeHeader";
import Header from "../header/Header";
import EmployeeSideBar from "./layout/EmployeeSideBar";
import { Outlet } from "react-router-dom";

const EmpDashboardPage = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen h-screen">
      {/* Header */}
      {/* <EmployeeHeader /> */}
      <Header />

      {/* Main Content Area */}
      <div className="grid grid-cols-12 flex-grow h-0 flex-1">
        {/* SideBar */}
        <div className="overflow-y-hidden col-span-2">
          <EmployeeSideBar />
        </div>

        {/* Main Content */}
        <div className="overflow-y-auto h-full col-span-10">
          <Outlet /> {/* This will render nested routes */}
        </div>
      </div>
    </div>
  );
};

export default EmpDashboardPage;
