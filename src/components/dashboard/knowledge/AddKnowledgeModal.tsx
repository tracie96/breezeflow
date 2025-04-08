"use client";

import React, { useState } from "react";
import { CloseIcon, DropdownIcon, AttachmentIcon, LinkIcon, TextFormatIcon, ItalicIcon, UnderlineIcon } from "./IconComponents";
import KnowledgeTypeSelector from "./KnowledgeTypeSelector";
import ContentEditor from "./ContentEditor";
import KnowledgeForm from "./KnowledgeForm";
import VideoKnowledgeForm from "./VideoKnowledgeForm";
import WebsiteKnowledgeForm from "./WebsiteKnowledgeForm";
import InputDesign from "./InputDesign";

interface AddKnowledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type KnowledgeType = "Article" | "Document";

export default function AddKnowledgeModal({ isOpen, onClose }: AddKnowledgeModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [knowledgeType, setKnowledgeType] = useState<KnowledgeType>("Article");
  const [file, setFile] = useState<File | null>(null);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  if (!isOpen) return null;

  const handleSubmit = () => {
    // Handle form submission here
    if (knowledgeType === "Article") {
      console.log({ type: knowledgeType, title, content });
    } else {
      console.log({ type: knowledgeType, title, file });
    }
    // Move to next step
    setCurrentStep(2);
  };

  const handleSecondStepSubmit = () => {
    // Handle second step submission
    setCurrentStep(3);
  };

  const handleThirdStepSubmit = () => {
    // Handle third step submission
    setCurrentStep(4);
  };

  const handleFourthStepSubmit = () => {
    // Handle fourth step submission
    setCurrentStep(5);
  };

  const handleFinalSubmit = () => {
    // Handle final submission
    onClose();
  };

  const handleModalClose = () => {
    setCurrentStep(1); // Reset to first step
    onClose();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleTypeChange = (type: string) => {
    setKnowledgeType(type as KnowledgeType);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* First Modal */}
      {currentStep === 1 && (
        <form
          className="flex w-[674px] flex-col items-end gap-8 border bg-[#101828] pt-6 pb-14 px-6 rounded-3xl border-solid border-[#1D2939] max-md:w-full max-md:max-w-[674px] max-md:pt-5 max-md:pb-10 max-md:px-5 max-sm:pt-4 max-sm:pb-8 max-sm:px-4 max-sm:rounded-2xl"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="flex items-start gap-8 self-stretch">
            <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
              <h2 className="text-white text-2xl font-normal max-sm:text-xl">
                Add a knowledge
              </h2>
              <p className="text-[#525866] text-sm font-light max-sm:text-xs">
                Add a knowledge base for AI to use when responding to your clients.
              </p>
            </div>
            <button
              type="button"
              onClick={handleModalClose}
              aria-label="Close"
              className="focus:outline-none"
            >
              <CloseIcon width="24" height="24" />
            </button>
          </div>

          <div className="flex flex-col items-start gap-4 self-stretch">
            <KnowledgeTypeSelector
              selectedType={knowledgeType}
              onChange={handleTypeChange}
            />

            <div className="flex flex-col items-start gap-1.5 self-stretch max-sm:gap-1">
              <label
                htmlFor="title"
                className="text-white text-sm font-medium leading-5 max-sm:text-xs"
              >
                Title
              </label>
              <div className="flex flex-col justify-center items-start gap-4 self-stretch bg-[#101828] px-4 py-2.5 rounded-xl border-[1.5px] border-solid border-[#1D2939] max-sm:p-4 max-sm:rounded-lg">
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Add a title"
                  className="w-full text-[#475467] text-base font-light leading-6 border-[none] bg-transparent focus:outline-none"
                />
              </div>
            </div>

            {knowledgeType === "Article" && (
              <ContentEditor
                value={content}
                onChange={handleContentChange}
              />
            )}

            {knowledgeType === "Document" && (
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium leading-5 max-sm:text-xs">Upload File</label>
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  className="border-2 border-dashed border-[#1D2939] rounded-lg p-8 flex items-center justify-center cursor-pointer hover:border-[#2970FF] transition-colors"
                  onClick={() => document.getElementById('fileInput')?.click()}
                >
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={handleFileSelect}
                    accept=".doc,.docx,.pdf,.txt"
                  />
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1D2939] flex items-center justify-center mb-2">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.83334 8.33333L10 12.5L14.1667 8.33333" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 12.5V2.5" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="text-white">Click or drag to upload</div>
                    <div className="text-[#667085] text-sm">Docx, PDF, TXTs max.</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="gap-2.5 border text-white text-center text-lg font-medium tracking-[-0.2px] cursor-pointer bg-[#0048FF] px-6 py-4 rounded-2xl border-solid border-white max-sm:text-base max-sm:px-5 max-sm:py-3.5"
            >
              Next step
            </button>
          </div>
        </form>
      )}

      {/* Second Modal */}
      {currentStep === 2 && (
        <KnowledgeForm
          onClose={handleModalClose}
          onSubmit={handleSecondStepSubmit}
          initialTitle={title}
          initialType={knowledgeType}
        />
      )}

      {/* Third Modal */}
      {currentStep === 3 && (
        <VideoKnowledgeForm
          onClose={handleModalClose}
          onSubmit={handleThirdStepSubmit}
        />
      )}

      {/* Fourth Modal */}
      {currentStep === 4 && (
        <WebsiteKnowledgeForm
          onClose={handleModalClose}
          onSubmit={handleFourthStepSubmit}
        />
      )}

      {/* Fifth Modal */}
      {currentStep === 5 && (
        <InputDesign
          onClose={handleModalClose}
          onSave={handleFinalSubmit}
        />
      )}
    </div>
  );
} 