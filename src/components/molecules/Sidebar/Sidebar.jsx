import React, { useState } from "react";

import { CgFileDocument } from "react-icons/cg";
import { HiUsers } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { IoNotifications , IoLogOut } from "react-icons/io5";
import { BsGridFill } from "react-icons/bs";

import { SecondLogo } from "../../../assets";
import { FaAngleLeft } from "react-icons/fa6";

const Sidebar = ({ setOpen, open, itempage }) => {
  const Menus = [
    { title: "Dashboard", icon: <BsGridFill size={24} />, link: "/dashboard" },
    { title: "Profil", icon: <FaUser size={24} />, link: "/profile" },
    {
      title: "Facturation",
      icon: <BsTicketPerforatedFill size={24} />,
      link: "/facture",
    },
    {
      title: "Subscribe",
      icon: <CgFileDocument size={24} />,
      link: "/souscription",
    },
    { title: "Equipe", icon: <HiUsers size={24} />, link: "/team" },

  ];

  const handleMenuClick = (link) => {
    window.location.href = link; // Redirection vers la page liée
  };
  return (
    <div className="group fixed left-0 top-0 z-10">
      <div
        className={`${open ? "w-60" : "w-20"
          } h-screen duration-300  bg-white dark:bg-dark-white dark:text-gray-800 relative   shadow-xl`}
      >
        <FaAngleLeft size={30} className={`absolute cursor-pointer p-2 bg-slate-100 rounded-full -right-3 top-9 w-7 ${!open && "rotate-180"
          }`}

          onClick={() => setOpen(!open)}

          alt="Toggle Menu" />,
        {/* <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 dark:border-dark-purple ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
          alt="Toggle Menu"
        /> */}
        <div className="flex gap-x-4 pt-8">
          {open && (
            <img className="w-80 pl-1" src={SecondLogo} alt="logo inspector" />
          )}
        </div>
        <ul className="pt-6 relative m-0">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`h-14 w-30 text-gray-800 text-sm flex items-center p-5 gap-x-4 cursor-pointer hover:text-orange-500 hover:bg-gradient-to-r from-orange-200 via-white to-white rounded-md ${menu.gap ? "mt-9" : "mt-2"
                } ${index === itempage &&
                "text-orange-500 bg-gradient-to-r from-orange-200 via-white to-white rounded-md"
                } ${!open && "p-3"}`}
              onClick={() => handleMenuClick(menu.link)} // Redirection vers l'URL spécifiée dans le menu
            >
              <div className="pl-4 pt-2 ">{menu.icon}</div>
              <span
                className={`${!open && "hidden"
                  } origin-left duration-200 text-base`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>

        <div>
          <div className="absolute bottom-0 flex flex-row pl-6 pb-4  cursor-pointer ">
            <img
              className="w-10 h-10 rounded-full bg-purple-400 "
              src="/src/assets/images/profil.png"
              alt="Rounded avatar"
            />
            <div className={`${!open && "hidden"} origin-left duration-200 text-base flex flex-col pl-2`}>
              <div>Easin Arafat</div>
              <div className="text-gray-400">Free Account</div>

            </div>
            <div>

              {open && <div className="pl-5 pt-2"><IoLogOut  size={30} color="gray"/></div>}
            </div>
          </div>
        </div>


      {!open && <div className="absolute bottom-0 flex flex-row pl-6  p-5"></div>}
        <div>
          
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
