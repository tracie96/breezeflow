"use client";
import React, { useState, useCallback } from "react";

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  }, [code]);

  return (
    <div className="w-full font-light">
      <div className="w-full">
        <label className="text-sm leading-none text-white block">
          Copy and paste the code into your website's HTML file, right before
          the closing body tag
        </label>
        <div className="flex flex-col justify-center p-3 md:p-5 mt-1.5 w-full text-sm md:text-base leading-6 text-gray-50 bg-gray-900 rounded-2xl border-solid border-[1.5px] border-[color:var(--Grey-900,#1D2939)] overflow-x-auto">
          <pre className="flex justify-between items-center w-full">
            <code className="w-full whitespace-pre-wrap break-all">
              {code}
            </code>
          </pre>
        </div>
      </div>
      <button
        onClick={handleCopy}
        className="flex gap-2 md:gap-2.5 justify-center items-center mt-4 md:mt-8 px-4 md:px-6 py-3 md:py-4 text-base md:text-lg font-medium tracking-normal text-center text-white rounded-xl md:rounded-2xl border border-solid bg-slate-800 border-slate-700 w-full md:w-[250px]"
      >
        <div className="flex shrink-0 self-stretch my-auto w-5 md:w-6 h-5 md:h-6" />
        <span className="self-stretch my-auto">
          {isCopied ? "Copied!" : "Copy to clipboard"}
        </span>
      </button>
    </div>
  );
};

export default CodeSnippet;
