"use client";
import React from "react";
import {Sidebar} from "./Sidebar";
import TopNav from "./TopNav";
import AgentEmbed from "./AgentEmbed";

const Dashboard: React.FC = () => {
  return (
    <main className="overflow-hidden bg-slate-950">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[17%] max-md:ml-0 max-md:w-full">
          <Sidebar />
        </div>
        <div className="ml-5 w-[83%] max-md:ml-0 max-md:w-full">
          <div className="w-full max-md:max-w-full">
            <TopNav />
            <div className="px-10 mt-10 w-full max-md:px-5 max-md:max-w-full">
              <header className="flex flex-wrap justify-between items-center">
                <h1 className="flex-1 shrink self-stretch my-auto text-3xl font-medium text-white whitespace-nowrap basis-0 min-w-60 max-md:max-w-full">
                  Breezelearn
                </h1>
                <div className="flex gap-4 self-stretch my-auto text-lg tracking-normal text-center text-white w-[234px]">
                  <button className="gap-2.5 self-stretch px-6 py-4 h-full bg-blue-700 rounded-2xl border border-white border-solid w-[234px] max-md:px-5">
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
