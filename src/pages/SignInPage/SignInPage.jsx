
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { checkPassword } from '../../utils/checkPassword';
import { createUser } from '../../services/service_api';

import { CustomInput, Errorbar } from '../../components/atoms';
import { FiUser } from 'react-icons/fi';
import { IoMdLock } from 'react-icons/io';
import { SecondLogo } from '../../assets';
import './Sign.css';
import { routes } from '../../services/routes';
import URL_SERVER from '../../services/routes';
import { ProgressStep } from '../../components/molecules';

const SignInPage = () => {
  // state
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [erreur, setErreur] = useState({ isErreur: false, message: '' });
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({});

  const inputValues = [userName, userPassword];

  // hook
  const navigate = useNavigate();

  // handlers
  const createUserHandler = async () => {
    try {
      const user = {
        nom: userName,
        email: userEmail,
        password: userPassword,
        credit: 6000,
      };
      if (checkPassword(userPassword)) {
        resetInputValue();
        const data = await createUser(URL_SERVER + routes[4].path, user);
        console.log(data);
        setUser(data.data);
        setStep(step + 1);
        setErreur('');
      } else {
        setErreur({
          isErreur: true,
          message: 'the size of the password must be at least 6 characters',
        });
      }
    } catch (err) {
      setErreur({
        isErreur: true,
        message: 'Please, check your connection and try again',
      });
    }
  };

  const resetInputValue = () => {
    setUserName('');
    setUserPassword('');
    setUserEmail('');
  };

  const subscriptionHandler = async () => {
    try {
      const subscription = {
        formuleId: 1,
        userId: user.id,
      };

      console.log(subscription);
      const response = await fetch(URL_SERVER + routes[6].path, {
        method: routes[5].typeRequest,
        body: JSON.stringify(subscription),
        headers: {
          'Content-Type': 'Application/json',
        },
      });

      const data = await response.json();
      navigate('/login');
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Errorbar erreur={erreur.isErreur} message={erreur.message} />
      {/* la partie 1/3 */}
      {step == 1 && (
        <div className="flex flex-col items-center w-full h-screen bg-white py-4">
          <div className="w-1/3">
            <ProgessStep step={step} />
          </div>
          <div className="w-1/4 pt-2">
            <div className="flex justify-center w-full pl-14">
              <img src={SecondLogo} className="" alt="Phone image" />
            </div>
            <h2 className="text-gray-600 text-md text-center py-4">
              Créer un compte
            </h2>

            <div className="pb-6">
              <CustomInput
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="nom d'utilisateur"
                icon={<FiUser />}
                name="Nom d’utilisateur"
              />
            </div>

            <div className="pb-6">
              <CustomInput
                type="text"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Email"
                icon={<FiUser />}
                name="Email"
              />
            </div>

            <div className="pb-9">
              <CustomInput
                type="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                placeholder="mot de passe"
                icon={<IoMdLock />}
                name="Mot de passe"
              />
            </div>

            <div className="group relative flex justify-center pb-6">
              {' '}
              <button
                disabled={inputValues.includes('') ? true : false}
                onClick={createUserHandler}
                className={`relative rounded-lg ${
                  inputValues.includes('') ? 'bg-orange-300' : 'bg-orange-500'
                } px-12 py-3 text-white w-full cursor-pointer`}
              >
                S’inscrire
              </button>
            </div>

            <div className="flex items-center pb-6">
              <div className="flex-1 h-0 border-t border-gray-400"></div>
              <div className="mx-4">OU </div>
              <div className="flex-1 h-0 border-t border-gray-400"></div>
            </div>

            <Link to="/login">
              <button className="rounded-lg border border-orange-500 px-12 py-3 text-orange-500 w-full ">
                Se connecter
              </button>
            </Link>
          </div>
        </div>
      )}
      {/* Partie 2/3   */}
      {step === 2 && (
        <div className="flex flex-col items-center w-full h-screen bg-white py-4">
          <div className="w-1/3">
            <ProgressStep step={step} />
          </div>
          <div className="w-full h-screen">
            <div className="princing-table py-12">
              <div className="grid">
                <div className="box classique">
                  <div className="title">Classique</div>
                  <div className="price">
                    <b>24 500 Fcfa</b>
                    <span> par mois</span>
                  </div>
                  <div className="features">
                    <div>210 000 Mots</div>
                    <div>533 Pages</div>
                    <div>1 Mois</div>
                    <div>1 Siège d'utilisateur</div>
                    <div>30 000 Mots limite</div>
                  </div>
                  <div onClick={subscriptionHandler} className="button">
                    <button>Souscrire</button>
                  </div>
                </div>

                <div className="box entreprise">
                  <div className="title">Entreprise</div>
                  <div className="price">
                    <b>52 000 Fcfa</b>
                    <span> par mois</span>
                  </div>
                  <div className="features">
                    <div>390 000 Mots</div>
                    <div>1000 Pages</div>
                    <div>2 Mois</div>
                    <div>3 Sièges d'utilisateurs</div>
                    <div>30 000 Mots limite</div>
                  </div>
                  <div onClick={subscriptionHandler} className="button">
                    <button>Souscrire</button>
                  </div>
                </div>

                <div className="box institut">
                  <div className="title">Institut</div>
                  <div className="price">
                    <b>115 500 Fcfa</b>
                    <span> par mois</span>
                  </div>
                  <div className="features">
                    <div>1 090 000 Mots</div>
                    <div>8333 Pages</div>
                    <div>3 Mois</div>
                    <div>3 Sièges d'utilisateurs</div>
                    <div>30 000 Mots limite</div>
                  </div>
                  <div onClick={subscriptionHandler} className="button">
                    <button>Souscrire</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInPage;
