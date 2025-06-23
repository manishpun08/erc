import React from "react";

const LoadingPdf = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-4 h-screen z-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
      </div>
    </div>
  );
};

export default LoadingPdf;
