import React from 'react';

import { TfiCreditCard } from 'react-icons/tfi';
import { LuUser2 } from 'react-icons/lu';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FiLogOut } from 'react-icons/fi';
import { TbReportSearch } from 'react-icons/tb';

import SecondLogo from '../../../assets/logos/logo-black.png';
import Logo from '../../../assets/logos/logo-white.png';
import { Avatar } from '../../atoms';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { useGetStoreData } from '../../../hooks/useGetStoreData';
import { themeCtx } from '../../../context/ThemeContext';

const Sidebar = ({ setOpen, open, itempage }) => {
  // states
  const userData = useGetStoreData('user');

  const darkCtx = themeCtx();

  // hooks
  const navigate = useNavigate();

  const Menus = [
    {
      title: 'Overview',
      icon: <LuLayoutDashboard size={24} />,
      link: '/dashboard',
    },
    { title: 'Profile', icon: <LuUser2 size={24} />, link: '/profile' },
    {
      title: 'Reports',
      icon: <TbReportSearch size={24} />,
      link: '/reports',
    },
    {
      title: 'Subscription',
      icon: <MdOutlineSubscriptions size={24} />,
      link: '/souscription',
    },
    { title: 'Team', icon: <AiOutlineTeam size={24} />, link: '/team' },
  ];

  const handleMenuClick = (link) => {
    window.location.href = link; // Redirection vers la page liée
  };

  const signOutHandler = () => {
    localStorage.clear('user');
    navigate('/');
  };

  return (
    <div>
      <div
        className={`md:w-60 w-80 h-screen ${
          darkCtx.isDark
            ? 'bg-[#212121] border-r border-gray-600'
            : 'bg-white border-r border-gray-200'
        } flex flex-col justify-between  pb-12`}
      >
        <ul className="px-4 py-8">
          <Link to="/" className="pb-8">
            <img
              className="px-2"
              src={darkCtx.isDark ? Logo : SecondLogo}
              alt="logo inspector"
            />
          </Link>
          {Menus.map((menu, index) => (
            <div className="flex  items-center gap-1">
              {index === itempage && (
                <div className="h-6 w-2 bg-orange-400 rounded-full"></div>
              )}
              <div
                key={index}
                className={` md:p-2 px-3 py-2 w-full text-sm flex items-center p-5 gap-x-4 cursor-pointer  ${
                  darkCtx.isDark ? 'hover:bg-gray-900' : 'hover:bg-gray-100'
                } rounded-lg ${menu.gap ? 'mt-9' : 'mt-2'} ${
                  index === itempage &&
                  `${
                    darkCtx.isDark
                      ? 'bg-gray-900 tex-white'
                      : 'bg-gray-100 text-gray-600'
                  } rounded-lg`
                } ${!open && 'p-3'}`}
                onClick={() => handleMenuClick(menu.link)} // Redirection vers l'URL spécifiée dans le menu
              >
                <span className="text-gray-600">{menu.icon}</span>
                <span
                  className={`${
                    !open && 'hidden'
                  } origin-left duration-200 text-gray-500`}
                >
                  {menu.title}
                </span>
              </div>
            </div>
          ))}
        </ul>
        <div className="flex flex-col items-center mx-6 gap-3">
          <div
            className={`flex items-center w-full gap-4 border-b ${
              darkCtx.isDark ? 'border-gray-700' : 'border-gray-100'
            } py-3`}
          >
            <Avatar image={userData.image} userName={userData.nom} />
            <h1 className="text-sm text-gray-500">@{userData.nom}</h1>
          </div>
          <div
            onClick={signOutHandler}
            className={`flex items-center cursor-pointer w-full  gap-3  px-3 ${
              darkCtx.isDark
                ? 'hover:bg-gray-800 text-gray-600'
                : 'hover:bg-gray-100'
            } rounded-lg  py-2`}
          >
            <FiLogOut size={24} />
            <h1>Sign out</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
