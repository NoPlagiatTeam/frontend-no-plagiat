import React from "react";

function Avatar({ userName }) {
  return (
    <div className="h-8 w-8 text-lg font-bold bg-violet-600 text-white uppercase rounded-full border border-gray-300 flex flex-col items-center justify-center">
      {userName[0]}
    </div>
  );
}

export default Avatar;
