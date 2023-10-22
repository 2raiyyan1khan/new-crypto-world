import React from "react";
import { Loader } from "../Loader";

interface RenderContentProps {
  isLoading: boolean;
  isError: string | unknown;
  children: React.ReactNode;
}

function RenderContent({ isLoading, children, isError }: RenderContentProps) {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center">
        <h2>{`${isError}`}</h2>
      </div>
    );
  }
  return <>{children}</>;
}

export default RenderContent;
