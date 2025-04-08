"use client";
import React from "react";

interface AgentHeaderProps {
  onClose: () => void;
  onMinimize: () => void;
}

export function AgentHeader({ onClose, onMinimize }: AgentHeaderProps) {
  return (
    <header className="flex gap-4 items-center self-stretch p-6 border-b border-solid border-b-[color:var(--Grey-300,#EAECF0)] max-md:px-5">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
        <div className="flex flex-wrap gap-3 items-center self-stretch my-auto text-3xl font-medium min-w-60 text-neutral-900 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6ab570d2ba5f4a1e8f0614bf834ae119/3b9ef850eedcd4e91191349ac556df83db1ee798?placeholderIfAbsent=true"
            alt="Agent avatar"
            className="object-contain shrink-0 self-stretch my-auto w-12 rounded-none aspect-square"
          />
          <h1 className="self-stretch my-auto max-md:max-w-full">
            Nik - BreezeFlow's Website Agent
          </h1>
        </div>
        <div className="flex gap-2.5 items-center self-stretch my-auto">
          <MinimizeButton onMinimize={onMinimize} />
          <CloseButton onClose={onClose} />
        </div>
      </div>
    </header>
  );
}

function MinimizeButton({ onMinimize }: { onMinimize: () => void }) {
  return (
    <button
      onClick={onMinimize}
      className="flex gap-4 items-center self-stretch p-3 my-auto w-14 h-14 bg-zinc-100 rounded-[84px] hover:bg-zinc-200"
      aria-label="Minimize"
    >
      <div className="flex gap-4 justify-center items-center self-stretch my-auto w-8 h-8 rounded-3xl">
        <div className="flex self-stretch my-auto min-h-[42px] w-[42px]" />
      </div>
    </button>
  );
}

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button
      onClick={onClose}
      className="flex gap-4 items-center self-stretch p-3 my-auto w-14 h-14 bg-zinc-100 rounded-[84px] hover:bg-zinc-200"
      aria-label="Close"
    >
      <div className="flex gap-3.5 justify-center items-center self-stretch my-auto w-8 rounded-3xl min-h-8">
        <div className="flex self-stretch my-auto min-h-8 w-[31px]" />
      </div>
    </button>
  );
} 