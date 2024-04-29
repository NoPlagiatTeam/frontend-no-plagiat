import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkPassword } from "../../utils/checkPassword";
import { createUser } from "../../services/service_api";

import { CustomInput, Errorbar } from "../../components/atoms";
import { FiUser } from "react-icons/fi";
import { IoMdLock } from "react-icons/io";
import { SecondLogo } from "../../assets";
import "./Sign.css";
import { routes } from "../../services/routes";
import URL_SERVER from "../../services/routes";

const SignInPage = () => {
  // state
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [erreur, setErreur] = useState({ isErreur: false, message: "" });

  const inputValues = [userName, userPassword];

  // hook
  const navigate = useNavigate();

  // handlers
  const createUserHandler = async () => {
    try {
      const user = {
        nom: userName,
        password: userPassword,
        credit: 6000,
      };
      if (checkPassword(userPassword)) {
        resetInputValue();
        await createUser(URL_SERVER + routes[4].path, user);
        navigate("/login");
      } else {
        setErreur({
          isErreur: true,
          message: "the size of the password must be at least 6 characters",
        });
      }
    } catch (err) {
      setErreur({
        isErreur: true,
        message: "Please, check your connection and try again",
      });
    }
  };

  const resetInputValue = () => {
    setUserName("");
    setUserPassword("");
  };

  return (
    <div className="">
      <Errorbar erreur={erreur.isErreur} message={erreur.message} />
      {/* la partie 1/3 */}
      <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between bg-white">
        <div className=" lg:w-1/3 p-10 ">
          <div className="container flex justify-center items-center ">
            <img
              src={SecondLogo}
              className="w-247 h-53 pb-20"
              alt="Phone image"
            />
          </div>
          <button className="container flex justify-center items-center mb-5 ">
            <h2>Créer un compte</h2>
          </button>

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
            {" "}
            <button
              disabled={inputValues.includes("") ? true : false}
              onClick={createUserHandler}
              className={`relative rounded-lg ${
                inputValues.includes("") ? "bg-orange-300" : "bg-orange-500"
              } px-7 py-4 text-white w-full`}
            >
              S’inscrire
            </button>
          </div>

          <div className="flex items-center pb-6">
            <div className="flex-1 h-0 border-t border-gray-400"></div>
            <div className="mx-4">OU </div>
            <div className="flex-1 h-0 border-t border-gray-400"></div>
          </div>

          <div className="group relative flex justify-center ">
            {" "}
            <Link to="/login">
              <button className="relative rounded-lg border border-orange-500 px-7 py-4 text-orange-500 w-full ">
                Se connecter
              </button>
            </Link>
          </div>
        </div>

        {/* Partie 2/3   */}
        <div className="  flex lg:w-2/3 h-screen  bg-second-100 ml-auto items-center justify-center">
          <div className="princing-table">
            <div className="detail">
              <h2 className="mb-2">Choisissez un forfait qui vous convient</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, veritatis. Lorem ipsum dolor
              </p>
            </div>
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
                <div className="button">
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
                <div className="button">
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
                <div className="button">
                  <button>Souscrire</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
