import React from "react";

const LinearProgress = ({ pourcent }) => {
  return (
    <div className="w-2/3 bg-gray-400 rounded-full ">
      <div
        style={{ width: pourcent + "%" }}
        className={`bg-violet-600 p-0.5 text-center text-xs font-medium leading-none text-white rounded-full`}
      >
        {pourcent}%
      </div>
    </div>
  );
};

export default LinearProgress;
