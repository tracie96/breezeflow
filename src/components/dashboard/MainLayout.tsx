import React from "react";
import { Sidebar } from "./Sidebar";
import TopNav from "./TopNav";

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <div className="bg-[rgba(10,15,25,1)] overflow-hidden min-h-screen">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[17%] max-md:w-full max-md:ml-0">
          <Sidebar />
        </div>
        <div className="w-[83%] ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full max-md:max-w-full">
            <TopNav title={title} />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout; 