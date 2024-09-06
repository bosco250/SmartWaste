import React, { useState } from "react";
import { FaUsers, FaTruck, FaChartBar, FaCogs, FaEnvelope, FaBell, FaFileAlt, FaTools, FaQuestionCircle } from "react-icons/fa";
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

  const renderContent = () => {
    switch (activeSection) {
      case "userManagement":
        return (
          <>
          <UserManagement/>
          </>
        );
      case "wasteManagement":
        return (
          <><WasteManagement/>
          </>
        );
      case "resourceManagement":
        return (
          <><ResourceManagement/>
          </>
        );
      case "alertsNotifications":
        return (
          <><AlertsAndNotifications/>
          </>
        );
      case "reportingAnalytics":
        return (
          <><ReportingAndAnalytics/>
          </>
        );
      case "communicationTools":
        return (
          <><CommunicationTools/>
          </>
        );
      case "documentationResources":
        return (
          <><DocumentationAndResources/>
          </>
        );
      case "settings":
        return (
          <><Settings/>
          </>
        );
      case "helpSupport":
        return (
          <><HelpAndSupport/>            
          </>
        );
      default:
        return (
          <>
          <Overview/>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div className="w-64 bg-[#184b41] text-white h-screen fixed top-0 left-0 shadow-lg overflow-y-auto">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-300 mb-2"></div>
          <h3 className="text-lg font-bold">John Bosco</h3>
          <p   className="text-gray-300">Profile</p>
        </div>
        <div className="flex flex-col  p-4">
          <button onClick={() => setActiveSection("overview")} className="flex items-center  space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaChartBar />
            <span>Overview</span>
          </button>
          <button onClick={() => setActiveSection("userManagement")} className="flex items-center  space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaUsers />
            <span>User Management</span>
          </button>
          <button onClick={() => setActiveSection("wasteManagement")} className="flex items-center  space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaTruck />
            <span>Waste Management</span>
          </button>
          <button onClick={() => setActiveSection("resourceManagement")} className="flex items-center  space-x-2 hover:bg-green-600 py-2 pl-4 pr-0 rounded-lg whitespace-nowrap ">
            <FaCogs  />
            <span>Resource Management</span>
          </button>
          <button onClick={() => setActiveSection("alertsNotifications")} className="flex items-center  space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaBell />
            <span>Alerts & Notifications</span>
          </button>
          <button onClick={() => setActiveSection("reportingAnalytics")} className="flex items-center  space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaChartBar />
            <span>Reporting & Analytics</span>
          </button>
          <button onClick={() => setActiveSection("communicationTools")} className="flex items-center  space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaEnvelope />
            <span>Communication Tools</span>
          </button>
          <button onClick={() => setActiveSection("documentationResources")} className="flex items-center  space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg ">
            <FaFileAlt />
            <span>Documentation & Resources</span>
          </button>
          <button onClick={() => setActiveSection("settings")} className="flex items-center  space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaTools />
            <span>Settings</span>
          </button>
          <button onClick={() => setActiveSection("helpSupport")} className="flex items-center  space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg whitespace-nowrap">
            <FaQuestionCircle />
            <span>Help & Support</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 bg-green-100">
        <header className="bg-white fixed top-0 left-64 right-0 p-4 shadow-md z-20 flex justify-between">
          <h1 className="text-3xl font-bold">SmartWaste </h1>
          <h1 className="text-2xl font-bold">Welcome! Bosco </h1>
        </header>
        <main className="mt-16  shadow-lg rounded-lg">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
