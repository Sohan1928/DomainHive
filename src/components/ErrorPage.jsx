import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Page Not Found</p>
      <div className="flex space-x-4">
        <button
          onClick={handleGoBack}
          className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-300"
        >
          Go Back
        </button>
        <button
          onClick={handleGoHome}
          className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-700 transition duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
