import React from "react";

interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-red-500">
        An error occurred during fetching {errorMessage}
      </p>
    </div>
  );
};

export default ErrorMessage;
