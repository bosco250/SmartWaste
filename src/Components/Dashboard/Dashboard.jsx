import React, { useState } from "react";
import { FaUsers, FaTruck, FaChartBar, FaCogs, FaEnvelope, FaBell, FaFileAlt, FaTools, FaQuestionCircle } from "react-icons/fa";
import Overview from "../Overview/Overview";
import UserManagement from "../UserManagement/UserManagement";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "userManagement":
        return (
          <>
          <UserManagement/>
            {/* <h2 className="text-2xl font-bold mb-6">User Management</h2>
            <p className="mb-4">Manage platform users, including admins, waste collectors, and customers. Assign roles and permissions as needed.</p>
            <ul className="list-disc pl-5">
              <li>View User List</li>
              <li>Edit User Profiles</li>
              <li>Assign Roles (Admin, Waste Collector, Customer)</li>
              <li>Manage Permissions</li>
            </ul> */}
          </>
        );
      case "wasteManagement":
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Waste Management</h2>
            <p className="mb-4">Track and manage waste collection activities, optimize routes, and monitor processing status.</p>
            <ul className="list-disc pl-5">
              <li>Create/Edit Collection Schedules</li>
              <li>Monitor Real-Time Waste Collection</li>
              <li>Optimize Routes for Efficient Collection</li>
              <li>Track Waste Processing and Recycling</li>
            </ul>
          </>
        );
      case "resourceManagement":
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Resource Management</h2>
            <p className="mb-4">Allocate and monitor resources like vehicles, equipment, and personnel for waste collection operations.</p>
            <ul className="list-disc pl-5">
              <li>Assign Vehicles and Equipment to Collection Tasks</li>
              <li>Track Resource Usage and Availability</li>
              <li>Manage Inventory of Waste Bins and Vehicles</li>
            </ul>
          </>
        );
      case "alertsNotifications":
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Alerts and Notifications</h2>
            <p className="mb-4">Manage notifications for waste collection reminders, alerts, and custom notifications for operators and customers.</p>
            <ul className="list-disc pl-5">
              <li>Send Collection Reminders</li>
              <li>Create Custom Notifications for Users</li>
              <li>View/Schedule Notifications</li>
            </ul>
          </>
        );
      case "reportingAnalytics":
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Reporting and Analytics</h2>
            <p className="mb-4">Analyze collection activities, routes, and resource usage. Generate custom reports for insights and optimization.</p>
            <ul className="list-disc pl-5">
              <li>View Collection and Route Reports</li>
              <li>Generate Custom Reports</li>
              <li>Analyze Resource Allocation and Efficiency</li>
              <li>Export Data for Analysis</li>
            </ul>
          </>
        );
      case "communicationTools":
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Communication Tools</h2>
            <p className="mb-4">Facilitate communication between waste collectors, admins, and customers through in-app messaging and notifications.</p>
            <ul className="list-disc pl-5">
              <li>In-App Messaging (Individual/Group Chats)</li>
              <li>Email/SMS Integration for Notifications</li>
              <li>Notification Center for All Messages</li>
            </ul>
          </>
        );
      case "documentationResources":
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Documentation and Resources</h2>
            <p className="mb-4">Access documentation, guidelines, and training materials to support operators in waste management operations.</p>
            <ul className="list-disc pl-5">
              <li>View/Upload Documents (Guides, Best Practices)</li>
              <li>Access Training Modules for Operators</li>
              <li>View Waste Management Guidelines</li>
            </ul>
          </>
        );
      case "settings":
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            <p className="mb-4">Configure platform settings, including general configurations, notifications, and security preferences.</p>
            <ul className="list-disc pl-5">
              <li>General Platform Settings</li>
              <li>Manage Notification Preferences</li>
              <li>Configure Security (Password, 2FA)</li>
              <li>Select Language and Region</li>
            </ul>
          </>
        );
      case "helpSupport":
        return (
          <>
            <h2 className="text-2xl font-bold mb-6">Help & Support</h2>
            <p className="mb-4">Find answers to common questions, contact support, and access user guides and documentation.</p>
            <ul className="list-disc pl-5">
              <li>FAQ Section</li>
              <li>Contact Support via In-App Messaging or Email</li>
              <li>Access User Guides and Documentation</li>
            </ul>
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
    <div className="flex h-screen overflow-y-auto">
      {/* Sidebar */}
      <div className="w-64 bg-[#184b41] text-white h-full fixed top-0 left-0 pt-20 shadow-lg">
        <div className="flex flex-col  p-4">
          <button onClick={() => setActiveSection("overview")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg">
            <FaChartBar />
            <span>Overview</span>
          </button>
          <button onClick={() => setActiveSection("userManagement")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg">
            <FaUsers />
            <span>User Management</span>
          </button>
          <button onClick={() => setActiveSection("wasteManagement")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg">
            <FaTruck />
            <span>Waste Management</span>
          </button>
          <button onClick={() => setActiveSection("resourceManagement")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg">
            <FaCogs />
            <span>Resource Management</span>
          </button>
          <button onClick={() => setActiveSection("alertsNotifications")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg">
            <FaBell />
            <span>Alerts & Notifications</span>
          </button>
          <button onClick={() => setActiveSection("reportingAnalytics")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg">
            <FaChartBar />
            <span>Reporting & Analytics</span>
          </button>
          <button onClick={() => setActiveSection("communicationTools")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg">
            <FaEnvelope />
            <span>Communication Tools</span>
          </button>
          <button onClick={() => setActiveSection("documentationResources")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg">
            <FaFileAlt />
            <span>Documentation & Resources</span>
          </button>
          <button onClick={() => setActiveSection("settings")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg">
            <FaTools />
            <span>Settings</span>
          </button>
          <button onClick={() => setActiveSection("helpSupport")} className="flex items-center space-x-2 hover:bg-green-600 py-2 px-4 rounded-lg">
            <FaQuestionCircle />
            <span>Help & Support</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        <header className="bg-white fixed top-0 left-64 right-0 p-4 shadow-md z-10">
          <h1 className="text-3xl font-bold">SmartWaste Dashboard</h1>
        </header>
        <main className="mt-16 p-8 bg-gray-100 shadow-lg rounded-lg">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
