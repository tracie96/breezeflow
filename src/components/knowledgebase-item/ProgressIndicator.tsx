import React from "react";

const ProgressIndicator: React.FC = () => {
  return (
    <nav className="flex gap-4 items-center w-full">
      <div className="flex gap-2 items-center">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="I5069:39088;14:22290;14:22309" layer-name="select-box-circle-fill" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="#12B76A"></path> <path d="M15.1004 7.45318L8.72595 13.82L4.90039 9.99954L6.17528 8.72636L8.72595 11.2736L13.8255 6.17999L15.1004 7.45318Z" fill="white"></path> </svg>',
            }}
          />
        </div>
        <h2 className="text-xl tracking-tight leading-5 text-white">Setup</h2>
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="I5069:39088;14:22291" layer-name="arrow-right-s-line" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <path d="M10.7955 9.99924L7.08301 6.28674L8.14351 5.22624L12.9165 9.99924L8.14351 14.7722L7.08301 13.7117L10.7955 9.99924Z" fill="#98A2B3"></path> </svg>',
          }}
        />
      </div>
      <div className="flex gap-2 items-center">
        <div className="p-0.5 w-4 text-xs font-medium leading-4 text-center text-white bg-blue-600 rounded-[999px]">
          2
        </div>
        <h2 className="text-xl tracking-tight leading-5 text-white">
          Knowledge
        </h2>
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="I5069:39088;14:22293" layer-name="arrow-right-s-line" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]"> <path d="M10.7955 9.99924L7.08301 6.28674L8.14351 5.22624L12.9165 9.99924L8.14351 14.7722L7.08301 13.7117L10.7955 9.99924Z" fill="#98A2B3"></path> </svg>',
          }}
        />
      </div>
      <div className="flex gap-2 items-center">
        <div className="p-0.5 w-4 text-xs font-medium leading-4 text-center text-gray-500 bg-white border border-gray-200 rounded-[999px]">
          3
        </div>
        <h2 className="text-xl tracking-tight leading-5 text-gray-500">
          Customization
        </h2>
      </div>
    </nav>
  );
};

export default ProgressIndicator;
