import React, { useState } from "react";
import { FaUsers, FaTruck, FaChartBar, FaCogs, FaEnvelope, FaBell, FaFileAlt, FaTools, FaQuestionCircle, FaBars } from "react-icons/fa";
import Overview from "../Overview/Overview";
import UserManagement from "../UserManagement/UserManagement";
import WasteManagement from "../Waste Management/WasteManagement";
import ResourceManagement from "../Resources Management/ResourceManagement";
import AlertsAndNotifications from "../Notifications/AlertsAndNotifications";
import ReportingAndAnalytics from "../Reports/ReportingAndAnalytics";
import CommunicationTools from "../Communication/CommunicationTools";
import DocumentationAndResources from "../Documanttions/DocumentationAndResources";
import Settings from "../Settings/Settings";
import HelpAndSupport from "../Help and Support/HelpAndSupport";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "userManagement":
        return <UserManagement />;
      case "wasteManagement":
        return <WasteManagement />;
      case "resourceManagement":
        return <ResourceManagement />;
      case "alertsNotifications":
        return <AlertsAndNotifications />;
      case "reportingAnalytics":
        return <ReportingAndAnalytics />;
      case "communicationTools":
        return <CommunicationTools />;
      case "documentationResources":
        return <DocumentationAndResources />;
      case "settings":
        return <Settings />;
      case "helpSupport":
        return <HelpAndSupport />;
      default:
        return <Overview />;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-30 w-64 bg-[#184b41] text-white transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex flex-col items-center p-4">
          <div className="w-20 h-20 rounded-full bg-gray-300 mb-2"></div>
          <h3 className="text-lg font-bold">John Bosco</h3>
          <p className="text-gray-300">Profile</p>
        </div>
        <div className="flex flex-col p-4">
          <button onClick={() => handleSectionChange("overview")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaChartBar />
            <span>Overview</span>
          </button>
          <button onClick={() => handleSectionChange("userManagement")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaUsers />
            <span>User Management</span>
          </button>
          <button onClick={() => handleSectionChange("wasteManagement")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaTruck />
            <span>Waste Management</span>
          </button>
          <button onClick={() => handleSectionChange("resourceManagement")} className="flex items-center space-x-2 hover:bg-green-600 py-2 pl-4 pr-0 rounded-lg whitespace-nowrap ">
            <FaCogs  />
            <span>Resource Management</span>
          </button>
          <button onClick={() => handleSectionChange("alertsNotifications")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaBell />
            <span>Alerts & Notifications</span>
          </button>
          <button onClick={() => handleSectionChange("reportingAnalytics")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaChartBar />
            <span>Reporting & Analytics</span>
          </button>
          <button onClick={() => handleSectionChange("communicationTools")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaEnvelope />
            <span>Communication Tools</span>
          </button>
          <button onClick={() => handleSectionChange("documentationResources")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg ">
            <FaFileAlt />
            <span>Documentation & Resources</span>
          </button>
          <button onClick={() => handleSectionChange("settings")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaTools />
            <span>Settings</span>
          </button>
          <button onClick={() => handleSectionChange("helpSupport")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaQuestionCircle />
            <span>Help & Support</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white p-4 shadow-md z-20 flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-600 lg:hidden">
              <FaBars size={24} />
            </button>
            <h1 className="text-3xl font-bold ml-4">SmartWaste</h1>
          </div>
          <h1 className="text-2xl font-bold hidden sm:block">Welcome! Bosco</h1>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-green-100 p-4">
          <div className="mt-16 shadow-lg rounded-lg bg-white p-4">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;