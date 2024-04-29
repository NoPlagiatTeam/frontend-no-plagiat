import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <Link to="/">
      <img className="w-40" src={logo} alt="logo inspector" />
    </Link>
  );
};

export default Logo;
