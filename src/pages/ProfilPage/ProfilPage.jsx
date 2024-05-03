import React, { useState } from "react";
import { Sidebar } from "../../components/molecules";
import {ProfileInfo} from "../../components/molecules/index.js";
import UpdatePassword from "../../components/molecules/profile/UpdatePassword.jsx";

const ProfilPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-white h-screen flex">
      <Sidebar setOpen={setIsOpen} open={isOpen} itempage={1} />
      <div
        className={`overflow-scroll overflow-y-scroll flex flex-col items-center w-full py-8`}
      >
        <div className={`text-gray-600 body-font bg-white`}>
          <div className={`container flex flex-wrap px-5 py-24 mx-auto items-center`}>
            <ProfileInfo />
            <UpdatePassword />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
