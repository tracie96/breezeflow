import React from "react";

interface DividerProps {
  text: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ text, className = "" }) => {
  return (
    <div
      className={`flex flex-col pt-1 pb-3.5 w-full text-sm leading-none text-gray-400 whitespace-nowrap ${className} max-md:max-w-full`}
    >
      <div className="z-10 self-center px-2 bg-neutral-900">{text}</div>
      <div className="flex shrink-0 h-px bg-slate-800 max-md:max-w-full" />
    </div>
  );
};

export default Divider;
