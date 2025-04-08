import React from "react";
import DashboardLayout from "../DashboardLayout";
import AgentConfigForm from "../AgentConfigForm";
import PreviewSection from "../PreviewSection";

const ConfigurationPage: React.FC = () => {
  return (
    <DashboardLayout title="Agent Configuration">
      <div className="flex max-md:flex-col">
        <div className="w-[50%] max-md:w-full">
          <AgentConfigForm />
        </div>
        <div className="w-[50%] max-md:w-full">
          <PreviewSection />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConfigurationPage; 