"use client";
import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import Divider from "./Divider";
import VerificationScreen from "./VerificationScreen";

const SignupForm: React.FC = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setShowVerification(true);
  };

  if (showVerification) {
    return <VerificationScreen />;
  }

  return (
    <div className="self-stretch my-auto max-md:mt-10 max-md:max-w-full">
      <div className="min-h-[621px] max-md:max-w-full">
        <div className="w-full max-w-[454px] max-md:max-w-full">
          <h2 className="text-3xl font-semibold tracking-tighter leading-tight text-white max-md:max-w-full">
            Create an account
          </h2>
          <div className="flex gap-1 items-center mt-2 w-full text-sm max-md:max-w-full">
            <p className="self-stretch my-auto leading-none text-gray-300">
              Already have an account?
            </p>
            <button className="gap-2 self-stretch my-auto font-medium tracking-normal text-center text-sky-400 rounded-2xl">
              Log in
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-8 w-full text-center max-w-[454px] max-md:max-w-full">
          <Button
            variant="secondary"
            icon={
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23e3d09eaf15391b738f5ec42b09c93df92bae0a?placeholderIfAbsent=true&apiKey=6ab570d2ba5f4a1e8f0614bf834ae119"
                alt="Google icon"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            }
          >
            Continue with Google
          </Button>

          <Divider text="Or" className="mt-6" />
        </div>

        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-[454px] max-md:max-w-full">
          <div className="flex gap-2.5 items-start w-full max-md:max-w-full">
            <InputField
              label="First Name"
              placeholder="Enter your first name"
              className="flex-1 shrink basis-0"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              required
            />
            <InputField
              label="Last Name"
              placeholder="Enter your last name"
              className="flex-1 shrink basis-0"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              required
            />
          </div>

          <InputField
            label="Email Address"
            placeholder="Enter your email address"
            className="mt-4 w-full max-md:max-w-full"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            type="email"
            required
          />

          <InputField
            label="Password"
            placeholder="Create your password"
            type="password"
            className="mt-4 w-full max-md:max-w-full"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            required
          />

          <div className="flex flex-col justify-center mt-8 w-full text-lg font-medium tracking-normal text-center text-white max-w-[454px] max-md:max-w-full">
            <Button type="submit" variant="primary">Create account</Button>
          </div>
        </form>
      </div>

      <p className="mt-4 text-sm text-gray-400 max-md:max-w-full">
        <span className="font-light">
          By creating an account, you are agreeing to our{" "}
        </span>
        <a href="#" className="font-light text-[rgba(53,176,255,1)]">
          Terms Of Service
        </a>
        <span className="font-light"> and </span>
        <a href="#" className="font-light text-[rgba(53,176,255,1)]">
          Privacy Policy
        </a>
        <span className="font-light">.</span>
      </p>
    </div>
  );
};

export default SignupForm;
