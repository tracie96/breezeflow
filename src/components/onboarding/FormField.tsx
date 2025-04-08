import React, { ChangeEvent } from "react";

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1.5 items-start w-full">
      <label className="text-sm font-medium leading-5 text-white">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="gap-4 p-5 w-full text-base font-light leading-6 text-gray-200 bg-transparent rounded-2xl border border-gray-50 h-[60px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FormField;
