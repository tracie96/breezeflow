import React from "react";

interface AccountTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const AccountTabs: React.FC<AccountTabsProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="flex w-full items-center gap-6 border bg-[#0A0F19] px-0 py-3.5 border-[#101828]">
      <div
        className="flex justify-center items-center gap-1.5 relative cursor-pointer"
        onClick={() => onTabChange("account")}
      >
        <div
          className={`text-center text-base font-normal leading-5 tracking-[-0.32px] gap-1 ${activeTab === "account" ? "text-[#FCFCFD]" : "text-[#667085]"}`}
        >
          Account Management
        </div>
        {activeTab === "account" && (
          <div className="w-[166px] h-0.5 absolute bg-[#0048FF] -bottom-3.5" />
        )}
      </div>
      <div
        className="flex justify-center items-center gap-1.5 cursor-pointer"
        onClick={() => onTabChange("billing")}
      >
        <div
          className={`text-center text-base font-normal leading-5 tracking-[-0.32px] gap-1 ${activeTab === "billing" ? "text-[#FCFCFD]" : "text-[#667085]"}`}
        >
          Billing &amp; Subscriptions
        </div>
        {activeTab === "billing" && (
          <div className="w-[166px] h-0.5 absolute bg-[#0048FF] -bottom-3.5" />
        )}
      </div>
    </div>
  );
};

export default AccountTabs; 