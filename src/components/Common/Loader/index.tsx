import React from "react";
import { Puff } from "react-loader-spinner";

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
export const Loader = () => {
  return (
    <div className=" flex items-center justify-center w-full h-full">
      <div className="space-y-2 flex flex-col justify-center items-center">
        <Puff
          height="50"
          width="50"
          radius={1}
          color="#6d28d9"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass="m-0"
          visible={true}
        />
        <p>Loading...</p>
      </div>
    </div>
  );
};
export default GlobalLoader;
