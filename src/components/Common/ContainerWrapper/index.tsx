import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="container max-w-6xl mx-auto px-5 dark:text-gray-400 text-gray-800">
    {children}
  </div>
);

export default Container;
