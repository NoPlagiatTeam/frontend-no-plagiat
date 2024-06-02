import React, {useEffect, useState} from 'react';

import { MdDownload } from 'react-icons/md';
import { Sidebar } from '../../components/molecules';
import { themeCtx } from '../../context/ThemeContext';
import URL_SERVER from "../../services/routes.js";
import {useGetStoreData} from "../../hooks/useGetStoreData.js";
import {getUserDataFromStorage} from "../../utils/getUserFromStorage.js";
import {Errorbar} from "../../components/atoms/index.js";
const ReportsPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState({ isErreur: false, message: '' });
  const userToken = useGetStoreData('token');
  const userData = getUserDataFromStorage('user');
  const darkCtx = themeCtx();

  useEffect(() => {
    const fetchReport = async () => {
      setLoading(true);
      let response = await fetch(URL_SERVER + '/api/rapport/byUser/'+ userData.id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + userToken,
        },
      });
      response = await response.json()
      if (response.data) {
        setReportData(response.data);
        setLoading(false);
      }
    };
    fetchReport();
  }, []);

  useEffect(() => {
    const fetchTeamData = async () => {
      setLoading(true);
      let response = await fetch(URL_SERVER + '/api/rapport/byUser/'+ userData.id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + userToken,
        },
      });
      response = await response.json()
      if (response.data) {
        setReportData(response.data);
        setLoading(false);
      }
    };
    fetchTeamData();
  }, []);

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={`flex ${darkCtx.isDark ? 'bg-black' : 'bg-white'}`}>
      <Sidebar setOpen={setIsOpen} open={isOpen} itempage={2} />
      <Errorbar erreur={erreur.isErreur} message={erreur.message} />
      <div
        className={`overflow-scroll overflow-y-scroll flex flex-col items-center w-full py-8`}
      >
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead
                className={`text-base text-gray-700 uppercase ${
                    darkCtx.isDark ? 'bg-gray-900' : 'bg-white'
                }`}
            >
            <tr>
              <th scope="col" className="px-6 py-3">
                Identifiant
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date de création
              </th>
              <th scope="col" className="px-6 py-3">
                Télécharger
              </th>
            </tr>
            </thead>
            <tbody>
            {reportData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.user.nom}</td>
                  <td className="px-6 py-4">{item.createdAt}</td>
                  <td className="px-6 py-4">
                    <button onClick={()=>handleClick(URL_SERVER+ "/" +item.rapport)} className="font-medium text-orange-500 hover:underline">
                      <MdDownload size={25}/>
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
