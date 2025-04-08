import React from "react";

interface VoiceSelectionButtonProps {
  name: string;
  isSelected: boolean;
  onSelect: () => void;
}

const VoiceSelectionButton: React.FC<VoiceSelectionButtonProps> = ({
  name,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`items-center border flex gap-2 grow shrink w-[121px] px-3 py-2 rounded-xl border-solid ${
        isSelected
          ? "bg-[rgba(192,213,255,1)] border-[rgba(51,92,255,1)]"
          : "border-[color:var(--Grey-50,#FCFCFD)]"
      }`}
      onClick={onSelect}
    >
      {isSelected ? (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6ab570d2ba5f4a1e8f0614bf834ae119/b33a4c63b843a0784a47bdca6d8af2830fea914b?placeholderIfAbsent=true"
          className="aspect-[0.94] object-contain w-[15px] self-stretch shrink-0 my-auto"
        />
      ) : (
        <div className="self-stretch flex min-h-[18px] items-center gap-1.5 w-[15px] my-auto">
          <div className="border self-stretch flex min-h-[15px] w-[15px] my-auto rounded-[50%] border-[rgba(82,88,102,1)] border-solid" />
        </div>
      )}
      <div
        className={`self-stretch gap-1.5 text-sm font-normal whitespace-nowrap tracking-[-0.2px] flex-1 shrink basis-4 my-auto ${
          isSelected ? "text-[rgba(51,92,255,1)]" : "text-[#FCFCFD] font-light"
        }`}
      >
        {name}
      </div>
      <div className="items-center bg-[#1D2939] self-stretch flex gap-2.5 w-8 h-8 my-auto p-2 rounded-[48px]">
        <div className="self-stretch flex min-h-4 w-4 my-auto" />
      </div>
    </div>
  );
};

export default VoiceSelectionButton; 