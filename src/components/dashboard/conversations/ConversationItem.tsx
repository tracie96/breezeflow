import React from "react";

interface ConversationItemProps {
  name: string;
  duration: string;
  date: string;
  preview: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  name,
  duration,
  date,
  preview,
  isActive = false,
  onClick,
}) => {
  return (
    <div
      className={`w-full mt-4 px-4 py-2 rounded-lg cursor-pointer ${isActive ? "border border-[color:var(--Grey-900,#1D2939)] bg-[#101828]" : ""}`}
      onClick={onClick}
    >
      <div className="flex w-full items-center justify-between text-white">
        <div className="text-sm font-normal truncate">{name}</div>
        <div className="text-[10px] font-light whitespace-nowrap ml-2">
          {duration} • {date}
        </div>
      </div>
      <div className="text-[#98A2B3] text-xs font-light mt-2 truncate">
        {preview}
      </div>
    </div>
  );
};

export default ConversationItem; 