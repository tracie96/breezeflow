"use client";
import React, { useState } from "react";
import ActionOption from "./ActionOption";

const CallToActionSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [ctaLink, setCtaLink] = useState<string>("");

  const options = [
    "Push for a call/demo",
    "Push visitor to start a free trial",
    "Collect customer email/contact information for follow-ups",
    "Other",
  ];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCtaLink(e.target.value);
  };

  return (
    <section className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex gap-1 items-center">
          <h3 className="text-base font-medium leading-5 text-white">
            Call To Action
          </h3>
          <p className="text-sm font-light leading-5 text-gray-400">
            (Choose what actions the voice agent should perform)
          </p>
        </div>
        <div className="flex flex-wrap gap-4 w-full">
          {options.map((option) => (
            <ActionOption
              key={option}
              text={option}
              isSelected={selectedOption === option}
              onSelect={() => handleOptionSelect(option)}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center w-full">
        <label
          htmlFor="ctaLink"
          className="text-base font-medium leading-5 text-white"
        >
          Link for Call To Action
        </label>
        <div className="flex flex-1 px-5 py-4 rounded-2xl border border-gray-50">
          <input
            id="ctaLink"
            type="text"
            value={ctaLink}
            onChange={handleLinkChange}
            placeholder="Enter your call to action link"
            className="flex-1 gap-2 text-base font-light leading-6 text-gray-200 bg-transparent outline-none w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
