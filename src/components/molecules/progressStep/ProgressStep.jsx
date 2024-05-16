import React from "react";

const ProgressStep = ({ step }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div
        className={`w-12 h-12 rounded-full flex flex-col items-center justify-center ${
          (step === 1 || step === 2) && "bg-orange-500 text-white"
        } border border-gray-300 text-gray-600`}
      >
        1
      </div>
      <div
        className={`w-4/5 border ${
          step === 2 ? "border-orange-500" : "border-gray-300"
        }`}
      ></div>
      <div
        className={`w-12 h-12 rounded-full flex flex-col items-center justify-center ${
          step === 2 && "bg-orange-500 text-white"
        } border border-gray-300 text-gray-600`}
      >
        2
      </div>
    </div>
  );
};

export default ProgressStep;
