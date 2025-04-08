import React from "react";
import { Calendar } from "lucide-react";

export const OverviewHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-4">
      <h1 className="text-2xl font-semibold text-white">Overview</h1>
      <button className="flex items-center gap-2 px-4 py-2 bg-[#1D2939] border border-[#344054] rounded-lg text-white hover:bg-[#344054]">
        <Calendar className="w-5 h-5" />
        <span>Last 7 days</span>
      </button>
    </div>
  );
}; 