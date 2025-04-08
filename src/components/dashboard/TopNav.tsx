import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

interface TopNavProps {
  title?: string;
}

const TopNav: React.FC<TopNavProps> = ({ title }) => {
  const pathname = usePathname();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Determine the current section based on the pathname
  const getCurrentTitle = () => {
    if (pathname?.includes("/dashboard/ai")) return "My AI";
    if (pathname?.includes("/dashboard/analytics")) return "Analytics";
    if (pathname?.includes("/dashboard/conversations")) return "Conversations";
    if (pathname?.includes("/dashboard/knowledge")) return "Knowledge Base";
    if (pathname?.includes("/dashboard/configuration")) return "Agent Configuration";
    return title || "Dashboard";
  };

  const currentTitle = getCurrentTitle();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="justify-between items-center border-b-[color:var(--Grey-900,#1D2939)] bg-[#0A0F19] flex w-full gap-[40px_100px] flex-wrap px-10 py-5 border-b border-solid max-md:max-w-full max-md:px-5">
      <div className="text-white text-2xl font-normal self-stretch my-auto">
        {currentTitle}
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-4 text-sm my-auto">
        <div className="self-stretch flex min-w-60 items-center gap-2.5 my-auto">
          <div className="text-white font-light self-stretch my-auto">
            Free trial ends in 7 days
          </div>
          <div className="self-stretch flex items-center gap-2 text-white font-medium text-center tracking-[-0.2px] justify-center my-auto px-4 py-3 rounded-[10px]">
            <div className="self-stretch flex w-5 shrink-0 h-5 my-auto" />
            <div className="self-stretch my-auto">Compare plans</div>
          </div>
        </div>
        <div className="relative" ref={menuRef}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6ab570d2ba5f4a1e8f0614bf834ae119/8202703a414f697573784d7989e58cd34275b89d?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-[999px] cursor-pointer"
            onClick={() => setShowUserMenu(!showUserMenu)}
          />
          
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-[#1A2235] border border-[#293145] z-10">
              <div className="p-4 border-b border-[#293145]">
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-[#6a5fe2] flex items-center justify-center mr-3">
                    <span className="text-white text-xl">BS</span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium">Braiden Scott</h3>
                    <p className="text-gray-400 text-sm">braidenscott@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <button className="w-full text-left px-4 py-3 text-white hover:bg-[#232D42] transition-colors duration-200">
                  Settings
                </button>
                <button className="w-full text-left px-4 py-3 text-[#FF4D4F] hover:bg-[#232D42] transition-colors duration-200">
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
