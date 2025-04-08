"use client";

import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AccountTabs from "@/components/settings/AccountTabs";
import ProfileSettings from "@/components/settings/ProfileSettings";
import PasswordReset from "@/components/settings/PasswordReset";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    bio: "",
  });

  useEffect(() => {
    // Load user data from localStorage on component mount
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleUpdateUserData = (newData: any) => {
    const updatedData = { ...userData, ...newData };
    setUserData(updatedData);
    // Save to localStorage
    localStorage.setItem("userData", JSON.stringify(updatedData));
  };

  return (
    <DashboardLayout title="Settings">
      <div className=" mx-8 w-full">
        <AccountTabs activeTab={activeTab} onTabChange={handleTabChange} />
        
        <div className="mt-10 flex flex-col gap-8 w-full">
          {activeTab === "account" ? (
            <>
              <div className="grid grid-cols-2 gap-6 w-full">
                <ProfileSettings userData={userData} onUpdateUserData={handleUpdateUserData} />
                <PasswordReset userData={userData} onUpdateUserData={handleUpdateUserData} />
              </div>
            </>
          ) : (
            <div className="flex flex-col w-full gap-8 border bg-[#101828] p-6 rounded-2xl border-[#1D2939]">
              <h2 className="text-white text-2xl font-medium gap-2 flex-1">
                Billing & Subscriptions
              </h2>
              <div className="text-white">
                Subscription plan management and billing details will be displayed here.
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
} 