import React from "react";
import ReactDOM from "react-dom";
import { themeCtx } from "../../../context/ThemeContext";

import { LinearProgress, CircularProgress } from "../../atoms";

const Modal = ({
  isShow,
  textUnique,
  plagiatText,
  currentOperation,
  loading,
}) => {
  // Theme context
  const darkCtx = themeCtx();

  const Overlay = () => {
    return (
      <>
        {isShow && (
          <div
            className={`fixed w-full top-0 right-0 bottom-0 left-0 ${
              darkCtx.isDark ? "bg-[rgba(0,0,0,0.8)]" : "bg-[rgba(0,0,0,0.4)]"
            }  z-10 h-full`}
          ></div>
        )}
      </>
    );
  };

  const CardModal = () => {
    return (
      <>
        {isShow && (
          <div className="flex flex-col items-center justify-center z-20 w-full absolute top-0 bottom-0 left-0 right-0">
            <div
              className={`w-3/5 h-80 pt-5 rounded-md text-center  ${
                darkCtx.isDark
                  ? "bg-[#212121] text-white"
                  : "bg-white text-gray-500"
              }`}
            >
              <h1>Please, waiting</h1>
              <div className="flex items-center justify-center gap-10 pt-6">
                <CircularProgress
                  pourcentage={textUnique}
                  circularWidth={200}
                  title="Text Unique"
                />
                <CircularProgress
                  pourcentage={plagiatText}
                  circularWidth={200}
                  title="Text Plagié"
                />
              </div>
              <div className="flex flex-col items-center text-violet-600 font-bold pt-8 space-y-5">
                <h1>{currentOperation}</h1>
                <LinearProgress pourcent={loading} />
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(<CardModal />, document.getElementById("card"))}
    </React.Fragment>
  );
};

export default Modal;
