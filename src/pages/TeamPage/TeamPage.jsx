import { Sidebar } from '../../components/molecules';
import React, { useState, useEffect } from 'react';
import { themeCtx } from '../../context/ThemeContext';
import URL_SERVER from '../../services/routes.js';
import { useGetStoreData } from '../../hooks/useGetStoreData.js';
import { Errorbar } from '../../components/atoms/index.js';
import { getUserDataFromStorage } from '../../utils/getUserFromStorage.js';

const TeamPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState({ isErreur: false, message: '' });
  const userToken = useGetStoreData('token');
  const userData = getUserDataFromStorage('user');
  const darkCtx = themeCtx();

  useEffect(() => {
    const fetchTeamData = async () => {
      setLoading(true);
      let response = await fetch(
        URL_SERVER + '/api/user/getTeamMember/' + userData.id,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + userToken,
          },
        }
      );
      response = await response.json();
      if (response.data) {
        setTeamData(response.data);
        setLoading(false);
      }
    };
    fetchTeamData();
  }, []);

  return (
    <div className={`flex ${darkCtx.isDark ? 'bg-black' : 'bg-white'}`}>
      <Sidebar setOpen={setIsOpen} open={isOpen} itempage={4} />
      <Errorbar erreur={erreur.isErreur} message={erreur.message} />
      {/* <div className="flex flex-col items-center p-2 mt-9">
          <h1 className="font-bold ml-9 text-2xl"> {">"}Souscription </h1>
        </div> */}
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
                  Nom
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre mots
                </th>
                <th scope="col" className="px-6 py-3">
                  Date de création
                </th>
                <th scope="col" className="px-6 py-3">
                  Date de mise à jour
                </th>
              </tr>
            </thead>
            <tbody>
              {teamData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{item.nom}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.credit}</td>
                  <td className="px-6 py-4">{item.createdAt}</td>
                  <td className="px-6 py-4">{item.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TeamPage;
