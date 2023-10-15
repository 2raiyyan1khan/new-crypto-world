import React from "react";
interface SectionTitleProps {
  children: React.ReactNode;
}
function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="md:text-xl text-lg font-medium">{children}</h2>;
}

export default SectionTitle;
