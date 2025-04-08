"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";

const VerificationScreen: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Verify Your Email</h2>
          <p className="text-gray-400">
            We've sent a verification code to your email address.
            Please enter the code below.
          </p>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              className="w-12 h-12 text-center text-xl font-bold bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
              maxLength={1}
              inputMode="numeric"
              pattern="[0-9]*"
            />
          ))}
        </div>

        <div className="mt-8">
          <Button className="w-full" onClick={() => router.push("/onboarding")}>
            Verify Code
          </Button>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-400">
            Didn't receive the code?{" "}
            <button className="text-blue-500 hover:text-blue-400">
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationScreen; 