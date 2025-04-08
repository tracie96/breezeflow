"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

interface TopNavProps {
  title?: string;
  onMenuClick?: () => void;
}

interface UserData {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const TopNav: React.FC<TopNavProps> = ({ title, onMenuClick }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [userData, setUserData] = useState<UserData>({});
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Check for user data in localStorage on component mount
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
    // Removed the automatic redirect when no userData is found
  }, []);
  
  // Determine the current section based on the pathname
  const getCurrentTitle = () => {
    if (pathname?.includes("/dashboard/ai")) return "My AI";
    if (pathname?.includes("/dashboard/analytics")) return "Analytics";
    if (pathname?.includes("/dashboard/conversations")) return "Conversations";
    if (pathname?.includes("/dashboard/knowledge")) return "Knowledge Base";
    if (pathname?.includes("/dashboard/configuration")) return "Agent Configuration";
    if (pathname?.includes("/dashboard/settings")) return "Settings";
    return title || "Dashboard";
  };

  const currentTitle = getCurrentTitle();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleUserMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowUserMenu(!showUserMenu);
  };

  const handleSettingsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/dashboard/settings");
  };

  const handleLogoutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Clear user data from localStorage on logout
    localStorage.removeItem('userData');
    router.push("/");
  };

  // Display initials for the avatar
  const getInitials = () => {
    if (userData.firstName || userData.lastName) {
      return `${userData.firstName?.[0] || ''}${userData.lastName?.[0] || ''}`.toUpperCase();
    }
    return 'U';
  };

  return (
    <div className="justify-between items-center border-b-[color:var(--Grey-900,#1D2939)] bg-[#0A0F19] flex w-full gap-[40px_100px] flex-wrap px-4 md:px-10 py-5 border-b border-solid max-md:max-w-full">
      <div className="text-white text-xl md:text-2xl font-normal self-stretch my-auto ml-10 md:ml-0">
        {currentTitle}
      </div>
      <div className="self-stretch flex items-center gap-2 md:gap-4 text-sm my-auto">
        <div className="hidden md:flex min-w-[60px] md:min-w-60 items-center gap-2.5 my-auto">
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
            className="aspect-[1] object-contain w-10 md:w-12 self-stretch shrink-0 my-auto rounded-[999px] cursor-pointer"
            onClick={handleUserMenuClick}
            alt="User avatar"
          />
          
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-[#1A2235] border border-[#293145] z-10">
              <div className="p-4 border-b border-[#293145]">
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-[#6a5fe2] flex items-center justify-center mr-3">
                    <span className="text-white text-xl">{getInitials()}</span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium">
                      {userData.firstName && userData.lastName 
                        ? `${userData.firstName} ${userData.lastName}` 
                        : 'User'}
                    </h3>
                    <p className="text-gray-400 text-sm">{userData.email || 'No email available'}</p>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <button 
                  onClick={handleSettingsClick}
                  className="w-full text-left px-4 py-3 text-white hover:bg-[#232D42] transition-colors duration-200"
                >
                  Settings
                </button>
                <button 
                  onClick={handleLogoutClick}
                  className="w-full text-left px-4 py-3 text-[#FF4D4F] hover:bg-[#232D42] transition-colors duration-200"
                >
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
