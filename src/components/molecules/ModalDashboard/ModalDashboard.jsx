import React from "react";
import ReactDOM from "react-dom";

const ModalDashboard = ({ card }) => {
  const Overlay = () => {
    return (
      <div
        className={`fixed w-full top-0 right-0 bottom-0 left-0  z-30 h-full `}
      ></div>
    );
  };

  const ModaLCard = () => {
    return (
      <div className="flex flex-col items-center justify-center bg-[rgba(0,0,0,0.4)] z-40 absolute top-0 bottom-0 left-0 right-0">
        {card}
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(<ModaLCard />, document.getElementById("card"))}
    </React.Fragment>
  );
};

export default ModalDashboard;
