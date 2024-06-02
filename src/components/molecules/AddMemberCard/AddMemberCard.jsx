import React, { useState } from 'react';
import { BigText, SmallText } from '../../atoms';
import { useGetStoreData } from '../../../hooks/useGetStoreData';
import URL_SERVER from '../../../services/routes';
import { storageData } from '../../../utils/storageData';

const AddMemberCard = ({ onCancel }) => {
  const [memberEmail, setMemberEmail] = useState('');
  const [memberCredit, setMemberCredit] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [erreur, setErreur] = useState('');
  const userData = useGetStoreData('user');
  const userToken = useGetStoreData('token');

  const addMemberHandler = async () => {
    const memberData = {
      email: memberEmail,
      credit: memberCredit,
      userId: userData.id,
    };

    setIsLoading(true);

    try {
      const response = await fetch(URL_SERVER + '/api/user/add-team-member', {
        method: 'POST',
        body: JSON.stringify(memberData),
        headers: {
          'Content-Type': 'Application/json',
          Authorization: 'Bearer ' + userToken,
        },
      });

      const data = await response.json();
      if (data.data.errors) {
        // console.log(data);
        return setErreur(data.data.errors[0].message);
      }
      setMemberCredit('');
      setMemberEmail('');
      storageData(data.user_parent, 'user');

      //   console.log(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-1/3 bg-white h-98 rounded-lg px-4 py-5">
      <BigText
        textStyle="text-lg text-gray-600 font-bold text-center"
        title="Add new member"
      />
      <SmallText title={erreur && erreur} color="text-red-600 text-center" />
      <div className="space-y-3 py-3">
        <input
          type="email"
          placeholder="member email"
          value={memberEmail}
          className="h-12 px-3 w-full text-sm font-semibold rounded-lg bg-gray-50 border border-gray-200"
          onChange={(e) => setMemberEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="number of words"
          value={memberCredit}
          className="h-12 px-3 w-full text-sm font-semibold rounded-lg bg-gray-50 border border-gray-200"
          onChange={(e) => setMemberCredit(e.target.value)}
        />
      </div>
      <div className="w-full flex items-center gap-2">
        <button
          onClick={addMemberHandler}
          disabled={!memberCredit && !memberEmail}
          className={`w-1/2 px-8 py-2 rounded-lg ${
            isLoading ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600'
          } text-white hover:bg-orange-500 transition-all`}
        >
          Add member
        </button>
        <button
          onClick={onCancel}
          className="w-1/2 px-8 py-2 rounded-lg bg-red-600 text-white hover:bg-red-500 transition-all"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddMemberCard;
