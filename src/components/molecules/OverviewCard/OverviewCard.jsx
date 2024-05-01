import React from "react";
import { Link } from "react-router-dom";

const OverviewCard = ({ icon, title, subtitle, link }) => {
  return (
    <Link
      to={link}
      className="cursor-pointer flex items-start gap-3 w-full rounded-lg bg-gray-50 border border-gray-400 p-3"
    >
      <div className=" w-12 h-12 rounded-full bg-gray-100 flex flex-col items-center justify-center">
        {icon}
      </div>
      <div>
        <h1 className="text-md text-gray-800">{title}</h1>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </Link>
  );
};

export default OverviewCard;
