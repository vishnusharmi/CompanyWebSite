import PartnerFooter from "../components/thirdPartDash/PartnerFooter";
import PartnerHeader from "../components/thirdPartDash/PartnerHeader";
import PartnerSideBar from "../components/thirdPartDash/PartnerSiderBar";
import { Outlet } from "react-router-dom";

const ThirdPartyDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <PartnerHeader />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* SideBar */}
        <PartnerSideBar />

        {/* Main Content */}
        <div className="flex-1">
          <Outlet /> {/* This will render nested routes */}
        </div>
      </div>

      {/* Footer */}
      <PartnerFooter />
    </div>
  );
};

export default ThirdPartyDashboardPage;
