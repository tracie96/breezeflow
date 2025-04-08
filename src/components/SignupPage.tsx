"use client";
import React from "react";
import MarketingSection from "./MarketingSection";
import SignupForm from "./SignupForm";

const SignupPage: React.FC = () => {
  return (
    <section className="overflow-hidden py-5 pr-20 pl-5 bg-slate-950 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[61%] max-md:ml-0 max-md:w-full md:block hidden">
          <MarketingSection />
        </div>
        <div className="ml-5 w-[39%] max-md:ml-0 max-md:w-full">
          <SignupForm />
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
