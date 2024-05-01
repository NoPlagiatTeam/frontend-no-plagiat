import React, { useState } from "react";

import { IoMdLock } from "react-icons/io";
import { CustomInput } from "../../components/atoms";
import { Sidebar } from "../../components/molecules";

const ProfilPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-white h-screen flex">
      <Sidebar setOpen={setIsOpen} open={isOpen} itempage={1} />

      <div
        className={`overflow-scroll overflow-y-scroll flex flex-col items-center w-full py-8`}
      >
        <div class="text-gray-600 body-font bg-white">
          <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
            <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
              <div class="container flex justify-between items-center">
                <div className="flex flex-Row">
                  <img
                    class="w-15 h-15 rounded-full bg-purple-400"
                    src="/src/assets/images/profil.png"
                    alt="Rounded avatar"
                  />
                  <div className="flex flex-col p-2">
                    <div>Easin Arafat</div>
                    <div className="text-gray-400">Free Account</div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-base px-5 py-2.5"
                >
                  {" "}
                  Modifier{" "}
                </button>
              </div>
              <div className="py-6">informations</div>
              <div className="flex flex-wrap py-1 ">
                <div className="pr-6 pb-2  text-gray-400">Nom Utilisateur:</div>
                <div>User name</div>
              </div>

              <div className="flex flex-wrap py-1 ">
                <div className="pr-24   pb-2  text-gray-400">Email :</div>
                <div>EasinArafat@gmail.com</div>
              </div>

              <div className="flex flex-wrap py-1 ">
                <div className="pr-10 pb-2  text-gray-400">Mots totaux: :</div>
                <div>20000</div>
              </div>

              <div className="flex flex-wrap py-1 ">
                <div className="pr-10 pb-2  text-gray-400">Mots utilisés :</div>
                <div>1500</div>
              </div>
            </div>
            <div class="flex flex-col md:w-1/2 md:pl-12">
              <div class="  bg-white p-10">
                <div class="container flex justify-center items-center ">
                  <div class="group relative flex justify-center w-full pb-4">
                    {" "}
                    <button class="relative rounded-lg border border-orange-500 px-7 py-4 text-orange-500 w-full ">
                      S'inscrire
                    </button>
                  </div>
                </div>
                <div class="container flex justify-center items-center "></div>
                <div class="pb-9">
                  <CustomInput
                    placeholder="Entrez votre mot de passe"
                    icon={<IoMdLock />}
                    name="ancien mot de passe"
                  />
                </div>
                <div class="pb-9">
                  <CustomInput
                    placeholder="Entrez votre mot de passe"
                    icon={<IoMdLock />}
                    name="nouveau mot de passe"
                  />
                </div>
                <div class="pb-9">
                  <CustomInput
                    placeholder="Entrez votre mot de passe"
                    icon={<IoMdLock />}
                    name="Contrimer votre password"
                  />
                </div>

                <button
                  type="submit"
                  class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-base px-5 py-2.5"
                >
                  {" "}
                  Changer{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
