import React from "react";

const LoadingScreen = ({ text = "" }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
        {text && <p className="mt-4 text-lg font-medium text-yellow-300">{text}</p>}
      </div>
    </div>
  );
};

export default LoadingScreen;
