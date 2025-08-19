import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function AuthLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white  border-b border-gray-200">
        <div className="text-xl font-bold text-purple-700">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <FaBars className="text-2xl text-gray-700" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen md:h-auto z-50 bg-white border-r border-gray-200  transform transition-transform duration-300 
        w-64 md:w-1/4 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6 border-b border-gray-200">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {[
            { to: "/admin/team", label: "Team Members" },
            { to: "/admin/blog-list", label: "Blog " },
            { to: "/admin/project-list", label: "Project" },
            { to: "/admin/job-list", label: "Opening Job " },
            { to: "/admin/contact-list", label: "Contact " },
            { to: "/admin/career-user-list", label: "Career User" },
            // { to: "/settings", label: "Settings" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-2 rounded text-gray-600 hover:text-white hover:bg-[#94A393] ${isActive ? "bg-[#94A393] text-white" : ""
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="w-full md:w-3/4">{children}</main>
    </div>
  );
}

export default AuthLayout;
