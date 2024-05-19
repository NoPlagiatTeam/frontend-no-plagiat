import React, { useState } from 'react';

import { OverviewCard } from '../../components/molecules';
import { Sidebar } from '../../components/molecules';
import { overviewMenu } from '../../constants/constants';
import { themeCtx } from '../../context/ThemeContext';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const darkCtx = themeCtx();

  return (
    <div
      className={`h-screen ${darkCtx.isDark ? 'bg-black' : 'bg-white'} flex`}
    >
      <Sidebar setOpen={setIsOpen} open={isOpen} itempage={0} />
      <div
        className={`overflow-scroll overflow-y-scroll flex flex-col items-center w-full py-8`}
      >
        <div className="grid grid-cols-2 gap-4">
          {overviewMenu.map((menuItem, index) => (
            <OverviewCard
              key={index}
              icon={menuItem.icon}
              title={menuItem.title}
              subtitle={menuItem.subtitle}
              link={menuItem.link && menuItem.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
