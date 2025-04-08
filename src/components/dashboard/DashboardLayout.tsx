"use client";

import React, { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import TopNav from "./TopNav";

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function DashboardLayout({ children, title = "Dashboard" }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-[#0A0F19]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav title={title} />
        <main className="flex-1 p-6">
          <div className=" mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 