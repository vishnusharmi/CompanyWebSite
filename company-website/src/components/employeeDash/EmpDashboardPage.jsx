import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../Sidebar/Sidebar";
import { employeeSidebarItems } from "../Sidebar/SidebarItems";

const EmpDashboardPage = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen h-screen">
      <Header />

      {/* Main Content Area */}
      <div className="grid grid-cols-12 flex-grow h-0 flex-1">
        <div className="overflow-y-hidden col-span-2">
          <SideBar menuItems={employeeSidebarItems} />
        </div>

        {/* Main Content */}
        <div className="overflow-y-auto h-full col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EmpDashboardPage;
