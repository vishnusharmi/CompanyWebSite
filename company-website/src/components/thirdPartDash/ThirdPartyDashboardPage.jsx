import ThirdPartyFooter from "./layout/ThirdPartyFooter";
import ThirdPartyHeader from "./layout/ThirdPartyHeader";
import ThirdPartySiderBar from "./layout/ThirdPartySiderBar";
import { Outlet } from "react-router-dom";

const ThirdPartyDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <ThirdPartyHeader />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* SideBar */}
        <ThirdPartySiderBar />

        {/* Main Content */}
        <div className="flex-1">
          <Outlet /> {/* This will render nested routes */}
        </div>
      </div>

      {/* Footer */}
      {/* <ThirdPartyFooter /> */}
    </div>
  );
};

export default ThirdPartyDashboardPage;
