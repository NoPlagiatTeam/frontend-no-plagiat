import React, { useState } from 'react';
import { Sidebar } from '../../components/molecules';
import { CardWrapper, ProfileInfo } from '../../components/molecules/index.js';
import UpdatePassword from '../../components/molecules/profile/UpdatePassword.jsx';
import { themeCtx } from '../../context/ThemeContext.jsx';

const ProfilPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const darkCtx = themeCtx();
  return (
    <div
      className={`h-screen flex ${darkCtx.isDark ? 'bg-black' : 'bg-white'}`}
    >
      <Sidebar setOpen={setIsOpen} open={isOpen} itempage={1} />
      {/* <div className="flex flex-col items-center p-2 mt-9">
        <h1 className="font-bold ml-9 text-2xl"> {'>'}Profil </h1>
      </div> */}
      <div className={`flex flex-col items-center w-full py-8 h-screen`}>
        <CardWrapper>
          <div className={`text-gray-600 body-font`}>
            <div className={`container flex flex-wrap  mx-auto items-center`}>
              <ProfileInfo />
              <UpdatePassword />
            </div>
          </div>
        </CardWrapper>
      </div>
    </div>
  );
};

export default ProfilPage;
