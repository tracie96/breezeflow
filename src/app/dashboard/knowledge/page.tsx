"use client";

import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KnowledgeBase from "@/components/dashboard/knowledge/KnowledgeBase";

export default function Page() {
  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
 
        <div className="">
          <KnowledgeBase />
        </div>
      </div>
    </DashboardLayout>
  );
} 