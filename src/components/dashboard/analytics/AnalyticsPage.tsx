"use client";

import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { OverviewHeader } from "@/components/dashboard/OverviewHeader";
import { MetricsGrid } from "@/components/dashboard/metrics/MetricsGrid";
import { InsightsSection } from "@/components/dashboard/insights/InsightsSection";

const AnalyticsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <OverviewHeader />
        <MetricsGrid />
        <InsightsSection />
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage; 