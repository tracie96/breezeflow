import React from "react";
import {
  AttachmentIcon,
  LinkIcon,
  TextFormatIcon,
  ItalicIcon,
  UnderlineIcon,
} from "./IconComponents";

interface ContentEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const ContentEditor: React.FC<ContentEditorProps> = ({
  value,
  onChange,
  placeholder = "Add content",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handleToolbarClick = (tool: string) => {
    // In a real implementation, this would apply formatting
    console.log(`Applying ${tool} formatting`);
  };

  return (
    <div className="flex flex-col items-start gap-1.5 self-stretch h-[281px] max-sm:gap-1">
      <label
        htmlFor="content"
        className="text-white text-sm font-medium leading-5 max-sm:text-xs"
      >
        Content
      </label>
      <div className="flex h-[255px] flex-col justify-between items-start self-stretch bg-[#101828] pt-2.5 rounded-xl border-[1.5px] border-solid border-[#1D2939] max-sm:p-4 max-sm:rounded-lg">
        <div className="flex w-full h-full px-4 py-0">
          <textarea
            id="content"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full h-full text-[#667085] text-sm font-light resize-none border-[none] bg-transparent focus:outline-none"
          />
        </div>
        <div className="flex items-center self-stretch p-4 border-t-[#1D2939] border-t border-solid">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleToolbarClick("attachment")}
              aria-label="Add attachment"
            >
              <AttachmentIcon />
            </button>
            <button
              type="button"
              onClick={() => handleToolbarClick("link")}
              aria-label="Add link"
            >
              <LinkIcon />
            </button>
            <button
              type="button"
              onClick={() => handleToolbarClick("format")}
              aria-label="Format text"
            >
              <TextFormatIcon />
            </button>
            <button
              type="button"
              onClick={() => handleToolbarClick("italic")}
              aria-label="Italic"
            >
              <ItalicIcon />
            </button>
            <button
              type="button"
              onClick={() => handleToolbarClick("underline")}
              aria-label="Underline"
            >
              <UnderlineIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentEditor; 