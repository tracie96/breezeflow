import React from "react";
import { DropdownIcon } from "./IconComponents";

interface VideoKnowledgeTypeSelectorProps {
  selectedType: string;
  onTypeChange?: (type: string) => void;
}

const VideoKnowledgeTypeSelector: React.FC<VideoKnowledgeTypeSelectorProps> = ({ 
  selectedType, 
  onTypeChange 
}) => {
  const handleClick = () => {
    // In a real implementation, this would open a dropdown
    if (onTypeChange) {
      onTypeChange(selectedType);
    }
  };

  return (
    <div className="w-full max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="text-sm font-medium leading-none text-white">
          Knowledge Type
        </div>
        <div
          className="flex flex-col justify-center p-5 mt-1.5 w-full font-light rounded-xl border-solid border-[1.5px] border-[color:var(--Grey-900,#1D2939)] max-md:max-w-full cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex flex-wrap justify-between items-center w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-60 max-md:max-w-full">
              <div className="text-base text-gray-50">
                Video
              </div>
              <div className="text-xs text-gray-400">
                Use a YouTube video to teach your AI agent.
              </div>
            </div>
            <div className="flex shrink-0 self-stretch my-auto w-6 h-6">
              <DropdownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoKnowledgeTypeSelector; 