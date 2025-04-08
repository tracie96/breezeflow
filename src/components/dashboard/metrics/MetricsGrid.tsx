import React from "react";
import { MetricCard } from "./MetricCard";

export const MetricsGrid: React.FC = () => {
  const topRowMetrics = [
    {
      title: "Total no of conversations",
      value: "0",
      trendValue: "2.6%",
      trendDirection: "down" as const,
    },
    {
      title: "Total no of visitors",
      value: "0",
      trendValue: "3.8%",
      trendDirection: "up" as const,
    },
    {
      title: "AI responses",
      value: "0",
      trendValue: "2.6%",
      trendDirection: "down" as const,
    },
  ];

  const bottomRowMetrics = [
    {
      title: "Total Leads",
      value: "0",
      trendValue: "3.8%",
      trendDirection: "up" as const,
    },
    {
      title: "Link clicks inside agent",
      value: "0",
      trendValue: "3.8%",
      trendDirection: "up" as const,
    },
    {
      title: "Response usage",
      value: "0",
      trendValue: "2.6%",
      trendDirection: "down" as const,
    },
  ];

  return (
    <div className="w-full max-w-[1120px] mt-10 max-md:max-w-full">
      <div className="flex w-full items-center gap-6 flex-wrap max-md:max-w-full">
        {topRowMetrics.map((metric, index) => (
          <MetricCard
            key={`top-${index}`}
            title={metric.title}
            value={metric.value}
            trendValue={metric.trendValue}
            trendDirection={metric.trendDirection}
          />
        ))}
      </div>
      <div className="flex w-full items-center gap-6 flex-wrap mt-6 max-md:max-w-full">
        {bottomRowMetrics.map((metric, index) => (
          <MetricCard
            key={`bottom-${index}`}
            title={metric.title}
            value={metric.value}
            trendValue={metric.trendValue}
            trendDirection={metric.trendDirection}
          />
        ))}
      </div>
    </div>
  );
}; 