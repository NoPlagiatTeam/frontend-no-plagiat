import { getUserDataFromStorage } from '../../../utils/getUserFromStorage.js';
import { AvatarName } from '../../atoms/index.js';
import React from 'react';

function ProfileInfo() {
  const userData = getUserDataFromStorage('user');

  return (
    <div className="w-full md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className={'flex'}>
          <AvatarName email={userData.email} />
          <div className="flex flex-col items-center md:items-start md:flex-row p-2 mx-2 mt-1">
            <div className="font-bold">{userData.nom}</div>
            {/*<div className="text-gray-400 md:ml-4">Free Account</div>*/}
          </div>
        </div>
      </div>
      <div className="py-6">Informations</div>
      <div className="flex flex-wrap py-1">
        <div className="pr-6 pb-2  text-gray-400">Nom Utilisateur:</div>
        <div>{userData.nom}</div>
      </div>
      <div className="flex flex-wrap py-1">
        <div className="pr-6 md:pr-24 pb-2  text-gray-400">Email :</div>
        <div>{userData.email}</div>
      </div>
      <div className="flex flex-wrap py-1">
        <div className="pr-6 md:pr-10 pb-2  text-gray-400">Mots totaux :</div>
        <div>{userData.credit}</div>
      </div>
      {/* <div className="flex flex-wrap py-1">
                <div className="pr-6 md:pr-10 pb-2  text-gray-400">Mots utilisés :</div>
                <div>{userData.creditRestant}</div>
            </div> */}
    </div>
  );
}

export default ProfileInfo;
