import React from "react";

interface TitleInputProps {
  value: string;
  onChange: (value: string) => void;
}

function TitleInput({ value, onChange }: TitleInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-1.5 items-start self-stretch w-full">
      <label
        htmlFor="knowledge-title"
        className="text-sm font-medium leading-5 text-white"
      >
        Title
      </label>
      <div className="flex flex-col gap-4 justify-center items-start self-stretch px-4 py-2.5 w-full rounded-xl border-solid border-[1.5px] border-slate-800">
        <input
          id="knowledge-title"
          type="text"
          placeholder="Add a title"
          value={value}
          onChange={handleChange}
          className="w-full text-base font-light leading-6 border-[none] text-slate-600 bg-transparent outline-none"
        />
      </div>
    </div>
  );
}

export default TitleInput; 