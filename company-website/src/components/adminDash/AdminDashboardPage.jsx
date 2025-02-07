import Footer from "./layout/Footer";
import Header from "./layout/Header";
import SideBar from "./layout/SiderBar";
import { Outlet } from "react-router-dom";

const AdminDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* SideBar */}
        <SideBar />

        {/* Main Content */}
        <div className="flex-1">
          <Outlet /> {/* This will render nested routes */}
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default AdminDashboardPage;
