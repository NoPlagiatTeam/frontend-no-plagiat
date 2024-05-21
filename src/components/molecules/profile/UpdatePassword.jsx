import { useState } from 'react';
import { CustomInput } from '../../atoms/index.js';
import { IoMdLock } from 'react-icons/io';
import URL_SERVER from '../../../services/routes.js';
import { useGetStoreData } from '../../../hooks/useGetStoreData.js';
import { getUserDataFromStorage } from '../../../utils/getUserFromStorage.js';
import { useNavigate } from 'react-router-dom';

function UpdatePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const navigate = useNavigate();

  const userToken = useGetStoreData('token');
  const userData = getUserDataFromStorage('user');

  // update user creadentials
  const updateUserHandler = async () => {
    try {
      const credentials = {
        email: userData.email,
        password: newPassword,
        userId: userData.id,
      };

      if (newPassword === confirmedPassword) {
        const response = await fetch(URL_SERVER + '/api/user/update', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            'Content-Type': 'Application/json',
            Authorization: 'Bearer ' + userToken,
          },
        });

        await response.json();
        navigate('/dashboard');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`flex flex-col md:w-1/2 md:pl-12`}>
      <div className={`p-10`}>
        <div className={`container flex justify-center items-center `}></div>
        <div className={`pb-9`}>
          <CustomInput
            placeholder="new password"
            icon={<IoMdLock />}
            name="New password"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className={`pb-9`}>
          <CustomInput
            placeholder="confirmed password"
            icon={<IoMdLock />}
            name="Confirmed password"
            type="password"
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
        </div>

        <button
          onClick={updateUserHandler}
          className={`text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-base px-5 py-2.5`}
        >
          Changer
        </button>
      </div>
    </div>
  );
}

export default UpdatePassword;
