"use client";

import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout";
import { AgentModal } from "./modal/AgentModal";

const AIPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const embedCode = `<script type="text/javascript">
  "id": 2,
  "email": "janet.weaver@reqres.in",
  "first_name": "Janet",
  "last_name": "Weaver",
  "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  "support": {
    "url": "https://reqres.in/#support-heading",
    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
  }
}`;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-white">Breezelearn</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-[#2970FF] text-white rounded-lg hover:bg-blue-600"
        >
          Test My Agent
        </button>
      </div>

      <div className="bg-[#101828] rounded-2xl p-8">
        <h2 className="text-xl text-white mb-4">Add Voice Agent to Website</h2>
        <p className="text-[#667085] mb-6">
          To embed your agent on your website,{" "}
          <a href="#" className="text-[#2970FF] hover:underline">
            check out our tutorials
          </a>{" "}
          or{" "}
          <a href="#" className="text-[#2970FF] hover:underline">
            book a meeting with us
          </a>
          .
        </p>
        <div className="bg-[#0A0F19] rounded-lg p-4 mb-4">
          <pre className="text-[#667085] whitespace-pre-wrap font-mono text-sm">
            {embedCode}
          </pre>
        </div>
        <button
          onClick={handleCopyToClipboard}
          className="flex items-center gap-2 px-4 py-2 bg-[#1D2939] text-white rounded-lg hover:bg-[#344054] border border-[#344054]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.16675 12.5H3.33341C2.89139 12.5 2.46746 12.3244 2.15491 12.0118C1.84235 11.6993 1.66675 11.2754 1.66675 10.8333V3.33334C1.66675 2.89131 1.84235 2.46739 2.15491 2.15483C2.46746 1.84227 2.89139 1.66667 3.33341 1.66667H10.8334C11.2754 1.66667 11.6994 1.84227 12.0119 2.15483C12.3245 2.46739 12.5001 2.89131 12.5001 3.33334V4.16667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Copy to clipboard
        </button>
      </div>

      <AgentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </DashboardLayout>
  );
};

export default AIPage; 