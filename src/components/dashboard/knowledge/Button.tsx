import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="gap-2.5 self-stretch px-6 py-4 my-auto bg-blue-700 rounded-2xl border border-white border-solid max-md:px-5 text-lg font-medium tracking-normal text-center text-white"
    >
      {children}
    </button>
  );
};

export default Button; 