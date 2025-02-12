// import ThirdPartyFooter from "./layout/ThirdPartyFooter";
// import ThirdPartyHeader from "./layout/ThirdPartyHeader";
import Header from "../header/Header";
import ThirdPartySideBar from "./layout/ThirdPartySideBar";
import { Outlet } from "react-router-dom";

const ThirdPartyDashboardPage = () => {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen h-screen">
      {/* Header */}
      {/* <ThirdPartyHeader /> */}
      <Header />

      {/* Main Content Area */}
      <div className="grid grid-cols-12 flex-grow h-0 flex-1">
        {/* SideBar */}
        <div className="overflow-y-hidden col-span-2">
          <ThirdPartySideBar />
        </div>

        {/* Main Content */}
        <div className="overflow-y-auto h-full col-span-10">
          <Outlet /> {/* This will render nested routes */}
        </div>
      </div>

      {/* Footer */}
      {/* <ThirdPartyFooter /> */}
    </div>
  );
};

export default ThirdPartyDashboardPage;
