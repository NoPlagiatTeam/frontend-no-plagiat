import React from "react";
import { FiExternalLink } from "react-icons/fi";
import URL_SERVER from "../../../services/routes";

const Reference = ({ reference }) => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between gap-3 border border-gray-300 rounded-lg px-5 py-2">
        <div className="flex items-center gap-3">
          <div
            className={`flex flex-col items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white`}
          >
            <h1 className="font-bold">
              {reference.similarity.toString().substring(0, 4)}%
            </h1>
          </div>
          <div>
            <a
              className="text-blue-700 underline"
              without
              rel="noreferrer"
              target="_blank"
              href={URL_SERVER + "/" + reference.pdfFile}
            >
              {reference.pdfFile}
            </a>
          </div>
        </div>
        <div className="text-gray-600 hover:text-blue-700 transition-all ease-in-out">
          <a
            href={URL_SERVER + "/" + reference.pdfFile}
            without
            rel="noreferrer"
            target="_blank"
          >
            <FiExternalLink size={25} />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Reference;
