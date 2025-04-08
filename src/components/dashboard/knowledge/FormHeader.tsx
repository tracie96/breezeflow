import React from "react";
import { CloseIcon } from "./IconComponents";

interface FormHeaderProps {
  title: string;
  description: string;
  onClose?: () => void;
}

function FormHeader({ title, description, onClose }: FormHeaderProps) {
  return (
    <header className="flex gap-8 items-start self-stretch w-full">
      <div className="flex flex-col flex-1 gap-2 items-start">
        <h2 className="text-2xl font-medium text-white max-sm:text-xl">
          {title}
        </h2>
        <p className="text-sm font-light text-gray-600 max-sm:text-xs">
          {description}
        </p>
      </div>
      <button aria-label="Close" onClick={onClose}>
        <CloseIcon width="24" height="24" />
      </button>
    </header>
  );
}

export default FormHeader; 