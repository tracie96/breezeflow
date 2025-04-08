"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const MarketingSection: React.FC = () => {
  return (
    <article className="grow px-16 py-16 w-full bg-gray-900 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/02f94470fc0584663a5dd1bac75d6c833fdfec26?placeholderIfAbsent=true&apiKey=6ab570d2ba5f4a1e8f0614bf834ae119"
        alt="Company logo"
        className="object-contain max-w-full aspect-[6.49] w-[182px]"
      />
      <div className="mt-20 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <h1 className="text-3xl font-semibold text-white max-md:max-w-full">
          Add Another Dimension to Your Website. The future of website
          experience is here
        </h1>
        <p className="mt-4 text-lg font-light leading-7 text-gray-200 opacity-70 max-md:max-w-full">
          A voice-powered guide. A seamless interaction. A website that
          converts. No more guesswork. No more endless scrolling. Visitors ask,
          your AI answers—
          <span className="font-medium text-[rgba(234,236,240,1)]">
            intelligently, instantly, effortlessly
          </span>
          .<br />
          It's the website experience people have been waiting for.
        </p>
      </div>
      <TestimonialCard />
    </article>
  );
};

export default MarketingSection;
