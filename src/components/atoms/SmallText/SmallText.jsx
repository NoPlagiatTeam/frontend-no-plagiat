import React from "react";

const SmallText = ({ title, color }) => {
  return <h1 className={`text-sm ${color}`}>{title}</h1>;
};

export default SmallText;
