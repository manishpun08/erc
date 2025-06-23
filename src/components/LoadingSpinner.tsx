import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-4 h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
