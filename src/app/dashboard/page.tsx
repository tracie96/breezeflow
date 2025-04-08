"use client";
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { OverviewHeader } from "@/components/dashboard/OverviewHeader";
import { MetricsGrid } from "@/components/dashboard/metrics/MetricsGrid";
import { InsightsSection } from "@/components/dashboard/insights/InsightsSection";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <OverviewHeader />
      <MetricsGrid />
      <InsightsSection />
    </DashboardLayout>
  );
} 