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
    <div className="w-full font-light max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <label className="text-sm leading-none text-white max-md:max-w-full">
          Copy and paste the code into your website's HTML file, right before
          the closing body tag
        </label>
        <div className="flex flex-col justify-center p-5 mt-1.5 w-full text-base leading-6 text-gray-50 bg-gray-900 rounded-2xl border-solid border-[1.5px] border-[color:var(--Grey-900,#1D2939)] max-md:max-w-full">
          <pre className="flex justify-between items-center w-full max-md:max-w-full">
            <code className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full whitespace-pre-wrap">
              {code}
            </code>
          </pre>
        </div>
      </div>
      <button
        onClick={handleCopy}
        className="flex gap-2.5 justify-center items-center mt-8 px-6 py-4 text-lg font-medium tracking-normal text-center text-white rounded-2xl border border-solid bg-slate-800 border-slate-700 min-w-60 w-[250px] max-md:px-5"
      >
        <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
        <span className="self-stretch my-auto">
          {isCopied ? "Copied!" : "Copy to clipboard"}
        </span>
      </button>
    </div>
  );
};

export default CodeSnippet;
