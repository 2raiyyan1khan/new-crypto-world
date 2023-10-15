import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  console.log("err", error);
  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border border-red-300 px-10 py-5 w-1/3 mx-auto rounded-xl space-y-5 text-red-500 text-center">
          <h1 className="text-xl font-semibold">Oops!</h1>
          <h2 className="font-bold text-6xl">{error.status}</h2>
          <p className="text-lg font-medium">Page {error.statusText}</p>
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="flex justify-start items-start h-screen">
        <div className="bg-red-100 border border-red-300 px-10 py-5 mt-10 w-[90%] mx-auto rounded-xl space-y-5 text-red-600 text-center">
          <h2 className="font-bold text-4xl mb-5">
            {error.message || "Something went wrong!"}
          </h2>
          {error.stack}
        </div>
      </div>
    );
  } else {
    <div>
      <h2>Something went wrong!</h2>
    </div>;
  }
}

export default ErrorBoundary;
