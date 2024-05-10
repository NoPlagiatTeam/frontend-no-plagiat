import * as React from 'react';
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { checkPassword } from "../../../utils/checkPassword";
// import { createUser } from "../../../services/service_api";
import './Sign.css';
import { Errorbar } from "../../../components/atoms";
// import { FiUser } from "react-icons/fi";
// import { IoMdLock } from "react-icons/io";
// import { SecondLogo } from "../../../assets";
// import { routes } from "../../../services/routes";
// import URL_SERVER from "../../../services/routes";

const SignInPage = () => {
  // state
  // const [userName, setUserName] = useState("");
  // const [userPassword, setUserPassword] = useState("");
  // const [erreur, setErreur] = useState({ isErreur: false, message: "" });



  // hook
  // const navigate = useNavigate();

  // handlers
  // const createUserHandler = async () => {
  //   try {
  //     const user = {
  //       nom: userName,
  //       password: userPassword,
  //       credit: 6000,
  //     };
  //     if (checkPassword(userPassword)) {
  //       resetInputValue();
  //       await createUser(URL_SERVER + routes[4].path, user);
  //       navigate("/login");
  //     } else {
  //       setErreur({
  //         isErreur: true,
  //         message: "the size of the password must be at least 6 characters",
  //       });
  //     }
  //   } catch (err) {
  //     setErreur({
  //       isErreur: true,
  //       message: "Please, check your connection and try again",
  //     });
  //   }
  // };

  // const resetInputValue = () => {
  //   setUserName("");
  //   setUserPassword("");
  // };

  return (
    <div className="">
      {/* <Errorbar erreur={erreur.isErreur} message={erreur.message} /> */}
     
      <div className="flex h-full  items-center justify-center lg:justify-center bg-white">
 
        <div className="  flex  h-screen  bg-second-100 ml-auto">
          <div className="princing-table">
            <div className="detail">
              <h2 className="mb-2">Choisissez un forfait qui vous convient</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, veritatis. Lorem ipsum dolor
              </p>
            </div>
            <div className="grid">
              <div className="box classNameique">
                <div className="title">classNameique</div>
                <div className="price">
                  <b>24 500 Fcfa</b>
                  <span> par mois</span>
                </div>
                <div className="features">
                  <div>210 000 Mots</div>
                  <div>533 Pages</div>
                  <div>1 Mois</div>
                  <div>1 Siège utilisateur</div>
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
                  <div>3 Sièges utilisateurs</div>
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
                  <div>3 Sièges utilisateurs</div>
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
