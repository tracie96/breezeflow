"use client";
import React from "react";

function AgentAvatar() {
  return (
    <div className="flex flex-col justify-center p-5 mt-6 max-w-full rounded-none w-[248px]">
      <div className="flex overflow-hidden flex-col justify-center items-center px-px aspect-square rounded-[5256px]"
        style={{
          background: "radial-gradient(circle at center, #85E9FF 0%, #0788FF 50%, #335CFF 100%)"
        }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6ab570d2ba5f4a1e8f0614bf834ae119/967f47b89b4b855a6a92820c049a67658113e0cb?placeholderIfAbsent=true"
          alt="Agent avatar"
          className="object-contain w-full aspect-[1.01]"
        />
      </div>
    </div>
  );
}

export function AgentContent() {
  return (
    <section className="flex flex-col items-center mt-16 max-w-full w-[606px] max-md:mt-10">
      <div className="flex flex-col items-center self-stretch w-full text-center max-md:max-w-full">
        <p className="text-2xl font-light leading-none text-gray-600 max-md:max-w-full">
          Hi there 👋🏼
        </p>
        <h2 className="mt-1.5 text-4xl font-medium leading-[50px] max-md:max-w-full">
          Experience This Website In A New Dimension
        </h2>
      </div>

      <AgentAvatar />

      <div className="flex flex-col items-center mt-6 w-full text-gray-600">
        <h3 className="text-3xl font-medium leading-9 text-center max-md:max-w-full">
          A Voice Powered Experience Tailored To Your Every Question
        </h3>
        <p className="mt-5 text-xl font-light leading-none">
          Click on the icon to get started
        </p>
      </div>
    </section>
  );
} 