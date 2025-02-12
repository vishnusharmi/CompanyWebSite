import Header from "../header/Header";
import Footer from "./layout/Footer";
import SideBar from "./layout/SiderBar";
import { Outlet } from "react-router-dom";

const AdminDashboardPage = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen h-screen">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div className="grid grid-cols-12 flex-grow h-0 flex-1">
        {/* SideBar */}
        <div className="overflow-y-hidden col-span-2">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="overflow-y-auto h-full col-span-10">
          <Outlet /> {/* This will render nested routes */}
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default AdminDashboardPage;
