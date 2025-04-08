import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  icon,
  onClick,
  className = "",
}) => {
  const baseClasses =
    "gap-2.5 px-6 py-4 w-full text-lg font-medium tracking-normal text-center rounded-2xl border border-solid";

  const variantClasses = {
    primary: "bg-blue-700 text-white border-white",
    secondary: "bg-gray-900 text-white border-[color:var(--Grey-900,#1D2939)]",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className} flex justify-center items-center max-md:px-5 max-md:max-w-full`}
      onClick={onClick}
    >
      {icon && icon}
      <span className="self-stretch my-auto">{children}</span>
    </button>
  );
};

export default Button;
