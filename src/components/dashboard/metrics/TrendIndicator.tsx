import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface TrendIndicatorProps {
  value: string;
  trend: "up" | "down";
}

export const TrendIndicator: React.FC<TrendIndicatorProps> = ({
  value,
  trend,
}) => {
  const isPositive = trend === "up";
  const textColor = isPositive
    ? "text-[rgba(31,193,107,1)]"
    : "text-[rgba(251,55,72,1)]";
  const Icon = isPositive ? ArrowUpIcon : ArrowDownIcon;

  return (
    <div
      className={`items-center border border-[color:var(--Grey-800,#344054)] flex gap-0.5 text-xs ${textColor} font-light whitespace-nowrap p-1 rounded-md border-solid`}
    >
      <Icon className="w-3.5 h-3.5" />
      <div>{value}</div>
    </div>
  );
}; 