import React from "react";

interface ActionOptionProps {
  text: string;
  isSelected: boolean;
  onSelect: () => void;
}

const ActionOption: React.FC<ActionOptionProps> = ({
  text,
  isSelected,
  onSelect,
}) => {
  const circleIcon = isSelected
    ? '<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-[18px]"><circle cx="7.5" cy="9" r="7.03125" fill="#525866" stroke="#525866" stroke-width="0.9375"></circle></svg>'
    : '<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-[18px]"><circle cx="7.5" cy="9" r="7.03125" stroke="#525866" stroke-width="0.9375"></circle></svg>';

  return (
    <button
      onClick={onSelect}
      className="flex gap-2 items-center p-3 rounded-xl border border-gray-50 cursor-pointer"
      aria-pressed={isSelected}
    >
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: circleIcon,
          }}
        />
      </div>
      <span className="gap-1.5 text-sm font-light tracking-normal text-gray-50">
        {text}
      </span>
    </button>
  );
};

export default ActionOption;
