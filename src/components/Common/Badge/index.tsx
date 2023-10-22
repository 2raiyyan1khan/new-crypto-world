import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className: string;
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={` text-sm px-3 w-max rounded flex justify-between items-center gap-1 ${className} `}
    >
      {children}
    </span>
  );
};

export default Badge;
