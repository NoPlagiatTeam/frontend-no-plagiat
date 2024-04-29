import React from "react";
import { themeCtx } from "../../../context/ThemeContext";

const Text = ({ children }) => {
  // Theme context
  const darkCtx = themeCtx();

  return (
    <React.Fragment>
      <span className=" text-gray-400">{children}</span>
    </React.Fragment>
  );
};

export default Text;
