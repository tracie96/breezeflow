import React from "react";

export const CheckCircleIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-[20px] h-[20px] fill-[#12B76A] ${className}`}
  >
    <path
      d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
      fill="#12B76A"
    />
    <path
      d="M15.0999 7.45318L8.72547 13.82L4.8999 9.99954L6.17479 8.72636L8.72547 11.2736L13.825 6.17999L15.0999 7.45318Z"
      fill="white"
    />
  </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-[20px] h-[20px] ${className}`}
  >
    <path
      d="M10.796 9.99924L7.0835 6.28674L8.144 5.22624L12.917 9.99924L8.144 14.7722L7.0835 13.7117L10.796 9.99924Z"
      fill="#98A2B3"
    />
  </svg>
);

export const AddIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-[20px] h-[20px] ${className}`}
  >
    <path
      d="M15 10.625H5C4.65833 10.625 4.375 10.3417 4.375 10C4.375 9.65833 4.65833 9.375 5 9.375H15C15.3417 9.375 15.625 9.65833 15.625 10C15.625 10.3417 15.3417 10.625 15 10.625Z"
      fill="white"
    />
    <path
      d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"
      fill="white"
    />
  </svg>
);

export const RadioCircleIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    width="15"
    height="18"
    viewBox="0 0 15 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-[18px] ${className}`}
  >
    <circle cx="7.5" cy="9" r="7.03125" stroke="#525866" strokeWidth="0.9375" />
  </svg>
);
