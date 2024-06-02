import React, { useEffect, useState } from 'react';

import { CardWrapper, Sidebar } from '../../components/molecules';
import URL_SERVER, { routes } from '../../services/routes.js';
import {
  addSouscription,
  getSouscriptionUser,
} from '../../services/service_api.js';
import { Errorbar } from '../../components/atoms/index.js';
import { getUserDataFromStorage } from '../../utils/getUserFromStorage.js';
import { themeCtx } from '../../context/ThemeContext.jsx';
import {useGetStoreData} from "../../hooks/useGetStoreData.js";

const SouscriptionPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [souscriptionData, setSouscriptionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState({ isErreur: false, message: '' });
  const userToken = useGetStoreData('token');
  const userData = getUserDataFromStorage('user');
  const darkCtx = themeCtx();

  useEffect(() => {
    const fetchSouscriptionData = async () => {
      setLoading(true);
      let response = await fetch(URL_SERVER + routes[6].path + userData.id , {
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + userToken,
        },
      });
      response = await response.json()
      if (response.data) {
        setSouscriptionData(response.data);
        setLoading(false);
      }
    };
    fetchSouscriptionData();
  }, []);

  const renewSouscription = async (formule, user) => {
    console.log(formule);
    const body = {
      user: user.id,
      formule: formule.id,
    };
    try {
      const response = await addSouscription(URL_SERVER + routes[7].path, body);
      if (response.message && !response.data) {
        setErreur({ isErreur: true, message: response.message });
      } else if (response.data) {
        console.log('Ajout effectué');
      }
    } catch (e) {
      console.log(e);
      setErreur({
        isErreur: true,
        message: 'Please, check your connection and try again',
      });
    }
  };

  return (
    <div
      className={`h-screen flex ${darkCtx.isDark ? 'bg-black' : 'bg-white'}`}
    >
      <Sidebar setOpen={setIsOpen} open={isOpen} itempage={3} />
      <Errorbar erreur={erreur.isErreur} message={erreur.message} />
        <p>Chargement en cours...</p>
        <div className={`flex justify-center py-8  w-full`}>
          <div className=" shadow-md sm:rounded-lg">
            <table className="text-sm  text-gray-500 dark:text-gray-400">
              <thead
                className={`text-base text-gray-700 uppercase ${
                  darkCtx.isDark ? 'bg-gray-900' : 'bg-white'
                }`}
              >
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Adhésion
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Utilisée
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date d’achat
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date d’expiration
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date de renouvellement
                  </th>
                </tr>
              </thead>
              <tbody>
                {souscriptionData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">{item.formule.prix}</td>
                    <td className="px-6 py-4">{item.formule.nbmot}</td>
                    <td className="px-6 py-4">{item.formule.isAvailable}</td>
                    <td className="px-6 py-4">{item.formule.createdAt}</td>
                    <td className="px-6 py-4">{item.formule.expireAt}</td>
                    <td className="px-6 py-4">{item.formule.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default SouscriptionPage;
