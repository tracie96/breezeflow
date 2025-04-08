import React, { useState } from "react";
import FormHeader from "./FormHeader";
import FormField from "./FormField";
import DropdownField from "./DropdownField";
import ActionButton from "./ActionButton";

interface WebsiteKnowledgeFormProps {
  onClose?: () => void;
  onSubmit?: (data: { knowledgeType: string, websiteUrl: string, title: string }) => void;
}

function WebsiteKnowledgeForm({ onClose, onSubmit }: WebsiteKnowledgeFormProps) {
  const [knowledgeType, setKnowledgeType] = useState("Website");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({ knowledgeType, websiteUrl, title });
    }
  };

  return (
    <section className="flex flex-col gap-8 items-end px-6 pt-6 pb-14 bg-gray-900 rounded-3xl border border-solid border-slate-800 w-[674px] max-md:px-5 max-md:pt-5 max-md:pb-10 max-md:w-full max-md:max-w-[674px] max-sm:px-4 max-sm:pt-4 max-sm:pb-8 max-sm:rounded-2xl">
      <FormHeader
        title="Add a knowledge"
        description="Add a knowledge base for AI to use when responding to your clients."
        onClose={onClose}
      />

      <div className="flex flex-col gap-4 items-start self-stretch w-full">
        <DropdownField
          label="Knowledge Type"
          value={knowledgeType}
          description="Use a website to teach your AI agent."
          onChange={setKnowledgeType}
        />

        <FormField 
          label="Website URL" 
          placeholder="https://" 
          value={websiteUrl}
          onChange={setWebsiteUrl}
        />

        <FormField 
          label="Title" 
          placeholder="Add a title" 
          value={title}
          onChange={setTitle}
        />
      </div>

      <ActionButton onClick={handleSubmit} />
    </section>
  );
}

export default WebsiteKnowledgeForm; 