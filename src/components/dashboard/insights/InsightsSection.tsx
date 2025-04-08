import React from "react";

export const InsightsSection: React.FC = () => {
  return (
    <div
      className="w-full max-w-[1120px] mt-8 max-md:max-w-full"
      style={{ gap: "24px" }}
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[67%] max-md:w-full max-md:ml-0">
          <div className="border border-[color:var(--Grey-900,#1D2939)] bg-[#101828] min-h-[418px] w-full text-xl text-white font-normal tracking-[-0.2px] mx-auto pt-6 pb-[47px] px-4 rounded-2xl border-solid max-md:max-w-full max-md:mt-6">
            <div className="flex w-full items-center justify-between max-md:max-w-full">
              <h2 className="self-stretch min-w-60 w-full gap-2 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                Conversation insights
              </h2>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6ab570d2ba5f4a1e8f0614bf834ae119/4304870544ba7f5d00a7b8c7ea0e79fb4afa2ade?placeholderIfAbsent=true"
              alt="Conversation insights chart"
              className="aspect-[2.43] object-contain w-full mt-8 max-md:max-w-full"
            />
          </div>
        </div>
        <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="border border-[color:var(--Grey-900,#1D2939)] bg-[#101828] min-h-[418px] w-full text-white tracking-[-0.2px] mx-auto p-4 rounded-xl border-solid max-md:mt-6">
            <h3 className="self-stretch flex-1 shrink basis-[0%] w-full text-base font-normal">
              Response usage
            </h3>
            <div className="flex w-full flex-col items-stretch mt-[101px] max-md:mt-10">
              <div className="text-5xl font-medium text-center max-md:text-[40px]">
                0<span className="text-[rgba(102,112,133,1)]">/50</span>
              </div>
              <div className="self-center bg-[rgba(10,15,25,1)] gap-2.5 text-xl font-light whitespace-nowrap mt-8 px-4 py-2 rounded-lg">
                Free
              </div>
            </div>
            <div className="flex w-full gap-4 text-sm font-normal text-center justify-center mt-[101px] max-md:mt-10">
              <button className="self-stretch border bg-[#1D2939] gap-2 whitespace-nowrap flex-1 shrink basis-[0%] px-4 py-3 rounded-[10px] border-solid border-[#344054]">
                Upgrade
              </button>
              <button className="self-stretch border bg-[#1D2939] gap-2 flex-1 shrink basis-[0%] px-4 py-3 rounded-[10px] border-solid border-[#344054]">
                Set limit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 