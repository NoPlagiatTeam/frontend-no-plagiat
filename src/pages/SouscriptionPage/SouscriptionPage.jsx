import React, { useState } from "react";

import { Sidebar } from "../../components/molecules";

const SouscriptionPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white h-screen">
      <Sidebar setOpen={setIsOpen} open={isOpen} itempage={3} />

      <div
        className={`p-7 bg-white  font-normal flex-1 h-screen ${
          isOpen ? "md:ml-72" : ""
        } ${!isOpen ? "md:ml-20" : ""}`}
      >
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-blue-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Adhésion
                </th>
                <th scope="col" class="px-6 py-3">
                  Total
                </th>
                <th scope="col" class="px-6 py-3">
                  Utilisée
                </th>
                <th scope="col" class="px-6 py-3">
                  Date d’achat
                </th>
                <th scope="col" class="px-6 py-3">
                  Date d’expiration
                </th>
                <th scope="col" class="px-6 py-3">
                  Date de renouvellement
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b ">
                <td class="px-6 py-4">Classique</td>
                <td class="px-6 py-4">20000</td>
                <td class="px-6 py-4">15000</td>
                <td class="px-6 py-4">25-02-2024</td>
                <td class="px-6 py-4">25-02-2025</td>
                <td class="px-6 py-4">25-02-2025</td>

                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none "
                  >
                    Renouveller
                  </a>
                </td>
              </tr>
              <tr class="bg-white border-b ">
                <td class="px-6 py-4">Classique</td>
                <td class="px-6 py-4">200000</td>
                <td class="px-6 py-4">15000</td>
                <td class="px-6 py-4">26-02-2024</td>
                <td class="px-6 py-4">26-02-2025</td>
                <td class="px-6 py-4">25-02-2025</td>

                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none "
                  >
                    Renouveller
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

export default SouscriptionPage;
