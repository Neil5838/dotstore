import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="min-h-screen flex items-center justify-center sm:p-0 p-6">
        <div className="flex justify-center flex-col text-center">
          <h2 className="text-4xl">OOP!</h2>
          <p className="my-2">Page not found!</p>
          <p className="text-gray-400 text-sm">Status - {error.status}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <h2>Something went wrong</h2>
    </div>
  );
};
export default Error;
