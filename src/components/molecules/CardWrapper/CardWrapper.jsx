import React from 'react';
import { themeCtx } from '../../../context/ThemeContext';

const CardWrapper = ({ children }) => {
  const darkCtx = themeCtx();
  return (
    <div
      className={`px-20 py-10 shadow-lg m-6 h-full ${
        darkCtx.isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
