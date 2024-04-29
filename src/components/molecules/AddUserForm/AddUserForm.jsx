import React from "react";
import { UserInput } from "../../atoms";
import Button from "../../atoms/Button/Button";
import { RxCross1 } from "react-icons/rx";

const AddUserForm = ({ closeModalHandler }) => {
  return (
    <React.Fragment>
      <div className="w-5/12 h-full my-20 bg-white rounded-lg px-5 py-4">
        <div className="flex items-center justify-between px-20">
          <h1 className="text-lg font-bold text-gray-800 text-center">
            Ajouter un nouveau membre
          </h1>
          <button
            onClick={closeModalHandler}
            className="flex flex-col items-center justify-center bg-gray-200 w-12 h-12 rounded-full"
          >
            <RxCross1 size={20} />
          </button>
        </div>
        <div className="w-full px-20 py-4 space-y-3">
          <UserInput label="Email" type="text" />
          <UserInput label="Mot de passe" type="password" />
          <UserInput label="Nombre de mots" type="number" />
          <div className="pt-5">
            <Button className="w-full" buttonName="Ajouter" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddUserForm;
