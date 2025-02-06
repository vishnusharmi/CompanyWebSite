import UserFooter from "../../components/UserLayout/UserFooter";
import UserHeader from "../../components/UserLayout/UserHeader";
import UserSideBar from "../../components/UserLayout/UserSiderBar";
import { Outlet } from "react-router-dom";

const UserDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <UserHeader />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* SideBar */}
        <UserSideBar />

        {/* Main Content */}
        <div className="flex-1">
          <Outlet /> {/* This will render nested routes */}
        </div>
      </div>

      {/* Footer */}
      <UserFooter />
    </div>
  );
};

export default UserDashboardPage;
