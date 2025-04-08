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
        {currentStep > 1 ? (
          <CheckCircleIcon />
        ) : (
          <span className="p-0.5 w-4 text-xs font-medium leading-4 text-center text-white bg-blue-600 rounded-[999px]">
            1
          </span>
        )}
        <span className="text-xl font-medium tracking-tight leading-5 text-white">
          Setup
        </span>
      </div>

      <ArrowRightIcon className="max-sm:hidden" />

      {/* Step 2 - Additional Knowledge */}
      <div className="flex gap-2 items-center">
        {currentStep > 2 ? (
          <CheckCircleIcon />
        ) : (
          <span className="p-0.5 w-4 text-xs font-medium leading-4 text-center text-white bg-blue-600 rounded-[999px]">
            2
          </span>
        )}
        <span className={`text-xl font-medium tracking-tight leading-5 ${currentStep >= 2 ? "text-white" : "text-gray-500"}`}>
          Additional Knowledge
        </span>
      </div>

      <ArrowRightIcon className="max-sm:hidden" />

      {/* Step 3 - Customization */}
      <div className="flex gap-2 items-center">
        {currentStep > 3 ? (
          <CheckCircleIcon />
        ) : (
          <span className={`p-0.5 w-4 text-xs font-medium leading-4 text-center ${
            currentStep >= 3 
              ? "text-white bg-blue-600" 
              : "text-gray-500 bg-white border border-gray-200"
          } rounded-[999px]`}>
            3
          </span>
        )}
        <span className={`text-xl font-medium tracking-tight leading-5 ${currentStep >= 3 ? "text-white" : "text-gray-500"}`}>
          Customization
        </span>
      </div>
    </nav>
  );
};

export default StepIndicator;
