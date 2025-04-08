import React from "react";

const PreviewSection: React.FC = () => {
  return (
    <div className="bg-[#101828] grow overflow-hidden text-base text-[rgba(202,207,216,1)] font-light w-full pt-10 pb-[117px] px-10 border-[rgba(29,41,57,1)] border-l max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <h2 className="text-white text-2xl font-medium max-md:max-w-full">
        Preview
      </h2>
      <div className="max-w-full w-[520px] mt-10">
        <div>Widget Preview</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6ab570d2ba5f4a1e8f0614bf834ae119/1b72fbb90546d0710732d08ee2133970bd24b549?placeholderIfAbsent=true"
          className="aspect-[9.62] object-contain w-full mt-6 max-md:max-w-full"
          alt="Widget Preview"
        />
      </div>
      <div className="w-full mt-10 max-md:max-w-full">
        <div>Active Preview</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6ab570d2ba5f4a1e8f0614bf834ae119/ff9821a60ac9dc81b69a04a44da89d2e873c11ef?placeholderIfAbsent=true"
          className="aspect-[0.99] object-contain w-full mt-6 max-md:max-w-full"
          alt="Active Preview"
        />
      </div>
    </div>
  );
};

export default PreviewSection; 