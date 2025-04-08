"use client";
import React from "react";
import {Sidebar} from "./Sidebar";
import TopNav from "./TopNav";
import AgentEmbed from "./AgentEmbed";

const Dashboard: React.FC = () => {
  return (
    <main className="overflow-hidden bg-slate-950">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[17%] hidden md:block">
          <Sidebar />
        </div>
        <div className="w-full md:w-[83%] md:ml-5">
          <div className="w-full">
            <TopNav />
            <div className="px-4 md:px-10 mt-6 md:mt-10 w-full">
              <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
                <h1 className="text-2xl md:text-3xl font-medium text-white">
                  Breezelearn
                </h1>
                <div className="flex justify-center md:justify-end">
                  <button className="gap-2.5 px-4 md:px-6 py-3 md:py-4 bg-blue-700 rounded-2xl border border-white border-solid w-full md:w-[234px] text-white text-base md:text-lg">
                    Test My Agent
                  </button>
                </div>
              </header>
              <AgentEmbed />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
