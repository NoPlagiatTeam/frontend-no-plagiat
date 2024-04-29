import React from "react";
import { themeCtx } from "../../../context/ThemeContext";

const InputCheck = ({ icon, placeholder, onChange, ref, name, value }) => {
  //Theme context
  const darkCtx = themeCtx();

  return (
    <div className={`h-9 w-2/6 relative border`}>
      <span className="absolute top-2 left-2 text-gray-400">
        {" "}
        {icon && icon}
      </span>
      <input
        value={value}
        onChange={onChange}
        name={name}
        ref={ref}
        type="text"
        className={`pl-8 h-full w-full text-gray-500 text-[12px] outline-none ${
          darkCtx.isDark
            ? "bg-[#212121] border-gray-700"
            : "bg-gray-200 border-gray-300"
        }`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputCheck;
