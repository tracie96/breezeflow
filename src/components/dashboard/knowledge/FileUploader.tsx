import React from "react";
import UploadIcon from "./UploadIcon";

interface FileUploaderProps {
  onFileSelect?: (file: File) => void;
}

function FileUploader({ onFileSelect }: FileUploaderProps) {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleClick = () => {
    document.getElementById('file-upload')?.click();
  };

  return (
    <div className="flex flex-col gap-1.5 items-start self-stretch w-full">
      <label className="text-sm font-medium leading-5 text-white">
        Upload File
      </label>
      <div
        className="flex gap-4 justify-center items-center self-stretch px-4 py-5 w-full rounded-xl border-dashed bg-slate-950 border-[1.5px] border-slate-800 max-sm:px-3 max-sm:py-4 cursor-pointer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input 
          type="file" 
          id="file-upload" 
          className="hidden" 
          onChange={handleFileChange}
          accept=".docx,.pdf"
        />
        <div className="flex flex-col gap-2 justify-center items-center">
          <UploadIcon />
          <div className="flex flex-col items-center w-[402px] max-md:w-full">
            <p className="text-sm leading-5 text-center text-gray-50">
              Click or drag to upload
            </p>
            <p className="text-xs font-light leading-4 text-center text-gray-600">
              Docx, PDF | 10MB max.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileUploader; 