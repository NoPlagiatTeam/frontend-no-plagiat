import React, { useState } from 'react';

import { MdDownload } from 'react-icons/md';
import { Sidebar } from '../../components/molecules';
import { themeCtx } from '../../context/ThemeContext';
const ReportsPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const darkCtx = themeCtx();

  return (
    <div className={`flex ${darkCtx.isDark ? 'bg-black' : 'bg-white'}`}>
      <Sidebar setOpen={setIsOpen} open={isOpen} itempage={2} />

      <div
        className={`overflow-scroll overflow-y-scroll flex flex-col items-center w-full py-8`}
      >
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead
              class={`text-base text-gray-700 uppercase ${
                darkCtx.isDark ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <tr>
                <th scope="col" class="px-6 py-3">
                  Identifiant
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Planifier
                </th>
                <th scope="col" class="px-6 py-3">
                  Date d’achat
                </th>
                <th scope="col" class="px-6 py-3">
                  Date d’expiration
                </th>
                <th scope="col" class="px-6 py-3">
                  Telecharger
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class={`${darkCtx.isDark ? 'bg-gray-900' : 'bg-white'}`}>
                <td class="px-6 py-4">Identifiant_1</td>
                <td class="px-6 py-4">email_1@example.com</td>
                <td class="px-6 py-4">Plan_1</td>
                <td class="px-6 py-4">25-02-2024</td>
                <td class="px-6 py-4">25-02-2025</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-orange-500 hover:underline"
                  >
                    <MdDownload size={25} />
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

export default ReportsPage;
