import React, { useState } from "react";

interface FormFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

function FormField({ label, placeholder, value: initialValue = "", onChange }: FormFieldProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col gap-1.5 items-start self-stretch w-full">
      <label className="text-sm font-medium leading-5 text-white">
        {label}
      </label>
      <div className="flex flex-col justify-center px-5 py-2.5 mt-1.5 w-full rounded-xl border-solid border-[1.5px] border-slate-800">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full text-base font-light text-gray-500 bg-transparent border-none outline-none"
        />
      </div>
    </div>
  );
}

export default FormField; 