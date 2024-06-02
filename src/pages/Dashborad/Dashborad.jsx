import React, { useState } from 'react';

import { AddMemberCard, OverviewCard } from '../../components/molecules';
import { Sidebar, ModalDashboard } from '../../components/molecules';
import { overviewMenu } from '../../constants/constants';
import { themeCtx } from '../../context/ThemeContext';
import { LuUserPlus2 } from 'react-icons/lu';
import { BigText } from '../../components/atoms';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const darkCtx = themeCtx();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      className={`h-screen ${darkCtx.isDark ? 'bg-black' : 'bg-white'} flex`}
    >
      <Sidebar setOpen={setIsOpen} open={isOpen} itempage={0} />
      <div
        className={`overflow-scroll overflow-y-scroll flex flex-col items-center w-full py-8`}
      >
        <div className="grid grid-cols-2 gap-4">
          <OverviewCard
            onClick={() => setOpenModal(true)}
            icon={<LuUserPlus2 size={20} />}
            title="Add new team member"
            subtitle="It is possible to add a new member to a team"
          />
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
      {openModal && (
        <ModalDashboard
          card={<AddMemberCard onCancel={() => setOpenModal(false)} />}
        />
      )}
    </div>
  );
};

export default Dashboard;
