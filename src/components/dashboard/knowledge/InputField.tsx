import React from "react";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  description?: string;
}

const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  description 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="w-full max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="text-sm font-medium leading-none text-white">
          {label}
        </div>
        <div className="flex flex-col justify-center px-5 py-2.5 mt-1.5 w-full rounded-xl border-solid border-[1.5px] border-[color:var(--Grey-900,#1D2939)] max-md:max-w-full">
          <div className="flex justify-between items-center w-full max-md:max-w-full">
            <input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              className="flex-1 shrink basis-0 min-w-60 w-full text-base font-light text-gray-500 bg-transparent border-none outline-none"
            />
          </div>
          {description && (
            <div className="text-xs text-gray-400 mt-1">{description}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputField; 