import React from "react";
import { BarChart2, MessageSquare, Database, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <aside className="w-[280px] bg-[#101828] h-full">
      <div className="pt-10 pb-[568px] max-md:pb-[100px]">
        <div className="max-w-full w-[227px] px-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6ab570d2ba5f4a1e8f0614bf834ae119/48b1cd36c40e7b4330d2bf7361fb47ff317e0e5c?placeholderIfAbsent=true"
            alt="Logo"
            className="aspect-[6.49] object-contain w-full"
          />
        </div>
        <div className="w-full mt-10 px-4">
          <div className="border-[color:var(--Grey-800,#344054)] bg-[#1D2939] w-full whitespace-nowrap px-2 py-1.5 rounded-lg border-[0.5px] border-solid">
            <div className="text-[#667085] text-[10px] font-normal uppercase">
              Agent
            </div>
            <div className="justify-between items-center border-[color:var(--Grey-700,#475467)] bg-[#344054] flex w-full gap-3.5 text-sm text-[#FCFCFD] font-light mt-1 pl-3 pr-4 py-2 rounded-lg border-[0.5px] border-solid">
              <div className="self-stretch flex gap-2 w-[126px] my-auto">
                <div className="w-[126px]">Breezelearn</div>
              </div>
              <div className="self-stretch flex w-6 shrink-0 h-6 my-auto" />
            </div>
          </div>
          <nav className="w-full text-sm text-[#525866] font-light mt-6">
            <div className="self-stretch w-full gap-2.5 text-[10px] text-[#667085] font-normal whitespace-nowrap uppercase px-3">
              Menu
            </div>
            <ul>
              <li>
                <Link 
                  href="/dashboard/ai"
                  className={`flex w-full flex-col overflow-hidden items-stretch justify-center mt-3 px-3 py-2 rounded-lg hover:bg-[#1D2939] ${
                    isActive('/dashboard/ai') ? 'bg-[#0A0F19] text-white border border-[#667085]' : ''
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="self-stretch flex items-center gap-1.5 my-auto">
                      <Settings className="w-5 h-5" />
                      <span>My AI</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/analytics"
                  className={`flex w-full overflow-hidden items-center mt-3 px-3 py-2 rounded-lg hover:bg-[#1D2939] ${
                    isActive('/dashboard/analytics') ? 'bg-[#0A0F19] text-white border border-[#667085]' : ''
                  }`}
                >
                  <div className="self-stretch flex items-center gap-1.5 my-auto">
                    <BarChart2 className="w-5 h-5" />
                    <span>Analytics</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/conversations"
                  className={`flex w-full flex-col overflow-hidden items-stretch whitespace-nowrap justify-center mt-3 px-3 py-2 rounded-lg hover:bg-[#1D2939] ${
                    isActive('/dashboard/conversations') ? 'bg-[#0A0F19] text-white border border-[#667085]' : ''
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="self-stretch flex items-center gap-1.5 my-auto">
                      <MessageSquare className="w-5 h-5" />
                      <span>Conversations</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/knowledge"
                  className={`flex w-full flex-col overflow-hidden items-stretch justify-center mt-3 px-3 py-2 rounded-lg hover:bg-[#1D2939] ${
                    isActive('/dashboard/knowledge') ? 'bg-[#0A0F19] text-white border border-[#667085]' : ''
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="self-stretch flex items-center gap-1.5 my-auto">
                      <Database className="w-5 h-5" />
                      <span>Knowledge Base</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/configuration"
                  className={`flex w-full flex-col overflow-hidden items-stretch justify-center mt-3 px-3 py-2 rounded-lg hover:bg-[#1D2939] ${
                    isActive('/dashboard/configuration') ? 'bg-[#0A0F19] text-white border border-[#667085]' : ''
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="self-stretch flex items-center gap-1.5 my-auto">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.66675 10.7334V9.2667C1.66675 8.4 2.37508 7.68334 3.25008 7.68334C4.75841 7.68334 5.37508 6.6167 4.61675 5.30837C4.18341 4.55837 4.44175 3.58334 5.20008 3.15837L6.64175 2.30837C7.30008 1.9167 8.14175 2.1417 8.53341 2.8L8.63341 2.9667C9.38341 4.28334 10.6167 4.28334 11.3751 2.9667L11.4751 2.8C11.8667 2.1417 12.7084 1.9167 13.3667 2.30837L14.8084 3.15837C15.5667 3.58334 15.8251 4.55837 15.3917 5.30837C14.6334 6.6167 15.2501 7.68334 16.7584 7.68334C17.6251 7.68334 18.3417 8.3917 18.3417 9.2667V10.7334C18.3417 11.6 17.6334 12.3167 16.7584 12.3167C15.2501 12.3167 14.6334 13.3834 15.3917 14.6917C15.8251 15.45 15.5667 16.4167 14.8084 16.8417L13.3667 17.6917C12.7084 18.0834 11.8667 17.8584 11.4751 17.2L11.3751 17.0334C10.6251 15.7167 9.39175 15.7167 8.63341 17.0334L8.53341 17.2C8.14175 17.8584 7.30008 18.0834 6.64175 17.6917L5.20008 16.8417C4.44175 16.4167 4.18341 15.45 4.61675 14.6917C5.37508 13.3834 4.75841 12.3167 3.25008 12.3167C2.37508 12.3167 1.66675 11.6 1.66675 10.7334Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Agent Configuration</span>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};
