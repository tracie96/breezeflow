import React from "react";

interface TabItem {
  id: string;
  label: string;
}

interface TabMenuProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="border-b-[color:var(--Grey-950,#101828)] bg-[#0A0F19] flex w-[520px] max-w-full gap-6 text-base text-[#667085] font-normal text-center tracking-[-0.32px] leading-none flex-wrap py-3.5 border-b border-solid">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`relative flex items-start gap-1.5 ${
            activeTab === tab.id ? "text-white" : ""
          } whitespace-nowrap justify-center cursor-pointer`}
          onClick={() => onTabChange(tab.id)}
        >
          <div className="self-stretch z-0 gap-1 my-auto">{tab.label}</div>
          {activeTab === tab.id && (
            <div className="bg-[#0048FF] absolute z-0 shrink-0 h-0 w-full border-[rgba(0,72,255,1)] border-solid border-2 -bottom-3.5 inset-x-0" />
          )}
        </div>
      ))}
    </div>
  );
};

export default TabMenu; 