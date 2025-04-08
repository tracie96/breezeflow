"use client";
import React, { useState } from "react";
import Header from "./Header";
import StepIndicator from "./StepIndicator";
import FormField from "./FormField";
import InfoText from "./InfoText";

function InputDesign() {
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  const handleNextStep = () => {
    // Handle form submission and navigation to next step
    console.log("Form data:", { companyName, websiteUrl });
    // Navigate to next step logic would go here
  };

  return (
    <div className="flex flex-col items-center bg-slate-950 min-h-[screen]">
      <Header />

      <div className="flex flex-col gap-10 items-start p-8 mt-10 bg-gray-900 rounded-3xl border border-slate-800 w-[778px] max-md:w-[90%] max-sm:p-6 max-sm:w-[95%]">
        <h1 className="text-2xl font-medium tracking-normal leading-normal text-white">
          Create Agent
        </h1>

        <div className="flex flex-col gap-8 items-start w-full">
          <StepIndicator currentStep={1} />

          <div className="flex flex-col gap-20 items-end w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              <FormField
                label="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter your company name"
              />

              <div className="flex flex-col gap-1.5 items-start w-full">
                <FormField
                  label="Your Website"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="Enter your website URL"
                />
                <InfoText text="Your agent will learn everything about your company that's on your website." />
              </div>
            </div>

            <button
              onClick={handleNextStep}
              className="gap-2.5 px-6 py-4 text-lg font-medium tracking-normal leading-normal text-center text-white bg-blue-700 rounded-2xl border border-white h-[55px] w-[209px] max-sm:w-full"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputDesign;
