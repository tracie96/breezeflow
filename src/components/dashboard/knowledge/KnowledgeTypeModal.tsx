"use client";

import React from "react";

interface KnowledgeTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (type: "Article" | "Document") => void;
}

export default function KnowledgeTypeModal({ isOpen, onClose, onSelect }: KnowledgeTypeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#0A0F19] rounded-2xl w-[600px] max-w-[95vw]">
        <div className="flex justify-between items-center p-6">
          <div>
            <h2 className="text-xl text-white font-medium">Add a knowledge</h2>
            <p className="text-[#667085] text-sm mt-1">
              Add a knowledge base for AI to use when responding to your clients.
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <button
            onClick={() => onSelect("Article")}
            className="w-full bg-[#101828] text-white border border-[#1D2939] rounded-lg p-4 text-left hover:border-[#2970FF] transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1D2939] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 17.5H3.33333C2.89131 17.5 2.46738 17.3244 2.15482 17.0118C1.84226 16.6993 1.66666 16.2754 1.66666 15.8333V4.16667C1.66666 3.72464 1.84226 3.30072 2.15482 2.98816C2.46738 2.67559 2.89131 2.5 3.33333 2.5H16.6667C17.1087 2.5 17.5326 2.67559 17.8452 2.98816C18.1577 3.30072 18.3333 3.72464 18.3333 4.16667V15.8333C18.3333 16.2754 18.1577 16.6993 17.8452 17.0118C17.5326 17.3244 17.1087 17.5 16.6667 17.5Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.66666 6.66667H13.3333" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.66666 10H13.3333" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.66666 13.3333H10" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-medium">Article</div>
                <div className="text-[#667085] text-sm mt-1">
                  Add content to teach your AI agent.
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelect("Document")}
            className="w-full bg-[#101828] text-white border border-[#1D2939] rounded-lg p-4 text-left hover:border-[#2970FF] transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1D2939] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.6667 1.66667H5.00001C4.55798 1.66667 4.13405 1.84227 3.82149 2.15483C3.50893 2.46739 3.33334 2.89131 3.33334 3.33334V16.6667C3.33334 17.1087 3.50893 17.5326 3.82149 17.8452C4.13405 18.1577 4.55798 18.3333 5.00001 18.3333H15C15.442 18.3333 15.866 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V6.66667L11.6667 1.66667Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.6667 1.66667V6.66667H16.6667" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3333 10.8333H6.66666" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3333 14.1667H6.66666" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.33334 7.5H6.66667" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-medium">Document</div>
                <div className="text-[#667085] text-sm mt-1">
                  Upload a document to teach your AI agent.
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
} 