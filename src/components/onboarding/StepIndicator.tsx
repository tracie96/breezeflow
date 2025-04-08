import React from "react";
import { CheckCircleIcon, ArrowRightIcon } from "./icons";

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  return (
    <nav className="flex gap-4 items-center max-sm:flex-wrap">
      {/* Step 1 - Setup */}
      <div className="flex gap-2 items-center">
        <CheckCircleIcon />
        <span className="text-xl font-medium tracking-tight leading-5 text-white">
          Setup
        </span>
      </div>

      <ArrowRightIcon className="max-sm:hidden" />

      {/* Step 2 - Additional Knowledge */}
      <div className="flex gap-2 items-center">
        <span className="p-0.5 w-4 text-xs font-medium leading-4 text-center text-white bg-blue-600 rounded-[999px]">
          2
        </span>
        <span className="text-xl font-medium tracking-tight leading-5 text-white">
          Additional Knowledge
        </span>
      </div>

      <ArrowRightIcon className="max-sm:hidden" />

      {/* Step 3 - Customization */}
      <div className="flex gap-2 items-center">
        <span className="p-0.5 w-4 text-xs font-medium leading-4 text-center text-gray-500 bg-white border border-gray-200 rounded-[999px]">
          3
        </span>
        <span className="text-xl font-medium tracking-tight leading-5 text-gray-500">
          Customization
        </span>
      </div>
    </nav>
  );
};

export default StepIndicator;
