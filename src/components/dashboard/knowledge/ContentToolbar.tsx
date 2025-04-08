import React from "react";

function ContentToolbar() {
  return (
    <div className="mt-10 w-full max-md:max-w-full">
      <div className="flex items-center p-4 w-full border-t border-solid border-t-[color:var(--Grey-900,#1D2939)] max-md:max-w-full">
        <div className="flex gap-4 items-center self-stretch my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6ab570d2ba5f4a1e8f0614bf834ae119/43b84d05d61e4cd29bd402d865e76941d0463e45?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt="Toolbar icon"
          />
          <div className="flex shrink-0 self-stretch my-auto w-5 h-5" />
          <div className="flex shrink-0 self-stretch my-auto w-5 h-5" />
          <div className="flex shrink-0 self-stretch my-auto w-5 h-5" />
          <div className="flex shrink-0 self-stretch my-auto w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default ContentToolbar; 