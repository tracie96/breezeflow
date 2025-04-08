import React from "react";
import { TrendIndicator } from "./TrendIndicator";

interface MetricCardProps {
  title: string;
  value: string;
  trendValue: string;
  trendDirection: "up" | "down";
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  trendValue,
  trendDirection,
}) => {
  return (
    <div className="border border-[color:var(--Grey-900,#1D2939)] bg-[#101828] self-stretch min-w-60 flex-1 shrink basis-[0%] p-4 rounded-xl border-solid">
      <div className="flex w-full items-center justify-between">
        <div className="text-[#525866] text-sm font-normal tracking-[-0.2px] self-stretch flex-1 shrink basis-[0%]">
          {title}
        </div>
        <TrendIndicator value={trendValue} trend={trendDirection} />
      </div>
      <div className="text-white text-[40px] font-medium tracking-[-0.2px] mt-2">
        {value}
      </div>
    </div>
  );
}; 