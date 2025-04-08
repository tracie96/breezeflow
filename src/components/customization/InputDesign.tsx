"use client";
import React from "react";
import ProgressIndicator from "./ProgressIndicator";
// import AvatarSelector from "./AvatarSelector";
// import VoiceOption from "./VoiceOption";
// import ThemeToggle from "./ThemeToggle";

const InputDesign: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 items-start p-5 mx-auto my-0 w-full max-w-[1200px] max-md:p-4 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <ProgressIndicator />

      <div className="flex flex-col gap-8 w-full">

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium leading-5 text-white">
            Website Agent Name
          </label>
          <input
            className="p-5 text-base font-light leading-6 text-gray-200 rounded-2xl border border-gray-50 border-solid h-[60px]"
            placeholder="Enter your website agent's name"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium leading-5 text-white">
            Tone
          </label>
          <button className="flex justify-between items-center p-5 rounded-2xl border border-gray-50 border-solid h-[60px]">
            <span className="text-base font-light leading-6 text-gray-200">
              Select a tone for your agent
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="I5404:53573;13:15218" layer-name="Icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="dropdown-icon" style="width: 24px; height: 24px"> <path d="M11.9995 16.8C11.2995 16.8 10.5995 16.53 10.0695 16L3.54953 9.48001C3.25953 9.19001 3.25953 8.71001 3.54953 8.42001C3.83953 8.13001 4.31953 8.13001 4.60953 8.42001L11.1295 14.94C11.6095 15.42 12.3895 15.42 12.8695 14.94L19.3895 8.42001C19.6795 8.13001 20.1595 8.13001 20.4495 8.42001C20.7395 8.71001 20.7395 9.19001 20.4495 9.48001L13.9295 16C13.3995 16.53 12.6995 16.8 11.9995 16.8Z" fill="#FCFCFD"></path> </svg>',
              }}
            />
          </button>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium leading-5 text-white">
            Voice Selection
          </label>
          <div className="flex flex-wrap gap-4 max-md:gap-3 max-sm:gap-2">
        
          </div>
        </div>

        <div className="flex flex-col gap-1.5 h-[156px]">
          <div className="flex gap-2 items-center">
            <label className="text-sm font-medium leading-5 text-white">
              Welcome Message
            </label>
            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="5410:64021" layer-name="Icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="info-icon" style="width: 18px; height: 18px"> <path d="M9 17.0625C4.5525 17.0625 0.9375 13.4475 0.9375 9C0.9375 4.5525 4.5525 0.9375 9 0.9375C13.4475 0.9375 17.0625 4.5525 17.0625 9C17.0625 13.4475 13.4475 17.0625 9 17.0625ZM9 2.0625C5.175 2.0625 2.0625 5.175 2.0625 9C2.0625 12.825 5.175 15.9375 9 15.9375C12.825 15.9375 15.9375 12.825 15.9375 9C15.9375 5.175 12.825 2.0625 9 2.0625Z" fill="#EAECF0"></path> <path d="M9 10.3125C8.6925 10.3125 8.4375 10.0575 8.4375 9.75V6C8.4375 5.6925 8.6925 5.4375 9 5.4375C9.3075 5.4375 9.5625 5.6925 9.5625 6V9.75C9.5625 10.0575 9.3075 10.3125 9 10.3125Z" fill="#EAECF0"></path> <path d="M9 12.75C8.9025 12.75 8.805 12.7275 8.715 12.69C8.625 12.6525 8.5425 12.6 8.4675 12.5325C8.4 12.4575 8.3475 12.3825 8.31 12.285C8.2725 12.195 8.25 12.0975 8.25 12C8.25 11.9025 8.2725 11.805 8.31 11.715C8.3475 11.625 8.4 11.5425 8.4675 11.4675C8.5425 11.4 8.625 11.3475 8.715 11.31C8.895 11.235 9.105 11.235 9.285 11.31C9.375 11.3475 9.4575 11.4 9.5325 11.4675C9.6 11.5425 9.6525 11.625 9.69 11.715C9.7275 11.805 9.75 11.9025 9.75 12C9.75 12.0975 9.7275 12.195 9.69 12.285C9.6525 12.3825 9.6 12.4575 9.5325 12.5325C9.4575 12.6 9.375 12.6525 9.285 12.69C9.195 12.7275 9.0975 12.75 9 12.75Z" fill="#EAECF0"></path> </svg>',
              }}
            />
          </div>
          <div className="flex flex-1 p-5 rounded-2xl border border-gray-50 border-solid">
            <p className="text-base font-light leading-6 text-gray-50">
              <span>Our Suggestion: Hi, my name is &lt;</span>
              <span className="agent-name">&gt; and I'm &lt;</span>
              <span className="company-name">
                &gt;'s website agent. May I ask - what brings you to our website
                today?
              </span>
            </p>
          </div>
          <p className="text-sm font-light tracking-tight leading-5 text-gray-200">
            Customize the greeting message the agent will use when engaging
            visitors.
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium leading-5 text-white">
            Theme
          </label>
        </div>
      </div>

      <button className="px-6 py-4 text-lg font-medium tracking-normal text-white bg-blue-700 rounded-2xl border border-white border-solid cursor-pointer h-[55px] w-[209px] max-sm:w-full">
        Create
      </button>
    </section>
  );
};

export default InputDesign;
