"use client";
import React from "react";

export function AgentFooter() {
  return (
    <footer className="flex gap-1.5 items-center mt-28 text-xl text-center text-gray-400 max-md:mt-10">
      <p className="self-stretch my-auto">
        Powered by
      </p>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6ab570d2ba5f4a1e8f0614bf834ae119/9f6a6ea35b82199da0972cc3489272c0c80f565e?placeholderIfAbsent=true"
        alt="BreezeFlow logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[6.71] w-[141px]"
      />
    </footer>
  );
} 