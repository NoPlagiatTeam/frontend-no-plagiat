import React from 'react';
import { themeCtx } from '../../../context/ThemeContext';

import { FaMoon } from 'react-icons/fa6';
import { GoDownload } from 'react-icons/go';
import { MdOutlineWbSunny } from 'react-icons/md';
import { Avatar, ButtonIcon, Icon, Logo, SmallText } from '../../atoms';
import { MainLogo, SecondLogo } from '../../../assets';
import { Link } from 'react-router-dom';
import { useGetStoreData } from '../../../hooks/useGetStoreData';
import { isTokenExpired } from '../../../utils/checkValidToken';

const NavBar = ({ isDownload, onClick, isloading }) => {
  // hook
  const userToken = useGetStoreData('token');
  const userData = useGetStoreData('user');

  //  theme context
  const darkCtx = themeCtx();

  //dark mode handler
  const darkModeHandler = () => {
    darkCtx.setIsDark(!darkCtx.isDark);
    const body = document.querySelector('body');
    if (darkCtx.isDark === true) {
      body.classList.add('bg-white');
      body.classList.remove('bg-black');
    } else {
      body.classList.add('bg-black');
      body.classList.remove('bg-white');
    }
  };

  return (
    <React.Fragment>
      <div
        className={`flex items-center justify-between px-20 py-2 border-b ${
          darkCtx.isDark
            ? 'text-white  border-[#212121]'
            : 'text-gray-600 border-gray-200'
        }`}
      >
        <Logo logo={darkCtx.isDark ? MainLogo : SecondLogo} />
        <div className="flex items-center gap-5">
          {isDownload && (
            <ButtonIcon
              title="Save"
              bg="bg-violet-600"
              icon={<GoDownload size={20} />}
              onClick={onClick}
              isloading={isloading}
            />
          )}
          <div className="flex items-center gap-4">
            {(!userToken || isTokenExpired(userToken)) && (
              <div className="flex items-center gap-5">
                <Link to="/sign-up">
                  {' '}
                  <ButtonIcon title="Sign up" bg="bg-violet-600" />
                </Link>
                <Link to="/login">
                  <SmallText title="Sign In" />
                </Link>
              </div>
            )}
            {userData && (
              <Link to="/dashboard">
                <Avatar userName={userData.nom} />
              </Link>
            )}
            <div className="flex items-center gap-2">
              <Icon
                isDark={darkCtx.isDark}
                onClick={darkModeHandler}
                icon={
                  darkCtx.isDark ? (
                    <FaMoon />
                  ) : (
                    <MdOutlineWbSunny color="white" />
                  )
                }
              />
              <p className="text-[13px]">
                {darkCtx.isDark ? 'Dark mode' : 'Light mode'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
