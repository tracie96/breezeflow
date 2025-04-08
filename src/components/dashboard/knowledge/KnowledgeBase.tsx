"use client";

import React, { useState } from "react";
import AddKnowledgeModal from "./AddKnowledgeModal";
import LinkIcon from "@/components/ui/icons/LinkIcon";
import DocumentIcon from "@/components/ui/icons/DocumentIcon";

interface Source {
  id: string;
  name: string;
  status: "Published" | "Draft";
  type: "Website" | "Document";
  lastUpdated: string;
}

export default function KnowledgeBase() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const sources: Source[] = [
    {
      id: "1",
      name: "Breezelearn",
      status: "Published",
      type: "Website",
      lastUpdated: "25/06/2024 09:25:33 am",
    },
    {
      id: "2",
      name: "My Knowledge",
      status: "Published",
      type: "Document",
      lastUpdated: "25/06/2024 09:25:33 am",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Sources</h1>
          <p className="text-[#667085] mt-1">Add and manage documents or links to increase your Agent's knowledge</p>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#2970FF] text-white rounded-lg hover:bg-blue-600"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4.16667V15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Add knowledge
        </button>
      </div>

      <div className="w-full">
        <div className="w-full border border-[#1D2939] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#101828]">
                <th className="w-6 p-3">
                  <input type="checkbox" className="rounded border-[#344054]" />
                </th>
                <th className="text-left p-3 text-sm font-medium text-white">Name</th>
                <th className="text-left p-3 text-sm font-medium text-white">Status</th>
                <th className="text-left p-3 text-sm font-medium text-white">Type</th>
                <th className="text-left p-3 text-sm font-medium text-white">Last updated</th>
                <th className="text-left p-3 text-sm font-medium text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {sources.map((source) => (
                <tr key={source.id} className="border-t border-[#1D2939]">
                  <td className="p-3">
                    <input type="checkbox" className="rounded border-[#344054]" />
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      {source.type === "Website" ? (
                        <LinkIcon width={20} height={20} />
                      ) : (
                        <DocumentIcon width={20} height={20} />
                      )}
                      <span className="text-white">{source.name}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-[#027A48] bg-opacity-10 text-[#6CE9A6]">
                      {source.status}
                    </span>
                  </td>
                  <td className="p-3 text-white">{source.type}</td>
                  <td className="p-3 text-white">{source.lastUpdated}</td>
                  <td className="p-3">
                    <button className="text-[#F04438] hover:text-[#d63c31]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.667 5.00008H3.33366" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.33366 8.33341V13.3334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.667 8.33341V13.3334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.8337 5.00008V16.6667C15.8337 16.8878 15.7459 17.0997 15.5896 17.256C15.4334 17.4122 15.2214 17.5001 15.0003 17.5001H5.00033C4.77931 17.5001 4.56735 17.4122 4.41107 17.256C4.25479 17.0997 4.16699 16.8878 4.16699 16.6667V5.00008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.3337 5.00008V3.33341C13.3337 2.89139 13.1581 2.46746 12.8455 2.1549C12.533 1.84234 12.109 1.66675 11.667 1.66675H8.33366C7.89163 1.66675 7.46771 1.84234 7.15515 2.1549C6.84259 2.46746 6.66699 2.89139 6.66699 3.33341V5.00008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddKnowledgeModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
} 