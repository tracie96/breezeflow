import React, { useState } from "react";
import FormHeader from "./FormHeader";
import KnowledgeTypeSelector from "./KnowledgeTypeSelector";
import FileUploader from "./FileUploader";
import TitleInput from "./TitleInput";
import ActionButton from "./ActionButton";

interface KnowledgeFormProps {
  onClose?: () => void;
  onSubmit?: () => void;
  initialTitle?: string;
  initialType?: string;
}

function KnowledgeForm({ 
  onClose, 
  onSubmit, 
  initialTitle = "", 
  initialType = "Document" 
}: KnowledgeFormProps) {
  const [title, setTitle] = useState(initialTitle);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [type, setType] = useState(initialType);

  const handleTypeChange = (newType: string) => {
    setType(newType);
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <section className="flex flex-col gap-8 items-end px-6 pt-6 pb-14 bg-gray-900 rounded-3xl border border-solid border-slate-800 w-[674px] max-md:px-5 max-md:pt-5 max-md:pb-10 max-md:w-full max-sm:px-4 max-sm:pt-4 max-sm:pb-8 max-sm:rounded-2xl">
      <FormHeader 
        title="Add Knowledge" 
        description="Upload a document to your knowledge base"
        onClose={onClose} 
      />
      <div className="flex flex-col gap-4 items-start self-stretch w-full">
        <KnowledgeTypeSelector
          selectedType={type}
          onChange={handleTypeChange}
        />
        <FileUploader onFileSelect={handleFileSelect} />
        <TitleInput value={title} onChange={handleTitleChange} />
      </div>
      <div className="flex gap-4 items-center">
        <ActionButton onClick={handleSubmit} />
      </div>
    </section>
  );
}

export default KnowledgeForm; 