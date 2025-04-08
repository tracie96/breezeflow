import React from "react";

interface ActionButtonProps {
  onClick?: () => void;
  label?: string;
}

function ActionButton({ onClick, label = "Add knowledge" }: ActionButtonProps) {
  return (
    <button
      className="gap-2.5 px-6 py-4 text-lg font-medium tracking-normal text-center text-white bg-blue-700 rounded-2xl border border-white border-solid cursor-pointer max-sm:w-full"
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ActionButton; 