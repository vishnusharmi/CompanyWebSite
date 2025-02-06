import Footer from "../../components/adminLayout/Footer";
import Header from "../../components/adminLayout/Header";
import SideBar from "../../components/adminLayout/SiderBar";
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
      <Footer />
    </div>
  );
};

export default AdminDashboardPage;
