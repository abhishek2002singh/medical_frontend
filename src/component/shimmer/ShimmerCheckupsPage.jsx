import React from "react";

const ShimmerCheckupsPage = () => {
  return (
    <div className="py-32">
      <h2 className="text-3xl font-bold text-center mb-6">Medical Checkups</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {Array(12).fill(0).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg text-center animate-pulse"
          >
            <div className="w-32 h-24 bg-gray-300 mx-auto mb-2 rounded"></div>
            <div className="w-24 h-4 bg-gray-300 mx-auto mb-2 rounded"></div>
            <div className="w-20 h-6 bg-green-300 mx-auto rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerCheckupsPage;
