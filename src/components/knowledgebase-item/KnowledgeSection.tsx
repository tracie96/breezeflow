"use client";
import React from "react";
import KnowledgeItem from "./KnowledgeItem";

const KnowledgeSection: React.FC = () => {
  const handleAddKnowledge = () => {
    // Implementation for adding knowledge would go here
    console.log("Add knowledge clicked");
  };

  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 w-full">
        <h3 className="text-base font-medium leading-5 text-white">
          Additional Knowledge
        </h3>
        <p className="text-sm font-light text-gray-400">
          Add more information that you'd like your agent to know that is not on
          the website right now. You can also add more to this in the app after
          creating your agent.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <KnowledgeItem type="link" content="www.breezelearn.com/FAQ" />
        <KnowledgeItem type="document" content="Document" />
        <button
          onClick={handleAddKnowledge}
          className="flex gap-2 items-center px-4 py-3 h-11 rounded-xl border cursor-pointer bg-slate-800 border-slate-700 w-fit"
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="I5404:63762;13:14824" layer-name="add" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <path d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z" fill="white"></path> <path d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z" fill="white"></path> </svg>',
            }}
          />
          <span className="text-sm tracking-normal text-center text-white">
            Add knowledge
          </span>
        </button>
      </div>
    </section>
  );
};

export default KnowledgeSection;
