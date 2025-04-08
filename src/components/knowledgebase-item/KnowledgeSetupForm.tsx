"use client";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import KnowledgeSection from "./KnowledgeSection";
import CallToActionSection from "./CallToActionSection";

const KnowledgeSetupForm: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 items-start p-8 w-full bg-black max-md:p-6 max-sm:p-4">
      <ProgressIndicator />
      <div className="flex flex-col gap-20 w-full">
        <div className="flex flex-col gap-10 w-full">
          <KnowledgeSection />
          <CallToActionSection />
        </div>
        <button className="gap-2.5 px-6 py-4 text-lg font-medium tracking-normal text-center text-white bg-blue-700 rounded-2xl border border-white cursor-pointer h-[55px] w-[209px]">
          Next
        </button>
      </div>
    </section>
  );
};

export default KnowledgeSetupForm;
