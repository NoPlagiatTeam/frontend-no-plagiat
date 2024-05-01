import { Sidebar } from "../../components/molecules";
import React, { useState, useEffect } from "react";
import { MdDownload } from "react-icons/md";
import { CiTrash } from "react-icons/ci";

const TeamPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white h-screen flex">
      <Sidebar setOpen={setIsOpen} open={isOpen} itempage={4} />

      <div
        className={`overflow-scroll overflow-y-scroll flex flex-col items-center w-full py-8`}
      >
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-blue-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Nom
                </th>
                <th scope="col" class="px-6 py-3">
                  Adhésion
                </th>
                <th scope="col" class="px-6 py-3">
                  Mots octroyé
                </th>
                <th scope="col" class="px-6 py-3">
                  Utilisé
                </th>
                <th scope="col" class="px-6 py-3">
                  Date d’achat
                </th>
                <th scope="col" class="px-6 py-3">
                  Date d’expiration
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b ">
                <td class="px-6 py-4">Membre 1</td>
                <td class="px-6 py-4">classique</td>
                <td class="px-6 py-4">200000</td>
                <td class="px-6 py-4">15000</td>
                <td class="px-6 py-4">25-02-2024</td>
                <td class="px-6 py-4">25-02-2025</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-orange-500 hover:underline"
                  >
                    <CiTrash size={25} />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TeamPage;
