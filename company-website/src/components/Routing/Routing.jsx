import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../loginRegister/Login";
// admin imports
import AdminDashboard from "../adminDash/AdminDashboardPage";
import MainDashboard from "../adminDash/layout/MainDashboard";
import UserManagement from "../adminDash/pages/userManagement/UserManagement";
import FinancialManagement from "../adminDash/pages/financialManagement/FinancialManagement";
import TaskManagement from "../adminDash/pages/taskManagement/TaskManagement";
import ContentManagement from "../adminDash/pages/contentManagement/ContentManagement";

// thirdParty
import ThirdPartyDashboardPage from "../thirdPartDash/ThirdPartyDashboardPage";
import ThirdPartyDashboard from '../thirdPartDash/layout/ThirdPartyDashboard'
import Communication from "../thirdPartDash/pages/communication/Communication";
import EarningsManagement from "../thirdPartDash/pages/earningsManagement/EarningsManagement";
import PerformanceMetrics from "../thirdPartDash/pages/performanceMetrics/PerformanceMetrics";
import TaskOverview from "../thirdPartDash/pages/taskOverview/TaskOverview";

// employee
import EmployeeDashboard from "../employeeDash/layout/EmployeeDashboard";
import EmployeeDashboardPage from "../employeeDash/EmpDashboardPage";
import PerformanceTracking from "../employeeDash/pages/performanceTracking/PerformanceTracking";
import EmployeeTask from "../employeeDash/pages/taskManagement/TaskManagement"



function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* Nested Route for Admin Dashboard */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<MainDashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/financial" element={<FinancialManagement />} />
            <Route path="/admin/task" element={<TaskManagement />} />
            <Route path="/admin/content" element={<ContentManagement />} />
          </Route>

          {/* Nested Route for Partner Dashboard */}
          <Route path="/company" element={<ThirdPartyDashboardPage />}>
            <Route index element={<ThirdPartyDashboard />} />
            <Route path="/company/overview" element={<TaskOverview />} />
            <Route path="/company/earnings" element={<EarningsManagement />} />
            <Route path="/company/metrics" element={<PerformanceMetrics />} />
            <Route path="/company/communication" element={<Communication />} />
          </Route>

          {/* Nested Route for Partner Dashboard */}
          <Route path="/employee" element={<EmployeeDashboardPage />}>
            <Route index element={<EmployeeDashboard />} />
            <Route path="/employee/task" element={<EmployeeTask />} />
            <Route
              path="/employee/performance"
              element={<PerformanceTracking />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default Routing;
