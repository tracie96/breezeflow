import React from "react";
import { DropdownIcon } from "./IconComponents";

interface KnowledgeTypeSelectorProps {
  selectedType?: string;
  onChange?: (type: string) => void;
}

const KnowledgeTypeSelector: React.FC<KnowledgeTypeSelectorProps> = ({
  selectedType = "Article",
  onChange,
}) => {
  const handleClick = () => {
    // In a real implementation, this would open a dropdown
    // For now, we'll just call onChange with the current type
    if (onChange) {
      onChange(selectedType);
    }
  };

  return (
    <div className="flex flex-col items-start gap-1.5 self-stretch max-sm:gap-1">
      <label
        htmlFor="knowledge-type"
        className="text-white text-sm font-medium leading-5 max-sm:text-xs"
      >
        Knowledge Type
      </label>
      <div
        className="flex flex-col items-start gap-4 self-stretch cursor-pointer p-5 rounded-xl border-[1.5px] border-solid border-[#1D2939] max-sm:p-4 max-sm:rounded-lg"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-labelledby="knowledge-type"
      >
        <div className="flex justify-between items-center self-stretch w-full">
          <div className="flex flex-col gap-1">
            <div className="text-[#FCFCFD] text-base font-light leading-6 max-sm:text-sm">
              {selectedType}
            </div>
            <div className="text-[#98A2B3] text-xs font-light max-sm:text-[10px]">
              Add content to teach your AI agent.
            </div>
          </div>
          <div>
            <DropdownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeTypeSelector; 