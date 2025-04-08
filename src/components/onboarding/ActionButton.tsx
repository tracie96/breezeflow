import React, { ReactNode } from "react";

interface ActionButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  textClassName?: string;
  icon?: ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  onClick,
  className = "",
  textClassName = "",
  icon,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {icon && <span>{icon}</span>}
      <span className={textClassName || ""}>{text}</span>
    </button>
  );
};

export default ActionButton;