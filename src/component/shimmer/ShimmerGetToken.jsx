import React from "react";

const ShimmerGetToken = () => {
  return (
    <div className="max-w-3xl mx-auto mt-32 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center text-gray-300 mb-4 animate-pulse">
        Loading Checkup Tokens...
      </h2>
      
      <div className="space-y-4">
        {Array(5).fill(0).map((_, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-gray-100 animate-pulse"
          >
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerGetToken;