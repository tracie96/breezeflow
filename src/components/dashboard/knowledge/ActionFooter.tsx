import React from "react";

interface ActionFooterProps {
  onSave?: () => void;
}

function ActionFooter({ onSave }: ActionFooterProps) {
  const handleSaveChanges = () => {
    // Handle save changes functionality
    console.log("Saving changes...");
    if (onSave) {
      onSave();
    }
  };

  return (
    <footer className="flex gap-4 items-center self-end mt-8 text-lg font-medium tracking-normal text-center text-white">
      <button
        onClick={handleSaveChanges}
        className="gap-2.5 self-stretch px-6 py-4 my-auto bg-blue-700 rounded-2xl border border-white border-solid max-md:px-5"
      >
        Save changes
      </button>
    </footer>
  );
}

export default ActionFooter; 