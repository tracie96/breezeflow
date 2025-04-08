"use client";
import React from "react";
import InputHeader from "./InputHeader";
import ContentArea from "./ContentArea";
import ActionFooter from "./ActionFooter";

interface InputDesignProps {
  onClose?: () => void;
  onSave?: () => void;
}

function InputDesign({ onClose, onSave }: InputDesignProps) {
  return (
    <section className="flex flex-col px-6 pt-6 pb-14 bg-gray-900 rounded-3xl border border-solid border-[color:var(--Grey-900,#1D2939)] max-w-[827px] max-md:px-5">
      <InputHeader
        title="Title"
        lastUpdated="25/06/2024 09:25:33 am"
      />
      <ContentArea />
      <ActionFooter onSave={onSave} />
    </section>
  );
}

export default InputDesign; 