import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const AuthCard = ({ closeModalHandler }) => {
  return (
    <div className="bg-white w-2/5 py-5 rounded-lg flex flex-col items-center gap-6">
      <h1 className="text-md text-gray-600 text-center font-bold max-w-sm">
        Please register or log in before starting plagiarism detection
      </h1>
      <div className="flex items-center gap-4">
        <Link to="/sign-up">
          {" "}
          <Button buttonName="Sign up" />
        </Link>
        <Button
          buttonName="Cancel"
          onClick={closeModalHandler}
          className="bg-red-500"
        />
      </div>
    </div>
  );
};

export default AuthCard;
