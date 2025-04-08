import React from "react";

interface InputHeaderProps {
  title: string;
  lastUpdated: string;
}

function InputHeader({ title, lastUpdated }: InputHeaderProps) {
  return (
    <header className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
      <div className="flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
        <h1 className="text-2xl font-medium text-white">{title}</h1>
        <p className="mt-2 text-sm font-light text-gray-500">
          Last updated:{" "}
          <span style={{ color: "rgba(234,236,240,1)" }}>{lastUpdated}</span>
        </p>
      </div>
      <div className="flex shrink-0 w-8 h-8" />
    </header>
  );
}

export default InputHeader; 