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

interface OnboardingData {
  // Step 1: Setup
  companyName: string;
  websiteUrl: string;
  contactEmail: string;
  contactPhone: string;
  
  // Step 2: Knowledge
  knowledgeItems: Array<{
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }>;
  selectedCallToAction: string;
  callToActionLink: string;
  
  // Step 3: Customization
  brandColor: string;
  logo: string | null;
  agentName: string;
  welcomeMessage: string;
}

const OnboardingFlow: React.FC = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>("create");
  
  // Initialize all onboarding data fields
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    // Step 1: Setup
    companyName: "",
    websiteUrl: "",
    contactEmail: "",
    contactPhone: "",
    
    // Step 2: Knowledge
    knowledgeItems: [],
    selectedCallToAction: "",
    callToActionLink: "",
    
    // Step 3: Customization
    brandColor: "#0066FF",  // Default blue color
    logo: null,
    agentName: "",
    welcomeMessage: ""
  });

  // Helper function to update onboarding data
  const updateOnboardingData = (field: keyof OnboardingData, value: any) => {
    setOnboardingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNextStep = () => {
    // Save current step data to local storage or API
    console.log(`Saving data for step: ${currentStep}`, onboardingData);
    
    switch (currentStep) {
      case "create":
        setCurrentStep("knowledge");
        break;
      case "knowledge":
        setCurrentStep("customization");
        break;
      case "customization":
        // Submit the complete onboarding data to your API
        submitOnboardingData(onboardingData);
        // Navigate to dashboard after completing the onboarding
        router.push("/dashboard/ai");
        break;
    }
  };

  const submitOnboardingData = async (data: OnboardingData) => {
    try {
      // Replace with your actual API endpoint
      console.log("Submitting onboarding data:", data);
      // const response = await fetch('/api/onboarding', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      // 
      // if (!response.ok) {
      //   throw new Error('Failed to submit onboarding data');
      // }
      // 
      // const result = await response.json();
      // console.log('Onboarding data submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting onboarding data:', error);
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
    
    // Add the item to our onboarding data
    updateOnboardingData('knowledgeItems', [...onboardingData.knowledgeItems, newItem]);
    
    console.log("Adding new knowledge item:", newItem);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case "create":
        return (
          <div className="flex flex-col gap-6 items-start w-full">
            <FormField
              label="Company Name"
              value={onboardingData.companyName}
              onChange={(e) => updateOnboardingData('companyName', e.target.value)}
              placeholder="Enter your company name"
            />

            <div className="flex flex-col gap-1.5 items-start w-full">
              <FormField
                label="Your Website"
                value={onboardingData.websiteUrl}
                onChange={(e) => updateOnboardingData('websiteUrl', e.target.value)}
                placeholder="Enter your website URL"
              />
              <InfoText text="Your agent will learn everything about your company that's on your website." />
            </div>
            
            <FormField
              label="Contact Email"
              value={onboardingData.contactEmail}
              onChange={(e) => updateOnboardingData('contactEmail', e.target.value)}
              placeholder="Enter your contact email"
            />
            
            <FormField
              label="Contact Phone (optional)"
              value={onboardingData.contactPhone}
              onChange={(e) => updateOnboardingData('contactPhone', e.target.value)}
              placeholder="Enter your contact phone number"
            />
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

              {onboardingData.knowledgeItems.length > 0 && (
                <div className="flex flex-col gap-3 w-full mt-4">
                  <h3 className="text-base font-medium leading-5 text-white">
                    Your Knowledge Items
                  </h3>
                  <div className="flex flex-col gap-2 w-full">
                    {onboardingData.knowledgeItems.map((item) => (
                      <div key={item.id} className="p-3 bg-slate-800 border border-slate-700 rounded-xl">
                        <h4 className="text-sm font-medium text-white">{item.title}</h4>
                        <textarea
                          value={item.content}
                          onChange={(e) => {
                            const updatedItems = onboardingData.knowledgeItems.map(knowledgeItem => 
                              knowledgeItem.id === item.id 
                                ? {...knowledgeItem, content: e.target.value} 
                                : knowledgeItem
                            );
                            updateOnboardingData('knowledgeItems', updatedItems);
                          }}
                          placeholder="Enter knowledge content..."
                          className="mt-2 w-full p-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-gray-400"
                          rows={3}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4 w-full mt-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-base font-medium leading-5 text-white">
                    Call To Action <span className="text-gray-400">(Choose what actions the voice agent should perform)</span>
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                    <label className={`flex items-center gap-2 p-3 bg-slate-800 border rounded-xl cursor-pointer ${
                      onboardingData.selectedCallToAction === "call/demo" ? "border-blue-500" : "border-slate-700"
                    }`}>
                      <input 
                        type="radio" 
                        name="callToAction" 
                        className="hidden" 
                        checked={onboardingData.selectedCallToAction === "call/demo"}
                        onChange={() => updateOnboardingData('selectedCallToAction', 'call/demo')}
                      />
                      <RadioCircleIcon />
                      <span className="text-white">Push for a call/demo</span>
                    </label>
                    
                    <label className={`flex items-center gap-2 p-3 bg-slate-800 border rounded-xl cursor-pointer ${
                      onboardingData.selectedCallToAction === "free-trial" ? "border-blue-500" : "border-slate-700"
                    }`}>
                      <input 
                        type="radio" 
                        name="callToAction" 
                        className="hidden"
                        checked={onboardingData.selectedCallToAction === "free-trial"}
                        onChange={() => updateOnboardingData('selectedCallToAction', 'free-trial')}
                      />
                      <RadioCircleIcon />
                      <span className="text-white">Push visitor to start a free trial</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                    <label className={`flex items-center gap-2 p-3 bg-slate-800 border rounded-xl cursor-pointer ${
                      onboardingData.selectedCallToAction === "collect-info" ? "border-blue-500" : "border-slate-700"
                    }`}>
                      <input 
                        type="radio" 
                        name="callToAction" 
                        className="hidden"
                        checked={onboardingData.selectedCallToAction === "collect-info"}
                        onChange={() => updateOnboardingData('selectedCallToAction', 'collect-info')}
                      />
                      <RadioCircleIcon />
                      <span className="text-white">Collect customer email/contact information for follow-ups</span>
                    </label>
                    
                    <label className={`flex items-center gap-2 p-3 bg-slate-800 border rounded-xl cursor-pointer ${
                      onboardingData.selectedCallToAction === "other" ? "border-blue-500" : "border-slate-700"
                    }`}>
                      <input 
                        type="radio" 
                        name="callToAction" 
                        className="hidden"
                        checked={onboardingData.selectedCallToAction === "other"}
                        onChange={() => updateOnboardingData('selectedCallToAction', 'other')}
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
                    value={onboardingData.callToActionLink}
                    onChange={(e) => updateOnboardingData('callToActionLink', e.target.value)}
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
            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-base font-medium leading-5 text-white">Agent Customization</h2>
              
              <FormField
                label="Agent Name"
                value={onboardingData.agentName}
                onChange={(e) => updateOnboardingData('agentName', e.target.value)}
                placeholder="Enter your AI agent's name"
              />
              
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium leading-5 text-white">
                  Welcome Message
                </label>
                <textarea
                  value={onboardingData.welcomeMessage}
                  onChange={(e) => updateOnboardingData('welcomeMessage', e.target.value)}
                  placeholder="Enter a welcome message for your agent to greet visitors"
                  className="p-5 w-full text-base font-light leading-6 text-gray-200 bg-transparent rounded-2xl border border-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium leading-5 text-white">
                  Brand Color
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={onboardingData.brandColor}
                    onChange={(e) => updateOnboardingData('brandColor', e.target.value)}
                    className="w-12 h-12 border-0 rounded-md cursor-pointer"
                  />
                  <span className="text-white">{onboardingData.brandColor}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium leading-5 text-white">
                  Logo Upload
                </label>
                <div className="flex items-center justify-center p-6 bg-slate-800 border border-dashed border-slate-600 rounded-xl text-center cursor-pointer hover:bg-slate-700 transition-colors">
                  <span className="text-gray-400">
                    {onboardingData.logo ? "Logo selected" : "Click to upload your company logo"}
                  </span>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        // In a real app, you'd upload the file to your server/storage
                        // For now, just store the file name
                        updateOnboardingData('logo', e.target.files[0].name);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            
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