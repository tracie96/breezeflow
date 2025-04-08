import React, { useState } from "react";
import VideoKnowledgeTypeSelector from "./VideoKnowledgeTypeSelector";
import InputField from "./InputField";
import Button from "./Button";
import { CloseIcon } from "./IconComponents";

interface VideoKnowledgeFormProps {
  onClose?: () => void;
  onSubmit?: (data: { knowledgeType: string, youtubeUrl: string, title: string }) => void;
}

const VideoKnowledgeForm: React.FC<VideoKnowledgeFormProps> = ({ onClose, onSubmit }) => {
  const [knowledgeType, setKnowledgeType] = useState("Video");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [title, setTitle] = useState("");

  const handleAddKnowledge = () => {
    if (onSubmit) {
      onSubmit({ knowledgeType, youtubeUrl, title });
    }
  };

  return (
    <section className="flex flex-col px-6 pt-6 pb-14 bg-gray-900 rounded-3xl border border-solid border-[color:var(--Grey-900,#1D2939)] max-w-[674px] max-md:px-5">
      <header className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
        <div className="flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
          <h2 className="text-2xl font-medium text-white">Add a knowledge</h2>
          <p className="mt-2 text-sm font-light text-gray-600 max-md:max-w-full">
            Add a knowledge base for AI to use when responding to your clients.
          </p>
        </div>
        <div className="flex shrink-0 w-8 h-8 cursor-pointer" onClick={onClose}>
          <CloseIcon width="32" height="32" />
        </div>
      </header>

      <div className="mt-8 w-full max-md:max-w-full">
        <VideoKnowledgeTypeSelector
          selectedType={knowledgeType}
          onTypeChange={setKnowledgeType}
        />

        <div className="mt-4 w-full max-md:max-w-full">
          <InputField
            label="YouTube Video URL"
            placeholder="https://www.youtube.com/"
            value={youtubeUrl}
            onChange={setYoutubeUrl}
          />
        </div>

        <div className="mt-4 w-full max-md:max-w-full">
          <InputField
            label="Title"
            placeholder="Add a title"
            value={title}
            onChange={setTitle}
          />
        </div>
      </div>

      <div className="flex gap-4 items-center self-end mt-8">
        <Button onClick={handleAddKnowledge}>Confirm</Button>
      </div>
    </section>
  );
};

export default VideoKnowledgeForm; 