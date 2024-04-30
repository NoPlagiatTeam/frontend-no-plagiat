import React from "react";

function Avatar({ userName, image }) {
  return (
    <>
      {!image && userName && (
        <div className="h-8 w-8 text-lg font-bold bg-violet-600 text-white uppercase rounded-full border border-gray-300 flex flex-col items-center justify-center">
          {userName[0]}
        </div>
      )}
      {image && (
        <img
          src={image}
          alt=""
          className="w-8 h-8 rounded-full bg-gray-400 object-cover"
        />
      )}
    </>
  );
}

export default Avatar;
