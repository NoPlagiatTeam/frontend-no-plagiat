import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetStoreData } from "../hooks/useGetStoreData";

const AuthChecker = ({ element }) => {
  const navigate = useNavigate();
  const userData = useGetStoreData("user");

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [navigate]);

  return <>{userData && element}</>;
};

export default AuthChecker;
