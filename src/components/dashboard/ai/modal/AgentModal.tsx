"use client";
import React from "react";
import { AgentHeader } from "./AgentHeader";
import { AgentContent } from "./AgentContent";
import { AgentFooter } from "./AgentFooter";

interface AgentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AgentModal({ isOpen, onClose }: AgentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative w-[1000px] max-w-[95vw] max-h-[90vh] overflow-y-auto scrollbar-hide">
        <article className="flex overflow-hidden flex-col items-center pb-5 bg-white border border-solid border-[color:var(--rad-stroke,#667085)] rounded-[32px]">
          <AgentHeader onClose={onClose} onMinimize={onClose} />
          <AgentContent />
          <AgentFooter />
        </article>
      </div>
    </div>
  );
}

// Add this CSS to hide scrollbar while maintaining scroll functionality
const styles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
} 