"use client";

import React, { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import TopNav from "./TopNav";
import { Menu } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function DashboardLayout({ children, title = "Dashboard" }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#0A0F19] overflow-hidden">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-[#1D2939] text-white"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar - hidden on mobile by default, shown when toggled */}
      <div className={`fixed inset-0 z-20 md:relative md:inset-auto transition-all duration-300 ease-in-out ${
        sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
      }`}>
        <div 
          className="absolute inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
        <div className="relative h-full w-[280px] max-w-[80vw] transform transition-transform duration-300 ease-in-out z-30
                      md:transform-none">
          <Sidebar />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col w-full md:w-auto overflow-hidden">
        <TopNav title={title} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="mx-auto max-w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 