import React, { useState } from "react";

import { GoPlus } from "react-icons/go";
import {
  NavBar,
  Modal,
  ModalDashboard,
  AddUserForm,
  AddWordForm,
} from "../../components/molecules";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { HiUsers } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { MdRestore } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { BsGridFill } from "react-icons/bs";
import { Sidebar } from "../../components/molecules";

const Dashboard = () => {
  const Menus = [
    { title: "Dashboard", icon: <BsGridFill size={24} /> },
    { title: "Profil", icon: <FaUser size={24} /> },
    { title: "Facturation", icon: <BsTicketPerforatedFill size={24} /> },
    { title: "Subscribe", icon: <CgFileDocument size={24} /> },
    { title: "Equipe", icon: <HiUsers size={24} /> },
    { title: "Notification", icon: <IoNotifications size={24} /> },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [openMemberModal, setOpenMemberModal] = useState(false);
  const [openWordModal, setOpenWordModal] = useState(false);

  return (
    <div className="bg-white">
      {openMemberModal && (
        <ModalDashboard
          card={
            <AddUserForm closeModalHandler={() => setOpenMemberModal(false)} />
          }
        />
      )}
      {openWordModal && (
        <ModalDashboard
          card={
            <AddWordForm closeModalHandler={() => setOpenWordModal(false)} />
          }
        />
      )}
      <Sidebar setOpen={setIsOpen} open={isOpen} itempage={0} />
      <div
        className={`p-7 bg-white  font-normal flex-1 h-screen text-gray-600 ${
          isOpen ? "md:ml-72" : ""
        } ${!isOpen ? "md:ml-20" : ""}`}
      >
        <p1 className="text-2xl font-bold">Dashboard</p1>

        <div className="flex flex-wrap justify-center  font-nunito">
          <div onClick={() => setOpenMemberModal(true)} className="pr-5 pl-5 ">
            <a
              href="#"
              className="w-full sm:w-auto p-5 hover:bg-blue-100 focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
            >
              <div className="flex flex-col items-center justify-center">
                <button
                  type="button"
                  className="h-10 w-10 text-3xl text-blue-800 bg-blue-100 font-medium rounded-full p-2.5 text-center inline-flex items-center relative mb-3"
                >
                  <GoPlus />
                </button>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="font-normal text-gray-700 dark:text-gray-400">
                    Nouveau membre
                  </h1>
                  <h2 className="text-gray-600  font-bold">
                    Ajouter un membre
                  </h2>
                </div>
              </div>
            </a>
          </div>

          <div onClick={() => setOpenWordModal(true)} className="pr-5 pl-5 ">
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-orange-100  focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  "
            >
              <div className="flex flex-col items-center justify-center">
                <button
                  type="button"
                  className="h-10 w-10 text-3xl text-blue-800 bg-orange-100 font-medium rounded-full p-2.5 text-center inline-flex items-center relative mb-3"
                >
                  <IoExtensionPuzzleOutline color="orange" />
                </button>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="font-normal text-gray-700 dark:text-gray-400">
                    Plus de mots?
                  </h1>
                  <h2 className="text-gray-600 font-bold ">Ajouter</h2>
                </div>
              </div>
            </a>
          </div>

          <div className="pr-5 pl-5 ">
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-gray-100  focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  "
            >
              <div className="flex flex-col items-center justify-center">
                <button
                  type="button"
                  className="h-10 w-10 text-3xl text-blue-800 bg-gray-300 font-medium rounded-full p-2.5 text-center inline-flex items-center relative mb-3"
                >
                  <CgFileDocument color="gray" />
                </button>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="font-normal text-gray-700 dark:text-gray-400">
                    Vérifiez vos rapports
                  </h1>
                  <h2 className="text-gray-600 font-bold">Rapport</h2>
                </div>
              </div>
            </a>
          </div>

          <div className="pr-5 pl-5 ">
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-red-100  focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  "
            >
              <div className="flex flex-col items-center justify-center">
                <button
                  type="button"
                  className="h-10 w-10 text-3xl text-blue-800 bg-red-200 font-medium rounded-full p-2.5 text-center inline-flex items-center relative mb-3"
                >
                  <MdRestore color="red" />
                </button>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="font-normal text-gray-700 dark:text-gray-400">
                    Mots restants:{" "}
                    <span className="font-bold text-gray-600">51.254</span>
                  </h1>

                  <div className="flex justify-between">
                    <h2 className="text-gray-400">
                      Utilisé:{" "}
                      <span className="font-bold text-gray-700">38,746</span>
                    </h2>
                    <h2 className="text-gray-400 pl-5">
                      Total:{" "}
                      <span className="font-bold text-gray-700">90,000</span>
                    </h2>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="pr-5 pl-5 ">
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-teal-100  focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  "
            >
              <div className="flex flex-col items-center justify-center">
                <button
                  type="button"
                  className="h-10 w-10 text-3xl  bg-bleu-ciel-2 font-medium rounded-full p-2.5 text-center inline-flex items-center relative mb-3"
                >
                  <HiUsers color="" />
                </button>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="font-normal text-gray-400">
                    {" "}
                    Sièges Utilisateur:{" "}
                    <span className="font-bold text-gray-600">2</span>
                  </h1>
                  <h1 className="font-normal text-gray-400">
                    Sièges Restants:{" "}
                    <span className="font-bold text-gray-700">2</span>
                  </h1>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Dashboard;
