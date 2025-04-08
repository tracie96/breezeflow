import React from "react";
import { DropdownIcon } from "./IconComponents";

interface DropdownFieldProps {
  label: string;
  value: string;
  description: string;
  onChange?: (value: string) => void;
}

function DropdownField({ label, value, description, onChange }: DropdownFieldProps) {
  const handleClick = () => {
    // In a real implementation this would open a dropdown
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex flex-col gap-1.5 items-start self-stretch w-full">
      <label className="text-sm font-medium leading-5 text-white">
        {label}
      </label>
      <div 
        className="flex flex-col gap-4 justify-center items-start self-stretch p-5 w-full rounded-xl border-solid border-[1.5px] border-slate-800 max-sm:px-4 max-sm:py-2 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-light text-gray-50">{value}</h3>
            <p className="text-xs font-light text-gray-400">{description}</p>
          </div>
          <button aria-label="Open dropdown">
            <DropdownIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DropdownField; 