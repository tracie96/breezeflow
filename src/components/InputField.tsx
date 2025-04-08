"use client";
import React, { useState } from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  className = "",
}) => {
  const [value, setValue] = useState("");

  return (
    <div className={className}>
      <div className="w-full">
        <label className="text-sm font-medium leading-none text-white">
          {label}
        </label>
        <div className="flex flex-col justify-center px-5 py-5 mt-1.5 w-full text-base font-light rounded-2xl border-solid border-[1.5px] border-[color:var(--Grey-900,#1D2939)] min-h-[60px] text-slate-600">
          <div className="flex justify-between items-center w-full">
            <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
            />
            {type === "password" && (
              <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;
