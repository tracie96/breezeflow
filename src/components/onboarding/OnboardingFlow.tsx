"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import StepIndicator from "./StepIndicator";
import FormField from "./FormField";
import InfoText from "./InfoText";
import ActionButton from "./ActionButton";
import { AddIcon } from "./icons";
import { RadioCircleIcon } from "./icons";
import CustomizationScreen from "../customization/CustomizationScreen";

type Step = "create" | "knowledge" | "customization";

const OnboardingFlow: React.FC = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>("create");
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [selectedCallToAction, setSelectedCallToAction] = useState("");
  const [callToActionLink, setCallToActionLink] = useState("");

  const handleNextStep = () => {
    switch (currentStep) {
      case "create":
        setCurrentStep("knowledge");
        break;
      case "knowledge":
        setCurrentStep("customization");
        break;
      case "customization":
        // Navigate to dashboard after completing the onboarding
        router.push("/dashboard/ai");
        break;
    }
  };

  const handleAddKnowledge = () => {
    // Create a new knowledge base item
    const newItem = {
      id: Date.now(),
      title: "New Knowledge Item",
      content: "",
      createdAt: new Date().toISOString(),
    };
    
    // Here you would typically:
    // 1. Add the item to your state/database
    // 2. Open a modal or form to edit the content
    // 3. Save the changes
    
    console.log("Adding new knowledge item:", newItem);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case "create":
        return (
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
        );
      case "knowledge":
        return (
          <section className="flex flex-col gap-4 items-start w-full">
            <div className="flex flex-col gap-2 items-start w-full">
              <h2 className="text-base font-medium leading-5 text-white">
                Additional Knowledge
              </h2>
              <p className="text-sm font-light text-gray-400">
                Add more information that you'd like your agent to know that is not on
                the website right now. You can also add more to this in the app after
                creating your agent.
              </p>
              <div className="flex flex-col gap-4 justify-end items-start w-full">
                <ActionButton
                  text="Add knowledge"
                  icon={<AddIcon />}
                  onClick={handleAddKnowledge}
                  className="flex gap-2 items-center px-4 py-3 h-11 rounded-xl border bg-slate-800 border-slate-700"
                  textClassName="text-sm tracking-normal text-center text-white"
                />
              </div>

              <div className="flex flex-col gap-4 w-full mt-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-base font-medium leading-5 text-white">
                    Call To Action <span className="text-gray-400">(Choose what actions the voice agent should perform)</span>
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                    <label className={`flex items-center gap-2 p-3 bg-slate-800 border rounded-xl cursor-pointer ${
                      selectedCallToAction === "call/demo" ? "border-blue-500" : "border-slate-700"
                    }`}>
                      <input 
                        type="radio" 
                        name="callToAction" 
                        className="hidden" 
                        checked={selectedCallToAction === "call/demo"}
                        onChange={() => setSelectedCallToAction("call/demo")}
                      />
                      <RadioCircleIcon />
                      <span className="text-white">Push for a call/demo</span>
                    </label>
                    
                    <label className={`flex items-center gap-2 p-3 bg-slate-800 border rounded-xl cursor-pointer ${
                      selectedCallToAction === "free-trial" ? "border-blue-500" : "border-slate-700"
                    }`}>
                      <input 
                        type="radio" 
                        name="callToAction" 
                        className="hidden"
                        checked={selectedCallToAction === "free-trial"}
                        onChange={() => setSelectedCallToAction("free-trial")}
                      />
                      <RadioCircleIcon />
                      <span className="text-white">Push visitor to start a free trial</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                    <label className={`flex items-center gap-2 p-3 bg-slate-800 border rounded-xl cursor-pointer ${
                      selectedCallToAction === "collect-info" ? "border-blue-500" : "border-slate-700"
                    }`}>
                      <input 
                        type="radio" 
                        name="callToAction" 
                        className="hidden"
                        checked={selectedCallToAction === "collect-info"}
                        onChange={() => setSelectedCallToAction("collect-info")}
                      />
                      <RadioCircleIcon />
                      <span className="text-white">Collect customer email/contact information for follow-ups</span>
                    </label>
                    
                    <label className={`flex items-center gap-2 p-3 bg-slate-800 border rounded-xl cursor-pointer ${
                      selectedCallToAction === "other" ? "border-blue-500" : "border-slate-700"
                    }`}>
                      <input 
                        type="radio" 
                        name="callToAction" 
                        className="hidden"
                        checked={selectedCallToAction === "other"}
                        onChange={() => setSelectedCallToAction("other")}
                      />
                      <RadioCircleIcon />
                      <span className="text-white">Other</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <h3 className="text-base font-medium leading-5 text-white">Link for Call To Action</h3>
                  <input
                    type="text"
                    placeholder="Enter your call to action link"
                    value={callToActionLink}
                    onChange={(e) => setCallToActionLink(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      case "customization":
        return (
          <div className="flex flex-col gap-6 items-start w-full">
            <CustomizationScreen />
          </div>
        );
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case "create":
        return "Create Agent";
      case "knowledge":
        return "Knowledge";
      case "customization":
        return "Customization";
    }
  };

  const getCurrentStepNumber = () => {
    switch (currentStep) {
      case "create":
        return 1;
      case "knowledge":
        return 2;
      case "customization":
        return 3;
    }
  };

  return (
    <main className="flex flex-col items-center bg-slate-950 min-h-screen">
      <Header />

      <section className="flex flex-col gap-10 items-start p-8 mt-10 bg-gray-900 rounded-3xl border border-slate-800 w-[778px] max-md:w-[90%] max-sm:p-6 max-sm:w-[95%]">
        <h1 className="text-2xl font-medium tracking-normal leading-normal text-white">
          {getStepTitle()}
        </h1>

        <div className="flex flex-col gap-8 items-start w-full">
          <StepIndicator currentStep={getCurrentStepNumber()} />

          <div className="flex flex-col gap-20 items-end w-full">
            {renderStepContent()}

            <button
              onClick={handleNextStep}
              className="gap-2.5 px-6 py-4 text-lg font-medium tracking-normal leading-normal text-center text-white bg-blue-700 rounded-2xl border border-white h-[55px] w-[209px] max-sm:w-full"
            >
              {currentStep === "customization" ? "Create" : "Next"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OnboardingFlow; 