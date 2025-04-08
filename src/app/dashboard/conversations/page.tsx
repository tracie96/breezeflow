"use client";

import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ConversationList from "@/components/dashboard/conversations/ConversationList";
import ConversationDetail from "@/components/dashboard/conversations/ConversationDetail";

export default function ConversationsPage() {
  return (
    <DashboardLayout>
      <div className="flex h-full">
        <div className="w-[400px] border-r border-[#1D2939]">
          <ConversationList />
        </div>
        <div className="flex-1">
          <ConversationDetail visitorName="Visitor 1" />
        </div>
      </div>
    </DashboardLayout>
  );
} 