import {
  FaChartLine,
  FaFileAlt,
  FaMoneyBillAlt,
  FaTasks,
  FaUsers,
} from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { CgPerformance } from "react-icons/cg";

const adminSidebarItems = [
  {
    id: crypto.randomUUID(),
    link: "/admin",
    name: "Dashboard",
    icon: TbLayoutDashboardFilled,
    font: "text-2xl font-medium ", // Define the font size class here
  },
  {
    id: crypto.randomUUID(),
    link: "/admin/users",
    name: "User Management",
    icon: FaUsers,
  },
  {
    id: crypto.randomUUID(),
    link: "/admin/content",
    name: "Content Management",
    icon: FaChartLine,
  },
  {
    id: crypto.randomUUID(),
    link: "/admin/task",
    name: "Task Management",
    icon: FaTasks,
  },
  {
    id: crypto.randomUUID(),
    link: "/admin/financial",
    name: "Financial Management",
    icon: FaFileAlt,
  },
];

const employeeSidebarItems = [
  {
    id: crypto.randomUUID(),
    link: "/employee",
    name: "Dashboard",
    icon: TbLayoutDashboardFilled,
    font: "text-2xl font-medium ",
  },
  {
    id: crypto.randomUUID(),
    link: "/employee/task",
    name: "Task Management",
    icon: FaTasks,
  },
  {
    id: crypto.randomUUID(),
    link: "/employee/performance",
    name: "Performance Tracking",
    icon: CgPerformance,
  },
];

const thirdPartySidebarItems = [
  {
    id: crypto.randomUUID(),
    link: "/company",
    name: "Dashboard",
    icon: TbLayoutDashboardFilled,
    font: "text-2xl font-medium",
  },
  {
    id: crypto.randomUUID(),
    link: "/company/overview",
    name: "Task Overview",
    icon: FaTasks,
  },
  {
    id: crypto.randomUUID(),
    link: "/company/earnings",
    name: "Earnings Management",
    icon: FaMoneyBillAlt,
  },
  {
    id: crypto.randomUUID(),
    link: "/company/metrics",
    name: "Performance Metrics",
    icon: FaFileAlt,
  },
  {
    id: crypto.randomUUID(),
    link: "/company/communication",
    name: "Communication",
    icon: FaFileAlt,
  },
];

export { adminSidebarItems, employeeSidebarItems, thirdPartySidebarItems };
