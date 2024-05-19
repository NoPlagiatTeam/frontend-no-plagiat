import React from 'react';
import { Link } from 'react-router-dom';
import { themeCtx } from '../../../context/ThemeContext';

const OverviewCard = ({ icon, title, subtitle, link }) => {
  const darkCtx = themeCtx();

  return (
    <Link
      to={link}
      className={`cursor-pointer flex items-start gap-3 w-full rounded-lg ${
        darkCtx.isDark
          ? 'bg-gray-900 border-[#212121] border '
          : 'bg-gray-50 border border-gray-400'
      } p-3`}
    >
      <div className=" w-12 h-12 rounded-full bg-gray-100 flex flex-col items-center justify-center">
        {icon}
      </div>
      <div>
        <h1
          className={`text-md ${
            darkCtx.isDark ? 'text-gray-400' : 'text-gray-800'
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-md ${
            darkCtx.isDark ? 'text-gray-800' : 'text-gray-400'
          }`}
        >
          {subtitle}
        </p>
      </div>
    </Link>
  );
};

export default OverviewCard;
