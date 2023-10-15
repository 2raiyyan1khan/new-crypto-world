import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={`my-12 pt-14 dark:text-gray-300 text-gray-900 ${className}`}>
    {children}
  </div>
);

export default SectionWrapper;
