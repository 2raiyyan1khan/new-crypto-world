import React from "react";

const GlobalLoader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-80 bg-neutral-950 z-50">
      <div className="space-y-5">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-violet-800"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default GlobalLoader;
