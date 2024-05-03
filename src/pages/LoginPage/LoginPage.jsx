import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authUser } from "../../services/service_api";

import { CustomInput, Errorbar } from "../../components/atoms";
import { FiUser } from "react-icons/fi";
import { IoMdLock } from "react-icons/io";
import { SecondLogo } from "../../assets";
import { ImageLogin } from "../../assets";
import { routes } from "../../services/routes";
import URL_SERVER from "../../services/routes";
import { useUser } from "../../context/userContext";
import { storageData } from "../../utils/storageData";


const LoginPage = () => {
  // state
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [erreur, setErreur] = useState({ isErreur: false, message: "" });

  // context
  const userCtx = useUser();

  const navigate = useNavigate();
  const inputValues = [userEmail, userPassword];

  // handlers
  const authenticateUserHandler = async () => {
    const user = {
      email: userEmail,
      password: userPassword,
    };

    try {
      const response = await authUser(URL_SERVER + routes[5].path, user);
      resetInputHandler();
      if (response.message && !response.data) {
        setErreur({ isErreur: true, message: response.message });
      } else if (response.data) {
        userCtx.setUser(response.data);
        console.log(response.data)
        storageData(response.data, "user");
        navigate("/");
      }
    } catch (e) {
      setErreur({
        isErreur: true,
        message: "Please, check your connection and try again",
      });
    }
  };

  const resetInputHandler = () => {
    setUserPassword("");
  };

  return (
    <div className="">
      {/* la partie 1/3 */}
      <Errorbar erreur={erreur.isErreur} message={erreur.message} />
      <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between bg-white">
        <div className=" lg:w-1/3 p-10 ">
          <div className="container flex justify-center items-center ">
            <img src={SecondLogo} className="w-247 h-53 pb-20" alt="Phone image" />
          </div>
          <div className="container flex justify-center items-center ">
            <h2>Se connecter à son compte</h2>
          </div>

          <div className="pb-6">
            <CustomInput
              type="text"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Eva"
              icon={<FiUser />}
              name="Username"
            />
          </div>

          <div className="pb-9">
            <CustomInput
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
              icon={<IoMdLock />}
              name="Mot de passe"
            />
          </div>

          <div className="group relative flex justify-center pb-6">
            <button
              disabled={inputValues.includes("") ? true : false}
              onClick={authenticateUserHandler}
              className={`relative rounded-lg ${
                inputValues.includes("") ? "bg-orange-300" : "bg-orange-500"
              } px-7 py-4 text-white w-full`}
            >
              Se connecter
            </button>
          </div>

          <div className="flex items-center pb-6">
            <div className="flex-1 h-0 border-t border-gray-400"></div>
            <div className="mx-4">OU </div>
            <div className="flex-1 h-0 border-t border-gray-400"></div>
          </div>

          <div className="group relative flex justify-center ">
            {" "}
            <Link to="/sign-up">
              <button className="relative rounded-lg border border-orange-500 px-7 py-4 text-orange-500 w-full ">
                S'inscrire
              </button>
            </Link>
          </div>
        </div>

        {/* Partie 2/3   */}
        <div className="  flex lg:w-2/3 h-screen bg-gray-200  ml-auto items-center justify-center">
          {/* <div class="group relative">  <button class="relative rounded-lg bg-black px-7 py-4 text-white">Follow me on LogRocket</button>
          </div> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img src={ImageLogin} className="w-full" alt="Phone image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
