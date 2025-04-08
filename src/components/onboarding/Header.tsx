import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 w-full border bg-slate-950 border-slate-800">
      <div className="logo">
        <svg
          width="195"
          height="30"
          viewBox="0 0 195 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[195px] h-[30px]"
        >
          {/* Logo SVG content */}
        </svg>
      </div>
      <div className="flex justify-center items-center w-12 h-12 bg-violet-300 rounded-[999px]">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[48px] h-[48px]"
        >
          {/* Avatar SVG content */}
        </svg>
      </div>
    </header>
  );
};

export default Header;