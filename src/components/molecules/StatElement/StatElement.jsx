import React from "react";
import { themeCtx } from "../../../context/ThemeContext";

const StatElement = ({ title, singleWord, number, color }) => {
  //  Theme context
  const darkCtx = themeCtx();

  return (
    <React.Fragment>
      <div
        className={`w-60 border ${
          darkCtx.isDark ? "border-[#212121]" : "border-gray-200"
        } rounded-lg p-8`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex flex-col items-center justify-center h-12 w-12 rounded-md ${
              color ? color : "bg-violet-950"
            } text-white`}
          >
            <h1 className="font-bold">{singleWord}</h1>
          </div>
          <h1>{title}</h1>
        </div>
        <h1 className="text-center text-xl font-bold">{number}</h1>
      </div>
    </React.Fragment>
  );
};

export default StatElement;
