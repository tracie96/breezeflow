"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import StepIndicator from "./StepIndicator";

const KnowledgePage: React.FC = () => {
  const router = useRouter();

  const handleNextStep = () => {
    router.push("/customization");
  };

  return (
    <main className="flex flex-col items-center bg-slate-950 min-h-screen">
      <Header />

      <section className="flex flex-col gap-10 items-start p-8 mt-10 bg-gray-900 rounded-3xl border border-slate-800 w-[778px] max-md:w-[90%] max-sm:p-6 max-sm:w-[95%]">
        <h1 className="text-2xl font-medium tracking-normal leading-normal text-white">
          Knowledge
        </h1>

        <div className="flex flex-col gap-8 items-start w-full">
          <StepIndicator currentStep={2} />

          <div className="flex flex-col gap-20 items-end w-full">
            <div className="flex flex-col gap-6 items-start w-full">
              {/* Add your knowledge page content here */}
            </div>

            <button
              onClick={handleNextStep}
              className="gap-2.5 px-6 py-4 text-lg font-medium tracking-normal leading-normal text-center text-white bg-blue-700 rounded-2xl border border-white h-[55px] w-[209px] max-sm:w-full"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KnowledgePage; 