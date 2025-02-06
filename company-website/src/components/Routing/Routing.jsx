import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../adminDash/AdminDashboardPage";
import PartnerDashboard from "../../pages/PartnerDashboardPage";
import UserDashboard from "../employeeDash/UserDashboardPage";
import MainDashboard from "../adminDash/MainDashboard";
import MainPartnerDashboard from '../thirdPartDash/MainPartnerDashboard'
import MainUserDashboard from "../employeeDash/MainUserDashboard";
import UserManagement from "../../pages/UserManagement";
import Login from "../loginRegister/Login";

function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />}>
            {/* Nested Route for Admin Dashboard */}
            <Route index element={<MainDashboard />} />
            <Route path="/admin/user" element={<UserManagement />} />
           </Route>
          <Route path="/partner" element={<PartnerDashboard />}>
            {/* Nested Route for Partner Dashboard */}
            <Route index element={<MainPartnerDashboard />} />
           </Route>
          <Route path="/user" element={<UserDashboard />}>
            {/* Nested Route for Partner Dashboard */}
            <Route index element={<MainUserDashboard />} />
           </Route>
        </Routes>
      </Router>
    </>
  );
}

export default Routing;
