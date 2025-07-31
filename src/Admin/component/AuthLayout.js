import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function AuthLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className=" flex flex-col md:flex-row bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white shadow-sm border-b border-gray-200">
        <div className="text-xl font-semibold text-purple-700">Dashboard</div>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <FaBars className="text-2xl text-gray-700" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-50 bg-white border-r border-gray-200 shadow-sm transform transition-transform duration-300 md:relative md:translate-x-0 md:w-1/4 w-64 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 text-xl font-semibold text-black border-b border-gray-200">
          Dashboard
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <NavLink
            to="/contact-list"
            className="text-gray-600 hover:text-white hover:bg-[#94A393] px-3 py-2 rounded"
            onClick={() => setSidebarOpen(false)}
          >
            Contact List
          </NavLink>
          <NavLink
            to="/job-list"
            className="text-gray-600 hover:text-white hover:bg-[#94A393] px-3 py-2 rounded"
            onClick={() => setSidebarOpen(false)}
          >
            Job List
          </NavLink>
          <NavLink
            to="/settings"
            className="text-gray-600 hover:text-white hover:bg-[#94A393] px-3 py-2 rounded"
            onClick={() => setSidebarOpen(false)}
          >
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Overlay on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="w-full md:w-3/4 ">{children}</main>
    </div>
  );
}

export default AuthLayout;
